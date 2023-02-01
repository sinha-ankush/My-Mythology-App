package com.poojaarchana.webappapis.repositories;

import com.poojaarchana.webappapis.entities.Category;
import com.poojaarchana.webappapis.entities.Post;
import com.poojaarchana.webappapis.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

  List<Post> findByUser(User user);
  List<Post> findByCategory(Category category);

  List<Post> findByTitleContaining(String title);

}
