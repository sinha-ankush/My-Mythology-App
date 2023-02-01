package com.poojaarchana.webappapis.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name= "Episodes")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Episode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "epnumber")
    private String ep_number;

    @Column(name = "content", length = 1000000000)
    private String content;

    private String imageName;

    private String posterImage;

    private String fileName;

    @ManyToOne
    private Story story;

}
