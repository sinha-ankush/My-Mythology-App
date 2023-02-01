package com.poojaarchana.webappapis.repositories;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.entities.StoryPost;
import com.poojaarchana.webappapis.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoryPostRepository extends JpaRepository<StoryPost, Long> {

    List<StoryPost> findByCategory(Category category);

    List<StoryPost> findByUser(User user);

}
