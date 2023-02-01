package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.Episode;
import com.poojaarchana.webappapis.entities.Story;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.EpisodeDto;
import com.poojaarchana.webappapis.repositories.EpisodeRepository;
import com.poojaarchana.webappapis.repositories.StoryRepository;
import com.poojaarchana.webappapis.services.EpisodeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EpisodeServiceImpl implements EpisodeService {
    @Autowired
    private EpisodeRepository episodeRepository;

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public EpisodeDto getEpisodeById(Long episodeId) {
        Episode episode = this.episodeRepository.findById(episodeId).orElseThrow(() -> new ResourceNotFoundException("Episode", "id", episodeId));
        return this.modelMapper.map(episode, EpisodeDto.class);
    }

    @Override
    public EpisodeDto updateEpisode(EpisodeDto episodeDto, Long episodeId) {
        Episode episode = this.episodeRepository.findById(episodeId).orElseThrow(() -> new ResourceNotFoundException("Episode", "id", episodeId));
        episode.setEp_number(episodeDto.getEp_number());
        episode.setContent(episodeDto.getContent());
        episode.setImageName(episodeDto.getImageName());
        episode.setPosterImage(episodeDto.getPosterImage());
        episode.setFileName(episodeDto.getFileName());
        Episode updateEpisode = this.episodeRepository.save(episode);
        return this.modelMapper.map(updateEpisode, EpisodeDto.class);
    }

    @Override
    public EpisodeDto createEpisode(EpisodeDto episodeDto, Long storyId) {
        Story story = this.storyRepository.findById(storyId).orElseThrow(() -> new ResourceNotFoundException("Story", "id", storyId));
        Episode episode = this.modelMapper.map(episodeDto, Episode.class);
        episode.setImageName("default.png");
        episode.setPosterImage("defaultPoster.png");
        episode.setFileName("defaultFile.txt");
        episode.setStory(story);
        Episode newEpisode = this.episodeRepository.save(episode);
        return this.modelMapper.map(newEpisode, EpisodeDto.class);
    }

    @Override
    public void deleteEpisode(Long episodeId) {
        Episode episode = this.episodeRepository.findById(episodeId).orElseThrow(() -> new ResourceNotFoundException("Episode", "id", episodeId));
        this.episodeRepository.delete(episode);
    }

    @Override
    public EpisodeDto placeFileName(EpisodeDto episodeDto, Long episodeId) {
        Episode episode = this.episodeRepository.findById(episodeId).orElseThrow(() -> new ResourceNotFoundException("Episode", "id", episodeId));
        episode.setFileName(episodeDto.getFileName());
        Episode updateEpisode = this.episodeRepository.save(episode);
        return this.modelMapper.map(updateEpisode, EpisodeDto.class);
    }

    @Override
    public List<EpisodeDto> getAllEpisode() {
        List<Episode> episodes = this.episodeRepository.findAll();
        return episodes.stream().map(this::episodeToDto).collect(Collectors.toList());
    }

    @Override
    public List<EpisodeDto> getEpisodeByStory(Long storyId) {
        Story story=this.storyRepository.findById(storyId).orElseThrow(()->new ResourceNotFoundException("Story","id",storyId));
        List<Episode> episodes=this.episodeRepository.findByStory(story);
        return episodes.stream().map((episode) -> this.modelMapper.map(episode,EpisodeDto.class)).collect(Collectors.toList());
    }

    private Episode dtoToEpisode(EpisodeDto episodeDto){
        return  this.modelMapper.map(episodeDto,Episode.class);
    }

    private EpisodeDto episodeToDto(Episode episode) {
        return this.modelMapper.map(episode,EpisodeDto.class);
    }

}
