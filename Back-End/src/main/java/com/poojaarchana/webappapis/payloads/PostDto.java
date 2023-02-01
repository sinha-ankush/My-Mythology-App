package com.poojaarchana.webappapis.payloads;

import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class PostDto {
  private Long id;
  private String title;
  private String content;
  private String imageName;
  private Date date;
  private CategoryDto category;
  private UserDto user;
}
