package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.CategoryDto;
import com.poojaarchana.webappapis.repositories.CategoryRepository;
import com.poojaarchana.webappapis.services.CategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  private CategoryRepository categoryRepository;

  @Autowired
  private ModelMapper modelMapper;

  @Override
  public CategoryDto createCategory(CategoryDto categoryDto) {
    Category category = this.dtoToCategory(categoryDto);
    Category savedCategory = this.categoryRepository.save(category);
    return this.categoryToDto(savedCategory);
  }

  @Override
  public CategoryDto updateCategory(CategoryDto categoryDto, Long categoryId) {
    Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
    category.setCategoryTitle(categoryDto.getCategoryTitle());
    category.setCategoryDescription(categoryDto.getCategoryDescription());
    Category updatedCategory = this.categoryRepository.save(category);
    return this.categoryToDto(updatedCategory);
  }

  @Override
  public CategoryDto getCategoryById(Long categoryId) {
    Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
    return this.categoryToDto(category);
  }

  @Override
  public List<CategoryDto> getAllCategory() {
    List<Category> categories = this.categoryRepository.findAll();
    return categories.stream().map(this::categoryToDto).collect(Collectors.toList());
  }

  @Override
  public void deleteCategory(Long categoryId) {
    Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category", "id", categoryId));
    this.categoryRepository.delete(category);
  }

  private Category dtoToCategory(CategoryDto categoryDto) {
    return this.modelMapper.map(categoryDto, Category.class);
  }

  private CategoryDto categoryToDto(Category category) {
    return this.modelMapper.map(category, CategoryDto.class);
  }
}
