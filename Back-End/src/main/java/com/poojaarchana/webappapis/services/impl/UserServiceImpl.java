package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.config.AppConstants;
import com.poojaarchana.webappapis.entities.Role;
import com.poojaarchana.webappapis.entities.User;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.UserDto;
import com.poojaarchana.webappapis.repositories.RoleRepository;
import com.poojaarchana.webappapis.repositories.UserRepository;
import com.poojaarchana.webappapis.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ModelMapper modelMapper;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private RoleRepository roleRepository;

  @Override
  public UserDto registerNewUser(UserDto userDto) {

    User user = this.modelMapper.map(userDto, User.class);
    // encoded the password
    user.setPassword(this.passwordEncoder.encode(user.getPassword()));

    Role role = this.roleRepository.findById(AppConstants.NORMAL_USER).get();

    user.getRoles().add(role);

    User newUser = this.userRepository.save(user);

    return this.modelMapper.map(newUser, UserDto.class);
  }

  @Override
  public UserDto registerAdmin(UserDto userDto) {

    User user = this.modelMapper.map(userDto, User.class);
    // encoded the password
    user.setPassword(this.passwordEncoder.encode(user.getPassword()));

    Role role = this.roleRepository.findById(AppConstants.ADMIN_USER).get();

    user.getRoles().add(role);

    User newUser = this.userRepository.save(user);

    return this.modelMapper.map(newUser, UserDto.class);
  }

  @Override
  public UserDto createUser(UserDto userDto) {
    User user = this.dtoToUser(userDto);
    User savedUser = this.userRepository.save(user);
    return this.userToDto(savedUser);
  }

  @Override
  public UserDto updateUser(UserDto userDto, Long userId) {
    User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    user.setName(userDto.getName());
    user.setEmail(userDto.getEmail());
    user.setPassword(userDto.getPassword());
    user.setContact(userDto.getContact());
    user.setGender(userDto.getGender());
    user.setAge(userDto.getAge());
    user.setInterest(userDto.getInterest());
    User updatedUser = this.userRepository.save(user);
    return this.userToDto(updatedUser);
  }

  @Override
  public UserDto getUserById(Long userId) {
    User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    return this.userToDto(user);
  }

  @Override
  public List<UserDto> getAllUsers() {
    List<User> users = this.userRepository.findAll();
    return users.stream().map(this::userToDto).collect(Collectors.toList());
  }

  @Override
  public void deleteUser(Long userId) {
    User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    this.userRepository.delete(user);
  }

  private User dtoToUser(UserDto userDto) {
    return this.modelMapper.map(userDto, User.class);
  }

  public UserDto userToDto(User user) {
    return this.modelMapper.map(user, UserDto.class);
  }
}
