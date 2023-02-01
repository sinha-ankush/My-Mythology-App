package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.EpisodePostDto;
import com.poojaarchana.webappapis.services.EpisodePostService;
import com.poojaarchana.webappapis.services.FileService;
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
@RequestMapping("/episode/post")
public class EpisodePostController {
    @Autowired
    private EpisodePostService episodePostService;

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    String path;

    @Value("${project.file}")
    String filePath;

    @PostMapping("/story/post/{storyPostId}/create")
    public ResponseEntity<EpisodePostDto> createEpisodePost(@RequestBody EpisodePostDto episodePostDto, @PathVariable Long storyPostId) {
        EpisodePostDto createdEpisodePost = this.episodePostService.createEpisodePost(episodePostDto, storyPostId);
        return new ResponseEntity<EpisodePostDto>(createdEpisodePost, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<EpisodePostDto>> getAllEpisodePost(){
        return  ResponseEntity.ok(this.episodePostService.getAllEpisodePost());
    }

    @GetMapping("/{episodePostId}")
    public ResponseEntity<EpisodePostDto> getEpisodePostById(@PathVariable Long episodePostId) {
        EpisodePostDto episodePostDto = this.episodePostService.getEpisodePostById(episodePostId);
        return new ResponseEntity<EpisodePostDto>(episodePostDto, HttpStatus.OK);
    }

    @GetMapping("/story/post/{storyPostId}")
    public ResponseEntity<List<EpisodePostDto>> getEpisodePostByStoryPost(@PathVariable Long storyPostId){
        List<EpisodePostDto> episodePostDtos = this.episodePostService.getEpisodePostByStoryPost(storyPostId);
        return new ResponseEntity<List<EpisodePostDto>>(episodePostDtos, HttpStatus.OK);
    }

    @PutMapping("/update/{episodePostId}")
    public ResponseEntity<EpisodePostDto> updateEpisodePost(@RequestBody EpisodePostDto episodePostDto, @PathVariable Long episodePostId){
        EpisodePostDto updateEpisodePost = this.episodePostService.updateEpisodePost(episodePostDto, episodePostId);
        return new ResponseEntity<EpisodePostDto>(updateEpisodePost, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{episodePostId}")
    public ApiResponse deleteEpisodePost(@PathVariable Long episodePostId) {
        this.episodePostService.deleteEpisodePost(episodePostId);
        return new ApiResponse("EpisodePost is deleted successfully", true);
    }

    @PostMapping("/image/upload/{episodePostId}")
    public ResponseEntity<EpisodePostDto> uploadEpisodePostImage(@RequestParam("image") MultipartFile image, @PathVariable Long episodePostId) throws IOException {
        EpisodePostDto episodePostDto = this.episodePostService.getEpisodePostById(episodePostId);
        String fileName = this.fileService.uploadImage(path, image);
        episodePostDto.setImageName(fileName);
        EpisodePostDto uploadImage = this.episodePostService.updateEpisodePost(episodePostDto, episodePostId);
        return new ResponseEntity<EpisodePostDto>(uploadImage, HttpStatus.OK);
    }

    @PostMapping("/poster/upload/{episodePostId}")
    public ResponseEntity<EpisodePostDto> uploadEpisodePostPoster(@RequestParam("image") MultipartFile image, @PathVariable Long episodePostId) throws IOException {
        EpisodePostDto episodePostDto = this.episodePostService.getEpisodePostById(episodePostId);
        String fileName = this.fileService.uploadImage(path, image);
        episodePostDto.setPosterImage(fileName);
        EpisodePostDto uploadImage = this.episodePostService.updateEpisodePost(episodePostDto, episodePostId);
        return new ResponseEntity<EpisodePostDto>(uploadImage, HttpStatus.OK);
    }

    @PostMapping("/file/upload/{episodePostId}")
    public ResponseEntity<EpisodePostDto> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable Long episodePostId) throws IOException {
        EpisodePostDto episodePostDto = this.episodePostService.getEpisodePostById(episodePostId);
        String fileName = this.fileService.uploadImage(filePath, file);
        episodePostDto.setFileName(fileName);
        EpisodePostDto uploadFile = this.episodePostService.updateEpisodePost(episodePostDto, episodePostId);
        return new ResponseEntity<EpisodePostDto>(uploadFile, HttpStatus.OK);
    }

    @GetMapping(value = "/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @GetMapping(value = "/poster/{posterImage}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadPoster(@PathVariable("posterImage") String posterImage, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(path, posterImage);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }

    @GetMapping(value = "/file/{fileName}", produces = MediaType.TEXT_MARKDOWN_VALUE)
    public void downloadFile(@PathVariable("fileName") String fileName, HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResource(filePath, fileName);
        response.setContentType(MediaType.TEXT_MARKDOWN_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }
}
