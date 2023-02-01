package com.poojaarchana.webappapis.payloads;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class CategoryDto {
  private long id;

  @NotBlank
  @Size(min = 4, message = "Minimum size of title should be of 4 characters")
  private String categoryTitle;

  @NotBlank
  @Size(min = 10, message = "Minimum size of title should be of 10 characters")
  private String categoryDescription;
}
