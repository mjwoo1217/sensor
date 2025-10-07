package com.woom.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

//    @Autowired
//    private UserRepository userRepository;

    @RequestMapping("/test")
    public String test() {
        return "test";
    }

}
