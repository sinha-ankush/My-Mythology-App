import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { MDBBtn } from 'mdb-react-ui-kit';
import TranslateIcon from '@mui/icons-material/Translate';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BASE_URL } from '../services/Helper';
import ReactMarkdown from 'react-markdown';
import { loadEpisodeOfStory } from '../services/EpisodeService';

import { useTranslation } from 'react-i18next';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  WhatsappShareButton,
} from "react-share";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBIcon
} from 'mdb-react-ui-kit';
import jsPDF from 'jspdf';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import axios from "axios";


function Fest_Con() {

  const msg = new SpeechSynthesisUtterance();
  msg.lang = "hi-IN";


  // const languages = [
  //   { value: '', text: "Options" },
  //   { value: 'en', text: "English" },
  //   { value: 'hi', text: "Hindi" },
  //   { value: 'te', text: "Telugu" }
  // ]
  const { t } = useTranslation();
  const [lang, setLang] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fontSec, setFontSec] = React.useState(null);
  const [audio, setAudio] = useState(null);

  const open = Boolean(anchorEl);
  const open1 = Boolean(fontSec);
  const open2 = Boolean(audio);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setFontSec(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAudio(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setFontSec(null);
  };
  const handleClose2 = () => {
    setAudio(null);
  };

  const [basicModal, setBasicModal] = useState(false);
  const [basicModal1, setBasicModal1] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const toggleShow1 = () => setBasicModal1(!basicModal1);

  const downloadPdf = () => {
    const doc = new jsPDF("portrait", "px", [2500, 1500]);

    doc.html(document.querySelector("#story"), {
      autoPaging: "text",
      callback: function (pdf) {
        pdf.save("download.pdf");
      },
    });
  };

  const shareUrl = window.location.href;
  const title = 'PoojaArchana';

  const [fontSize, setFontSize] = useState(18);

  const { id } = useParams();

  const [epStory, setEpStory] = useState('');

  const [epFile, setEpFile] = useState('');

  const [epName, setEpName] = useState('');
  useEffect(() => {
    loadEpisodeOfStory(id).then(data => {
      // console.log(data);
      // console.log(data[0].fileName)
      setEpStory(data)
      setEpName(data[0].ep_number)
      fetch(BASE_URL + '/episode/file/' + data[0].fileName)
        .then((res) => res.text())
        .then((md) => {
          setEpFile(md)
        }).catch(error => {
          console.log(error)
        })
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  msg.text = epFile;

  // implementing reading time
  // const [totalWords, setTotalWords] = useState(5);

  const allText = msg.text;
  const words = allText.split(" ");
  // console.log(words);
  console.log(words.length);
  const totalWords = words.length;
  const WORDS_PER_MINUTE = 250;

  const time = Math.ceil(totalWords / WORDS_PER_MINUTE);
  console.log(time);


  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const [resultText, setResultText] = useState(epFile);

  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.de/detect`, {
        q: resultText,
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      });
  };
  const translateText = () => {
    getLanguageSource();

    let data = {
      q: resultText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
    };
    axios.post(`https://libretranslate.de/translate`, data).then((response) => {
      setEpFile(response.data.translatedText);
    });
  };

  const languageKey = (selectedLanguage) => {
    setResultText(epFile);
    setLanguageKey(selectedLanguage.target.value);
  };

  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`).then((response) => {
      setLanguagesList(response.data);
    });

    getLanguageSource();
  }, [resultText]);




  return (
    <div style={{ 'margin': '2rem 2rem', 'padding': '2rem 2rem', 'borderRadius': '24px', 'backgroundColor': 'rgba(255, 153, 0, 0.05)', 'fontFamily': 'Inter' }}>
      <div className='bc-icons-2' >
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb purple lighten-4">
            <li class="breadcrumb-item"><a class="black-text" href="/" style={{ 'color': '#4B002D', 'fontSize': '15px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</a><i class="fas fa-angle-right mx-2"
              aria-hidden="true"></i></li>
            <li class="breadcrumb-item"><a class="black-text" href="/festivals" style={{ 'color': '#4B002D', 'fontSize': '15px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Festivals</a></li>
          </ol>
        </nav>
      </div>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center', 'color': 'black' }}>
        <p style={{ 'color': '#4B002D', 'fontSize': '24px', 'fontWeight': '600', 'lineHeight': '28px', 'padding': '0.5rem' }}>{epName} <span style={{ 'fontSize': '16px' }}>| {time} Minute Read</span></p>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
          <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignContent': 'center', 'color': 'black' }}>
            <a
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick1}
              style={{ 'marginRight': '2rem' }}
            >
              <MDBIcon fas icon="font" size='lg' />
            </a>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={fontSec}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}>
              <MenuItem onClick={() => setFontSize(fontSize + 2)}>
                <ListItemIcon>
                  <TextIncreaseIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Increase Font Size</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => setFontSize(18)}>
                <ListItemIcon>
                  <MDBIcon fas icon="font" size='lg' />
                </ListItemIcon>
                <ListItemText>Default Font Size</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => setFontSize(fontSize - 2)}>
                <ListItemIcon>
                  <TextDecreaseIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Decrease Font Size</ListItemText>
              </MenuItem>
            </Menu>
            <ListItemIcon style={{ 'color': 'black' }}>
              <TranslateIcon onClick={toggleShow1} />
            </ListItemIcon>
            <MDBModal tabIndex='-1' show={basicModal1} setShow={setBasicModal1} backdrop={false} size='sm'>
              <MDBModalDialog centered>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle><TranslateIcon />Translate</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow1}></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody style={{ 'textAlign': 'center' }}>
                    <select value={lang} onChange={languageKey}>
                      <option>Please Select Language..</option>
                      {languagesList.map((language) => {
                        return (
                          <option value={language.code}>{language.name}</option>
                        );
                      })}
                    </select>
                    <br></br>
                    <br></br>
                    <MDBBtn color="none" onClick={translateText}>
                      Translate text
                    </MDBBtn>

                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            <a
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick2}
            >
              <VolumeUpRoundedIcon />
            </a>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={audio}
              open={open2}
              onClose={handleClose2}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => window.speechSynthesis.speak(msg)}>
                <ListItemIcon>
                  <VolumeUpRoundedIcon />
                </ListItemIcon>
                <ListItemText>Play</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => window.speechSynthesis.pause()}>
                <ListItemIcon>
                  <i className="fas fa-pause"></i>
                </ListItemIcon>
                <ListItemText>Pause</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => window.speechSynthesis.resume()}>
                <ListItemIcon>
                  <i className="fas fa-play"></i>
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => window.speechSynthesis.cancel()}>
                <ListItemIcon>
                  <i className="fas fa-stop"></i>
                </ListItemIcon>
                <ListItemText>Cancel</ListItemText>
              </MenuItem>
            </Menu>



            <a
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ marginLeft: "2rem" }}
            >
              <MoreVertRoundedIcon />
            </a>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}>
              <MenuItem onClick={toggleShow}>
                <ListItemIcon>
                  <ShareSharpIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Share</ListItemText>
              </MenuItem>
              <MenuItem onClick={downloadPdf}>
                <ListItemIcon>
                  <DownloadForOfflineSharpIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Download</ListItemText>
              </MenuItem>
              <MDBModal tabIndex='-1' show={basicModal} setShow={setBasicModal} size='sm'>
                <MDBModalDialog centered>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Share <i className='fa fa-share-alt'></i></MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody style={{ 'textAlign': 'left' }}>
                      <p><EmailShareButton url={shareUrl} quote={title}> <EmailIcon size={32} round /> Email </EmailShareButton></p>
                      <p><WhatsappShareButton url={shareUrl} quote={title}> <WhatsappIcon size={32} round /> Whatsapp </WhatsappShareButton></p>
                      <p><FacebookShareButton url={shareUrl} quote={title}> <FacebookIcon size={32} round /> Facebook </FacebookShareButton></p>
                    </MDBModalBody>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </Menu>
          </div>
        </div>

      </div>
      <div style={{ 'marginLeft': '3rem', 'margin': '2rem 4rem' }}>
        <img src={BASE_URL + "/episode/poster/" + epStory.posterImage} alt='Festival Poster'></img>
        <p style={{ 'margin': '2rem', fontSize: `${fontSize}px` }} id='story'>
          {/* {t('holi')} */}
          <ReactMarkdown children={epFile} />
        </p>
      </div>


    </div>
  )
}

export default Fest_Con
