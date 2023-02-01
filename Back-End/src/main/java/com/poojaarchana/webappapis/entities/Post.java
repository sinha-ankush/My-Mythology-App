package com.poojaarchana.webappapis.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "posts")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "post_title", length = 100, nullable = false)
  private String title;

  @Column(name = "post_content", length = 10000, nullable = false)
  private String content;

  private String imageName;

  private Date date;

  @ManyToOne
  private Category category;

  @ManyToOne
  private User user;

}
