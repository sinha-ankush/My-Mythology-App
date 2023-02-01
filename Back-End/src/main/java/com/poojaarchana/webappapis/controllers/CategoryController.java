package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.CategoryDto;
import com.poojaarchana.webappapis.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

  @Autowired
  private CategoryService categoryService;

  @PostMapping("/create")
  public ResponseEntity<CategoryDto> createCategory(@Valid @RequestBody CategoryDto categoryDto) {
    CategoryDto createCategoryDto = this.categoryService.createCategory(categoryDto);
    return new ResponseEntity<>(createCategoryDto, HttpStatus.CREATED);
  }

  @PutMapping("/update/{categoryId}")
  public ResponseEntity<CategoryDto> updateCategory(@Valid @RequestBody CategoryDto categoryDto, @PathVariable Long categoryId) {
    CategoryDto updatedCategoryDto = this.categoryService.updateCategory(categoryDto, categoryId);
    return new ResponseEntity<>(updatedCategoryDto, HttpStatus.OK);
  }

  @DeleteMapping("/delete/{categoryId}")
  public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Long categoryId) {
    this.categoryService.deleteCategory(categoryId);
    return new ResponseEntity<ApiResponse>(new ApiResponse("Category Deleted Successfully.", true), HttpStatus.OK);
  }

  @GetMapping("/all")
  public ResponseEntity<List<CategoryDto>> getAllCategories() {
    return ResponseEntity.ok(this.categoryService.getAllCategory());
  }

  @GetMapping("/{categoryId}")
  public ResponseEntity<CategoryDto> getCategory(@PathVariable Long categoryId) {
    return ResponseEntity.ok(this.categoryService.getCategoryById(categoryId));
  }

}
