package com.poojaarchana.webappapis.repositories;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.entities.Story;
import com.poojaarchana.webappapis.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoryRepository extends JpaRepository<Story, Long> {

    List<Story> findByCategory(Category category);

    List<Story> findByUser(User user);

    @Query("SELECT p FROM Story p WHERE " +
            "p.title LIKE CONCAT('%',:query, '%')" +
            "Or p.description LIKE CONCAT('%', :query, '%') ")
    List<Story> searchStory(String query);

}
