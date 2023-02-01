package com.poojaarchana.webappapis.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name= "Stories")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Story {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
