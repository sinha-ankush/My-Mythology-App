package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.entities.Story;
import com.poojaarchana.webappapis.entities.User;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.StoryDto;
import com.poojaarchana.webappapis.repositories.CategoryRepository;
import com.poojaarchana.webappapis.repositories.StoryPostRepository;
import com.poojaarchana.webappapis.repositories.StoryRepository;
import com.poojaarchana.webappapis.repositories.UserRepository;
import com.poojaarchana.webappapis.services.StoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoryServiceImpl implements StoryService {

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private StoryPostRepository storyPostRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<StoryDto> getStoryByCategory(Long categoryId) {
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        List<Story> stories = this.storyRepository.findByCategory(category);
        return stories.stream().map((story) -> this.modelMapper.map(story, StoryDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<StoryDto> getAllStory() {
        List<Story> stories = this.storyRepository.findAll();
        return stories.stream().map(this::storyToDto).collect(Collectors.toList());
    }

    @Override
    public StoryDto getStoryById(Long storyId) {
        Story story = this.storyRepository.findById(storyId).orElseThrow(() -> new ResourceNotFoundException("Story","id", storyId));
        return this.modelMapper.map(story, StoryDto.class);
    }

    @Override
    public StoryDto updateStory(StoryDto storyDto, Long storyId) {
        Story story = this.storyRepository.findById(storyId).orElseThrow(() -> new ResourceNotFoundException("Stroty", "id", storyId));
        story.setTitle(storyDto.getTitle());
        story.setDescription(storyDto.getDescription());
        story.setImageName(storyDto.getImageName());
        Story updateStory = this.storyRepository.save(story);
        return this.modelMapper.map(updateStory, StoryDto.class);
    }

    @Override
    public StoryDto createStory(StoryDto storyDto, Long userId, Long categoryId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
        Story story = this.modelMapper.map(storyDto, Story.class);
        story.setViews((long) 0);
        story.setImageName("default.png");
        story.setDate(new Date());
        story.setUser(user);
        story.setCategory(category);
        Story newStory = this.storyRepository.save(story);
        return this.modelMapper.map(newStory, StoryDto.class);
    }

    @Override
    public List<StoryDto> getStoryByUser(Long userId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        List<Story> stories = this.storyRepository.findByUser(user);
        return stories.stream().map((story) -> this.modelMapper.map(story, StoryDto.class)).collect(Collectors.toList());
    }

    @Override
    public void deleteStory(Long storyId) {
        Story story = this.storyRepository.findById(storyId).orElseThrow(() -> new ResourceNotFoundException("Story", "id", storyId));
        this.storyRepository.delete(story);
    }

    @Override
    public List<Story> searchStory(String query) {
        List<Story> stories = storyRepository.searchStory(query);
        return stories;
    }

    private Story dtoToStory(StoryDto storyDto){
        return  this.modelMapper.map(storyDto,Story.class);
    }
    private StoryDto storyToDto(Story story){
        return this.modelMapper.map(story,StoryDto.class);
    }

}
