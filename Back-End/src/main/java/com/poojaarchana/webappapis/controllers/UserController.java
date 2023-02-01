package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.UserDto;
import com.poojaarchana.webappapis.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserService userService;

  //POST - Create User
  @PostMapping("/create")
  public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto) {
    UserDto createdUserDto = this.userService.createUser(userDto);
    return new ResponseEntity<>(createdUserDto, HttpStatus.CREATED);
  }

  //PUT - Update User
  @PutMapping("/update/{userId}")
  public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto, @PathVariable Long userId) {
    UserDto updatedUser = this.userService.updateUser(userDto, userId);
    return ResponseEntity.ok(updatedUser);
  }

  //DELETE - Delete User
  @DeleteMapping("/delete/{userId}")
  public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long userId) {
    this.userService.deleteUser(userId);
    return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully.", true), HttpStatus.OK);
  }

  //GET - Get User
  @GetMapping("/all")
  public ResponseEntity<List<UserDto>> getAllUsers() {
    return ResponseEntity.ok(this.userService.getAllUsers());
  }

  @GetMapping("/{userId}")
  public ResponseEntity<UserDto> getUser(@PathVariable Long userId) {
    return ResponseEntity.ok(this.userService.getUserById(userId));
  }
}
