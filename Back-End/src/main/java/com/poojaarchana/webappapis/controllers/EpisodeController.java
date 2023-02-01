package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.EpisodeDto;
import com.poojaarchana.webappapis.services.EpisodeService;
import com.poojaarchana.webappapis.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/episode")
public class EpisodeController {

    @Autowired
    private EpisodeService episodeService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    String path;

    @Value("${project.file}")
    String filePath;

    @PostMapping("/story/{storyId}/create")
    public ResponseEntity<EpisodeDto> createStory(@RequestBody EpisodeDto episodeDto, @PathVariable Long storyId) {
        EpisodeDto createdEpisode = this.episodeService.createEpisode(episodeDto, storyId);
        return new ResponseEntity<EpisodeDto>(createdEpisode, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<EpisodeDto>> getAllEpisode(){
        return  ResponseEntity.ok(this.episodeService.getAllEpisode());
    }

    @GetMapping("/{episodeId}")
    public ResponseEntity<EpisodeDto> getEpisodeById(@PathVariable Long episodeId) {
        EpisodeDto episodeDto = this.episodeService.getEpisodeById(episodeId);
        return new ResponseEntity<EpisodeDto>(episodeDto, HttpStatus.OK);
    }

    @GetMapping("/story/{storyId}")
    public ResponseEntity<List<EpisodeDto>> getEpisodeByStory(@PathVariable Long storyId){
        List<EpisodeDto> episodeDtos = this.episodeService.getEpisodeByStory(storyId);
        return new ResponseEntity<List<EpisodeDto>>(episodeDtos, HttpStatus.OK);
    }

    @PutMapping("/update/{episodeId}")
    public ResponseEntity<EpisodeDto> updateEpisode(@RequestBody EpisodeDto episodeDto, @PathVariable Long episodeId){
        EpisodeDto updateEpisode = this.episodeService.updateEpisode(episodeDto, episodeId);
        return new ResponseEntity<EpisodeDto>(updateEpisode, HttpStatus.OK);
    }

    @PutMapping("/place-file/{episodeId}")
    public ResponseEntity<EpisodeDto> placeFileName(@RequestBody EpisodeDto episodeDto, @PathVariable Long episodeId){
        EpisodeDto updateEpisode = this.episodeService.placeFileName(episodeDto, episodeId);
        return new ResponseEntity<EpisodeDto>(updateEpisode, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{episodeId}")
    public ApiResponse deleteEpisode(@PathVariable Long episodeId) {
        this.episodeService.deleteEpisode(episodeId);
        return new ApiResponse("Episode is deleted successfully", true);
    }

    @PostMapping("/image/upload/{episodeId}")
    public ResponseEntity<EpisodeDto> uploadEpisodeImage(@RequestParam("image") MultipartFile image, @PathVariable Long episodeId) throws IOException {
        EpisodeDto episodeDto = this.episodeService.getEpisodeById(episodeId);
        String fileName = this.fileService.uploadImage(path, image);
        episodeDto.setImageName(fileName);
        EpisodeDto uploadImage = this.episodeService.updateEpisode(episodeDto, episodeId);
        return new ResponseEntity<EpisodeDto>(uploadImage, HttpStatus.OK);
    }

    @PostMapping("/poster/upload/{episodeId}")
    public ResponseEntity<EpisodeDto> uploadEpisodePoster(@RequestParam("image") MultipartFile image, @PathVariable Long episodeId) throws IOException {
        EpisodeDto episodeDto = this.episodeService.getEpisodeById(episodeId);
        String fileName = this.fileService.uploadImage(path, image);
        episodeDto.setPosterImage(fileName);
        EpisodeDto uploadImage = this.episodeService.updateEpisode(episodeDto, episodeId);
        return new ResponseEntity<EpisodeDto>(uploadImage, HttpStatus.OK);
    }

    @PostMapping("/file/upload/{episodeId}")
    public ResponseEntity<EpisodeDto> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable Long episodeId) throws IOException {
        EpisodeDto episodeDto = this.episodeService.getEpisodeById(episodeId);
        String fileName = this.fileService.uploadImage(filePath, file);
        episodeDto.setFileName(fileName);
        EpisodeDto uploadFile = this.episodeService.updateEpisode(episodeDto, episodeId);
        return new ResponseEntity<EpisodeDto>(uploadFile, HttpStatus.OK);
    }

    @GetMapping(value = "/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @GetMapping(value = "/poster/{posterImage}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadPoster(@PathVariable("posterImage") String posterImage, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, posterImage);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @GetMapping(value = "/file/{fileName}", produces = MediaType.TEXT_MARKDOWN_VALUE)
    public void downloadFile(@PathVariable("fileName") String fileName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(filePath, fileName);
        response.setContentType(MediaType.TEXT_MARKDOWN_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

}
