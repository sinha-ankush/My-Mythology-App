package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.entities.Post;
import com.poojaarchana.webappapis.entities.User;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.PostDto;
import com.poojaarchana.webappapis.payloads.PostResponse;
import com.poojaarchana.webappapis.repositories.CategoryRepository;
import com.poojaarchana.webappapis.repositories.PostRepository;
import com.poojaarchana.webappapis.repositories.UserRepository;
import com.poojaarchana.webappapis.services.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

  @Autowired
  private PostRepository postRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private CategoryRepository categoryRepository;

  @Autowired
  private ModelMapper modelMapper;

  @Override
  public PostDto createPost(PostDto postDto, Long userId, Long categoryId) {
    User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
    Post post = this.modelMapper.map(postDto, Post.class);
    post.setImageName("default.png");
    post.setDate(new Date());
    post.setUser(user);
    post.setCategory(category);
    Post newPost = this.postRepository.save(post);
    return this.modelMapper.map(newPost, PostDto.class);
  }

  @Override
  public PostDto updatePost(PostDto postDto, Long postId) {
    Post post = this.postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
    post.setTitle(postDto.getTitle());
    post.setContent(postDto.getContent());
    post.setImageName(postDto.getImageName());
    Post updatedPost = this.postRepository.save(post);
    return this.modelMapper.map(updatedPost, PostDto.class);
  }

  @Override
  public void deletePost(Long postId) {
    Post post = this.postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
    this.postRepository.delete(post);
  }

  @Override
  public PostResponse getAllPosts(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {

    Sort sort = (sortDir.equalsIgnoreCase("ascending")) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

    Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);

    Page<Post> postPage = this.postRepository.findAll(pageable);

    List<Post> allPosts = postPage.getContent();

    List<PostDto> postDtos = allPosts.stream().map((post) -> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());

    PostResponse postResponse = new PostResponse();

    postResponse.setContent(postDtos);
    postResponse.setPageNumber(postPage.getNumber());
    postResponse.setPageSize(postPage.getSize());
    postResponse.setTotalElements(postPage.getTotalElements());
    postResponse.setTotalPages(postPage.getTotalPages());
    postResponse.setLastPage(postPage.isLast());

    return postResponse;

  }

  @Override
  public PostDto getPostById(Long postId) {
    Post post = this.postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
    return this.modelMapper.map(post, PostDto.class);
  }

  @Override
  public List<PostDto> getPostByUser(Long userId) {
    User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    List<Post> posts = this.postRepository.findByUser(user);
    return posts.stream().map((post) -> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
  }

  @Override
  public List<PostDto> getPostByCategory(Long categoryId) {
    Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
    List<Post> posts = this.postRepository.findByCategory(category);
    return posts.stream().map((post) -> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
  }

  @Override
  public List<PostDto> searchPost(String keyword) {
    List<Post> posts = this.postRepository.findByTitleContaining(keyword);
    return posts.stream().map((post) -> this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
  }
}
