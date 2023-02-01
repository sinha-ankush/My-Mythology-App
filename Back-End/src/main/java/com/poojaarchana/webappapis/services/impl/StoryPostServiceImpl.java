package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.entities.StoryPost;
import com.poojaarchana.webappapis.entities.User;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.StoryPostDto;
import com.poojaarchana.webappapis.repositories.CategoryRepository;
import com.poojaarchana.webappapis.repositories.StoryPostRepository;
import com.poojaarchana.webappapis.repositories.UserRepository;
import com.poojaarchana.webappapis.services.StoryPostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoryPostServiceImpl implements StoryPostService {

    @Autowired
    private StoryPostRepository storyPostRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<StoryPostDto> getStoryPostByCategory(Long categoryId) {
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        List<StoryPost> storyPosts = this.storyPostRepository.findByCategory(category);
        return storyPosts.stream().map((storyPost) -> modelMapper.map(storyPost, StoryPostDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<StoryPostDto> getAllStoryPost() {
        List<StoryPost> storyPosts = this.storyPostRepository.findAll();
        return storyPosts.stream().map((storyPost) -> modelMapper.map(storyPost, StoryPostDto.class)).collect(Collectors.toList());
    }

    @Override
    public StoryPostDto getStoryPostById(Long storyPostId) {
        StoryPost storyPost = this.storyPostRepository.findById(storyPostId).orElseThrow(() -> new ResourceNotFoundException("StoryPost","id", storyPostId));
        return this.modelMapper.map(storyPost, StoryPostDto.class);
    }

    @Override
    public StoryPostDto updateStoryPost(StoryPostDto storyPostDto, Long storyPostId) {
        StoryPost storyPost = this.storyPostRepository.findById(storyPostId).orElseThrow(() -> new ResourceNotFoundException("StoryPost","id", storyPostId));
        storyPost.setTitle(storyPostDto.getTitle());
        storyPost.setDescription(storyPostDto.getDescription());
        storyPost.setImageName(storyPostDto.getImageName());
        StoryPost updateStory = this.storyPostRepository.save(storyPost);
        return this.modelMapper.map(updateStory, StoryPostDto.class);
    }

    @Override
    public StoryPostDto createStoryPost(StoryPostDto storyPostDto, Long userId, Long categoryId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        StoryPost storyPost = this.modelMapper.map(storyPostDto, StoryPost.class);
        storyPost.setViews((long) 0);
        storyPost.setImageName("default.png");
        storyPost.setDate(new Date());
        storyPost.setUser(user);
        storyPost.setCategory(category);
        StoryPost newStoryPost = this.storyPostRepository.save(storyPost);
        return this.modelMapper.map(newStoryPost, StoryPostDto.class);
    }

    @Override
    public List<StoryPostDto> getStoryPostByUser(Long userId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        List<StoryPost> storyPosts = this.storyPostRepository.findByUser(user);
        return storyPosts.stream().map((storyPost) -> this.modelMapper.map(storyPost, StoryPostDto.class)).collect(Collectors.toList());
    }

    @Override
    public void deleteStoryPost(Long storyPostId) {
        StoryPost storyPost = this.storyPostRepository.findById(storyPostId).orElseThrow(() -> new ResourceNotFoundException("StoryPost","id", storyPostId));
        this.storyPostRepository.delete(storyPost);
    }
}
