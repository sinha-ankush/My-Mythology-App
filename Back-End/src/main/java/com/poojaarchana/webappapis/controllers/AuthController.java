package com.poojaarchana.webappapis.controllers;

import com.poojaarchana.webappapis.entities.User;
import com.poojaarchana.webappapis.exceptions.ApiException;
import com.poojaarchana.webappapis.payloads.JwtAuthRequest;
import com.poojaarchana.webappapis.payloads.JwtAuthResponse;
import com.poojaarchana.webappapis.payloads.UserDto;
import com.poojaarchana.webappapis.repositories.UserRepository;
import com.poojaarchana.webappapis.security.JwtTokenHelper;
import com.poojaarchana.webappapis.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

  @Autowired
  private JwtTokenHelper jwtTokenHelper;

  @Autowired
  private UserDetailsService userDetailsService;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UserService userService;

  @Autowired
  private ModelMapper modelMapper;

  @Autowired
  private UserRepository userRepository;


  @PostMapping("/login")
  public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception {
    this.authenticate(request.getUsername(), request.getPassword());
    UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
    String token = this.jwtTokenHelper.generateToken(userDetails);

    JwtAuthResponse response = new JwtAuthResponse();
    response.setToken(token);
    response.setUser(this.modelMapper.map((User) userDetails, UserDto.class));
    return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
  }

  private void authenticate(String username, String password) throws Exception {

    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
    try {
      this.authenticationManager.authenticate(authenticationToken);
    } catch (BadCredentialsException e) {
      System.out.println("Invalid Detials !!");
      throw new ApiException("Invalid username or password !!");
    }

  }

  @PostMapping("/register")
  public ResponseEntity<UserDto> registerUser(@Valid @RequestBody UserDto userDto) {
    UserDto registeredUser = this.userService.registerNewUser(userDto);
    return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
  }

  @PostMapping("/register/admin")
  public ResponseEntity<UserDto> registerAdmin(@Valid @RequestBody UserDto userDto) {
    UserDto registeredUser = this.userService.registerAdmin(userDto);
    return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
  }

}
