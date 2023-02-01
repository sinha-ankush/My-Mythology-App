package com.poojaarchana.webappapis.repositories;

import com.poojaarchana.webappapis.entities.Episode;
import com.poojaarchana.webappapis.entities.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Long> {

    List<Episode> findByStory(Story story);

}
