package com.poojaarchana.webappapis.repositories;

import com.poojaarchana.webappapis.entities.EpisodePost;
import com.poojaarchana.webappapis.entities.StoryPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EpisodePostRepository extends JpaRepository<EpisodePost, Long> {
    List<EpisodePost> findByStoryPost(StoryPost storyPost);
}
