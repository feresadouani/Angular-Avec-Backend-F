package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String description;
    private LocalDate date;
    private String lieu;
    private String prix;
    private int organisateurId;
    private String imageUrl;
    private int nbPlaces;
    private int nbrLikes;

    @ElementCollection
    private List<String> domaines;
}
