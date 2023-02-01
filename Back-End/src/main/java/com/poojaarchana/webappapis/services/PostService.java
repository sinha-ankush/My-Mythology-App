package com.poojaarchana.webappapis.services;

import com.poojaarchana.webappapis.payloads.PostDto;
import com.poojaarchana.webappapis.payloads.PostResponse;

import java.util.List;

public interface PostService {

  PostDto createPost(PostDto postDto, Long userId, Long categoryId);

  PostDto updatePost(PostDto postDto, Long postId);

  void deletePost(Long postId);

  PostResponse getAllPosts(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

  PostDto getPostById(Long postId);

  List<PostDto> getPostByUser(Long userId);

  List<PostDto> getPostByCategory(Long categoryId);

  List<PostDto> searchPost(String keyword);

}
