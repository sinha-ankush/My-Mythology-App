package com.poojaarchana.webappapis.services;


import com.poojaarchana.webappapis.payloads.StoryPostDto;

import java.util.List;

public interface StoryPostService {
    List<StoryPostDto> getStoryPostByCategory(Long categoryId);

    List<StoryPostDto> getAllStoryPost();

    StoryPostDto getStoryPostById(Long storyPostId);

    StoryPostDto updateStoryPost(StoryPostDto storyPostDto, Long storyPostId);

    StoryPostDto createStoryPost(StoryPostDto storyPostDto, Long userId, Long categoryId);

    List<StoryPostDto> getStoryPostByUser(Long userId);

    void deleteStoryPost(Long storyPostId);
}
