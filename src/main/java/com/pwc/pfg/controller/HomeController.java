package com.pwc.pfg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/")
public class HomeController {
    @RequestMapping("/ticker")
    public String tickerHome(){
        return "tickerhome";
    }

    @GetMapping("/login")
    public String loginUser(){
        return "login";
    }
}
