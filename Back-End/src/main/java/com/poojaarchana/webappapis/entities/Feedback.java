package com.poojaarchana.webappapis.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name= "Feedback")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname", length = 100, nullable = false)
    private String firstname;

    @Column(name = "lastname", length = 100, nullable = false)
    private String lastname;


    private String email_text;

    private Long contact;

    private String issue;

    private String description;
}
