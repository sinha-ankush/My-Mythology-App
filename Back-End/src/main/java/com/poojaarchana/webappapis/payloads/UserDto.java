package com.poojaarchana.webappapis.payloads;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.*;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class UserDto {
  private Long id;

  @NotEmpty
  @Size(min = 3, message = "Username must be of 3 characters !")
  private String name;

  @NotEmpty
  @Email(message = "Email is not valid !")
  private String email;

  @NotEmpty
  @Pattern(regexp = "^(?=.*[0-9])"+"(?=.*[a-z])(?=.*[A-Z])"+"(?=.*[@#$%^&+=])"+"(?=\\S+$).{8,20}$", message = "Password must contain at least 8 characters and at most 20 characters and at least 1 uppercase, 1 lowercase, 1 special character and 1 digit ")
  private String password;

  @NotNull
  private Long contact;

  private String gender;

  private int age;

  @NotEmpty
  private String interest;

  private Set<RoleDto> roles = new HashSet<>();

  @JsonIgnore
  public String getPassword() {
    return this.password;
  }

  @JsonProperty
  public void setPassword(String password){
    this.password=password;
  }
}
