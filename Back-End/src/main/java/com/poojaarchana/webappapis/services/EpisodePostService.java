package com.poojaarchana.webappapis.services;

import com.poojaarchana.webappapis.payloads.EpisodePostDto;

import java.util.List;

public interface EpisodePostService {
    List<EpisodePostDto> getAllEpisodePost();

    List<EpisodePostDto> getEpisodePostByStoryPost(Long storyPostId);

    EpisodePostDto getEpisodePostById(Long episodePostId);

    EpisodePostDto updateEpisodePost(EpisodePostDto episodePostDto, Long episodePostId);

    EpisodePostDto createEpisodePost(EpisodePostDto episodePostDto, Long storyPostId);

    void deleteEpisodePost(Long episodePostId);
}
