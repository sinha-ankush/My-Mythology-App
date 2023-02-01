package com.poojaarchana.webappapis.payloads;

import lombok.*;

import javax.validation.constraints.Size;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class StoryDto {

    private long id;

    @Size(min = 4 , message = "Minimum size of title should be 4 characters")
    private String title;

    private String description;

    private String imageName;

    private Long views;

    private Date date;

    private CategoryDto category;

    private UserDto user;

}
