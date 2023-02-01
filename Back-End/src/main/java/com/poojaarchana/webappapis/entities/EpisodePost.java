package com.poojaarchana.webappapis.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name= "Episode_Post")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class EpisodePost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long episodePostId;

    @Column(name = "epnumber")
    private String ep_number;

    @Column(name = "content", length = 1000000000)
    private String content;

    private String imageName;

    private String posterImage;

    private String fileName;

    @ManyToOne
    private StoryPost storyPost;
}
