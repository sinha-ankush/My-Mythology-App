package com.poojaarchana.webappapis.services;

import com.poojaarchana.webappapis.payloads.EpisodeDto;

import java.util.List;

public interface EpisodeService {

    List<EpisodeDto> getAllEpisode();

    List<EpisodeDto> getEpisodeByStory(Long storyId);

    EpisodeDto getEpisodeById(Long episodeId);

    EpisodeDto updateEpisode(EpisodeDto episodeDto, Long episodeId);

    EpisodeDto createEpisode(EpisodeDto episodeDto, Long storyId);

    void deleteEpisode(Long episodeId);

    EpisodeDto placeFileName(EpisodeDto episodeDto, Long episodeId);
}
