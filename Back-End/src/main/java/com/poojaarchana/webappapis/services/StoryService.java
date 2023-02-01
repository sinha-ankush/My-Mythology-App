package com.poojaarchana.webappapis.services;

import com.poojaarchana.webappapis.entities.Story;
import com.poojaarchana.webappapis.payloads.StoryDto;

import java.util.List;

public interface StoryService {

    List<StoryDto> getStoryByCategory(Long categoryId);

    List<StoryDto> getAllStory();

    StoryDto getStoryById(Long storyId);

    StoryDto updateStory(StoryDto storyDto, Long storyId);

    StoryDto createStory(StoryDto storyDto, Long userId,Long categoryId);

    List<StoryDto> getStoryByUser(Long userId);

    void deleteStory(Long storyId);

    List<Story> searchStory(String query);

}
