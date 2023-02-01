package com.poojaarchana.webappapis.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EpisodePostDto {
    private long episodePostId;

    private String ep_number;

    private String content;

    private String imageName;

    private String posterImage;

    private String fileName;

    private StoryPostDto storyPost;
}
