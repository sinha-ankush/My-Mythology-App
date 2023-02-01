package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.StoryPostDto;
import com.poojaarchana.webappapis.services.FileService;
import com.poojaarchana.webappapis.services.StoryPostService;
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
@RequestMapping("/story/post")
public class StoryPostController {

    @Autowired
    private StoryPostService storyPostService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    String path;

    @PostMapping("/user/{userId}/category/{categoryId}/create")
    public ResponseEntity<StoryPostDto> createStoryPost(@RequestBody StoryPostDto storyPostDto, @PathVariable Long userId, @PathVariable Long categoryId) {
        StoryPostDto createdStory = this.storyPostService.createStoryPost(storyPostDto, userId, categoryId);
        return new ResponseEntity<StoryPostDto>(createdStory, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<StoryPostDto>> getStoryPostByUser(@PathVariable Long userId) {
        List<StoryPostDto> storyPostDtos = this.storyPostService.getStoryPostByUser(userId);
        return new ResponseEntity<List<StoryPostDto>>(storyPostDtos, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<StoryPostDto>> getAllStoryPost(){
        return ResponseEntity.ok(this.storyPostService.getAllStoryPost());
    }

    @GetMapping("/{storyPostId}")
    public ResponseEntity<StoryPostDto> getStoryPostById(@PathVariable Long storyPostId) {
        StoryPostDto storyPostDto = this.storyPostService.getStoryPostById(storyPostId);
        return new ResponseEntity<StoryPostDto>(storyPostDto, HttpStatus.OK);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<StoryPostDto>> getStoryPostByCategory(@PathVariable Long categoryId) {
        List<StoryPostDto> storyDtos = this.storyPostService.getStoryPostByCategory(categoryId);
        return new ResponseEntity<List<StoryPostDto>>(storyDtos, HttpStatus.OK);
    }

    @PutMapping("/update/{storyPostId}")
    public ResponseEntity<StoryPostDto> updateStoryPost(@RequestBody StoryPostDto storyDto, @PathVariable Long storyId) {
        StoryPostDto updateStory = this.storyPostService.updateStoryPost(storyDto, storyId);
        return new ResponseEntity<StoryPostDto>(updateStory, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{storyPostId}")
    public ApiResponse deleteStoryPost(@PathVariable Long storyPostId) {
        this.storyPostService.deleteStoryPost(storyPostId);
        return new ApiResponse("Story Post is deleted successfully", true);
    }

    @PostMapping("/image/upload/{storyPostId}")
    public ResponseEntity<StoryPostDto> uploadStoryPostImage(@RequestParam("image") MultipartFile image, @PathVariable Long storyPostId) throws IOException {
        StoryPostDto storyPostDto = this.storyPostService.getStoryPostById(storyPostId);
        String fileName = this.fileService.uploadImage(path, image);
        storyPostDto.setImageName(fileName);
        StoryPostDto uploadImage = this.storyPostService.updateStoryPost(storyPostDto, storyPostId);
        return new ResponseEntity<StoryPostDto>(uploadImage, HttpStatus.OK);
    }

    @GetMapping(value = "/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }
}
