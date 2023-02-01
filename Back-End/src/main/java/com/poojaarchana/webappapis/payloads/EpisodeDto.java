package com.poojaarchana.webappapis.payloads;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EpisodeDto {

    private long id;

    private String ep_number;

    private String content;

    private String imageName;

    private String posterImage;

    private String fileName;

    private StoryDto story;

}
