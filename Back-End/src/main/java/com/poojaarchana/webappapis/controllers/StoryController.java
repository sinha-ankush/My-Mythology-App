package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.entities.Story;
import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.StoryDto;
import com.poojaarchana.webappapis.services.FileService;
import com.poojaarchana.webappapis.services.StoryService;
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
@RequestMapping("/story")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    String path;

    @PostMapping("/user/{userId}/category/{categoryId}/create")
    public ResponseEntity<StoryDto> createStory(@RequestBody StoryDto storyDto, @PathVariable Long userId, @PathVariable Long categoryId) {
        StoryDto createdStory = this.storyService.createStory(storyDto, userId, categoryId);
        return new ResponseEntity<StoryDto>(createdStory, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<StoryDto>> getStoryByUser(@PathVariable Long userId) {
        List<StoryDto> storyDtos = this.storyService.getStoryByUser(userId);
        return new ResponseEntity<List<StoryDto>>(storyDtos, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<StoryDto>> getAllStory(){
        return ResponseEntity.ok(this.storyService.getAllStory());
    }

    @GetMapping("/{storyId}")
    public ResponseEntity<StoryDto> getStoryById(@PathVariable Long storyId) {
        StoryDto storyDto = this.storyService.getStoryById(storyId);
        return new ResponseEntity<StoryDto>(storyDto, HttpStatus.OK);
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<StoryDto>> getStoryByCategory(@PathVariable Long categoryId) {
        List<StoryDto> storyDtos = this.storyService.getStoryByCategory(categoryId);
        return new ResponseEntity<List<StoryDto>>(storyDtos, HttpStatus.OK);
    }

    @PutMapping("/update/{storyId}")
    public ResponseEntity<StoryDto> updateStory(@RequestBody StoryDto storyDto, @PathVariable Long storyId) {
        StoryDto updateStory = this.storyService.updateStory(storyDto, storyId);
        return new ResponseEntity<StoryDto>(updateStory, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{storyId}")
    public ApiResponse deletePost(@PathVariable Long storyId) {
        this.storyService.deleteStory(storyId);
        return new ApiResponse("Post is deleted successfully", true);
    }

    @PostMapping("/image/upload/{storyId}")
    public ResponseEntity<StoryDto> uploadStoryImage(@RequestParam("image")MultipartFile image, @PathVariable Long storyId) throws IOException {
        StoryDto storyDto = this.storyService.getStoryById(storyId);
        String fileName = this.fileService.uploadImage(path, image);
        storyDto.setImageName(fileName);
        StoryDto uploadImage = this.storyService.updateStory(storyDto, storyId);
        return new ResponseEntity<StoryDto>(uploadImage, HttpStatus.OK);
    }

    @GetMapping(value = "/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Story>> searchStory(@RequestParam("query") String query){
        return ResponseEntity.ok(storyService.searchStory(query));
    }

}
