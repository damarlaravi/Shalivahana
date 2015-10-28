package com.shalivahana.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Ravi on 27/10/15.
 **/

@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/login-info")
    public String getLoginView(ModelMap modelMap)
    {
        return "login/login-info";
    }
}
