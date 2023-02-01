package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.EpisodePost;
import com.poojaarchana.webappapis.entities.StoryPost;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.EpisodePostDto;
import com.poojaarchana.webappapis.repositories.EpisodePostRepository;
import com.poojaarchana.webappapis.repositories.StoryPostRepository;
import com.poojaarchana.webappapis.services.EpisodePostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EpisodePostServiceImpl implements EpisodePostService {
    @Autowired
    private EpisodePostRepository episodePostRepository;

    @Autowired
    private StoryPostRepository storyPostRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<EpisodePostDto> getAllEpisodePost() {
        List<EpisodePost> episodePosts = this.episodePostRepository.findAll();
        return episodePosts.stream().map(this::episodePostToDto).collect(Collectors.toList());
    }

    @Override
    public List<EpisodePostDto> getEpisodePostByStoryPost(Long storyPostId) {
        StoryPost storyPost = this.storyPostRepository.findById(storyPostId).orElseThrow(()->new ResourceNotFoundException("StoryPost","id",storyPostId));
        List<EpisodePost> episodePosts = this.episodePostRepository.findByStoryPost(storyPost);
        return episodePosts.stream().map((episodePost) -> this.modelMapper.map(episodePost,EpisodePostDto.class)).collect(Collectors.toList());
    }

    @Override
    public EpisodePostDto getEpisodePostById(Long episodePostId) {
        EpisodePost episodePost = this.episodePostRepository.findById(episodePostId).orElseThrow(() -> new ResourceNotFoundException("EpisodePost", "id", episodePostId));
        return this.modelMapper.map(episodePost, EpisodePostDto.class);
    }

    @Override
    public EpisodePostDto updateEpisodePost(EpisodePostDto episodePostDto, Long episodePostId) {
        EpisodePost episodePost = this.episodePostRepository.findById(episodePostId).orElseThrow(() -> new ResourceNotFoundException("EpisodePost", "id", episodePostId));
        episodePost.setEp_number(episodePostDto.getEp_number());
        episodePost.setContent(episodePostDto.getContent());
        episodePost.setImageName(episodePostDto.getImageName());
        episodePost.setPosterImage(episodePostDto.getPosterImage());
        episodePost.setFileName(episodePostDto.getFileName());
        EpisodePost updateEpisodePost = this.episodePostRepository.save(episodePost);
        return this.modelMapper.map(updateEpisodePost, EpisodePostDto.class);
    }

    @Override
    public EpisodePostDto createEpisodePost(EpisodePostDto episodePostDto, Long storyPostId) {
        StoryPost storyPost = this.storyPostRepository.findById(storyPostId).orElseThrow(() -> new ResourceNotFoundException("StoryPost", "id", storyPostId));
        EpisodePost episodePost = this.modelMapper.map(episodePostDto, EpisodePost.class);
        episodePost.setImageName("default.png");
        episodePost.setPosterImage("defaultPoster.png");
        episodePost.setFileName("defaultFile.txt");
        episodePost.setStoryPost(storyPost);
        EpisodePost newEpisodePost = this.episodePostRepository.save(episodePost);
        return this.modelMapper.map(newEpisodePost, EpisodePostDto.class);
    }

    @Override
    public void deleteEpisodePost(Long episodePostId) {
        EpisodePost episodePost = this.episodePostRepository.findById(episodePostId).orElseThrow(() -> new ResourceNotFoundException("EpisodePost", "id", episodePostId));
        this.episodePostRepository.delete(episodePost);
    }

    private EpisodePost dtoToEpisodePost(EpisodePostDto episodePostDto){
        return  this.modelMapper.map(episodePostDto,EpisodePost.class);
    }

    private EpisodePostDto episodePostToDto(EpisodePost episodePost) {
        return this.modelMapper.map(episodePost,EpisodePostDto.class);
    }
}
