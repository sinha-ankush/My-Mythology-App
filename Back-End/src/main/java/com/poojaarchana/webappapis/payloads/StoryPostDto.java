package com.poojaarchana.webappapis.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StoryPostDto {

    private long storyPostId;

    @Size(min = 4 , message = "Minimum size of title should be 4 characters")
    private String title;

    private String description;

    private String imageName;

    private Long views;

    private Date date;

    private CategoryDto category;

    private UserDto user;
}
