package com.shalivahana.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Ravi on 19/10/15.
 **/

@Controller
@RequestMapping("/home")
public class HomeController
{
    @RequestMapping("/home-view")
    public String getHomeView(ModelMap modelMap) {
        return "home/home-view";
    }
}
