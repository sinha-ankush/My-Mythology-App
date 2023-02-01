package com.poojaarchana.webappapis.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name= "Story_Post")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class StoryPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long storyPostId;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    private String imageName;

    @Column(name = "views")
    private Long views;

    private Date date;

    @ManyToOne
    private Category category;

    @ManyToOne
    private User user;

}
