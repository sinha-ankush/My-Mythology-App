package com.poojaarchana.webappapis;

import com.poojaarchana.webappapis.config.AppConstants;
import com.poojaarchana.webappapis.entities.Role;
import com.poojaarchana.webappapis.repositories.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class WebAppApisApplication implements CommandLineRunner {

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(WebAppApisApplication.class, args);
	}

  @Bean
  public ModelMapper modelMapper() {
    return new ModelMapper();
  }

  @Override
  public void run(String... args) throws Exception {

    System.out.println(this.passwordEncoder.encode("xyz"));

    try {

      Role admin = new Role();
      admin.setId(AppConstants.ADMIN_USER);
      admin.setName("ROLE_ADMIN");

      Role normal_user = new Role();
      normal_user.setId(AppConstants.NORMAL_USER);
      normal_user.setName("ROLE_NORMAL");

      List<Role> roles = List.of(admin, normal_user);

      List<Role> result = this.roleRepository.saveAll(roles);

      result.forEach(r -> {
        System.out.println(r.getName());
      });

    } catch (Exception e) {
      // TODO: handle exception
      e.printStackTrace();
    }

  }

}
