package com.poojaarchana.webappapis.services;

import com.poojaarchana.webappapis.payloads.UserDto;

import java.util.List;

public interface UserService {

  UserDto registerNewUser(UserDto user);
  UserDto registerAdmin(UserDto user);
  UserDto createUser(UserDto user);
  UserDto updateUser(UserDto user, Long userId);
  UserDto getUserById(Long userId);
  List<UserDto> getAllUsers();
  void deleteUser(Long userId);

}
