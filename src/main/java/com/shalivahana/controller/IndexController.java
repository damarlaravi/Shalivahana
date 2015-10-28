package com.shalivahana.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created with IntelliJ IDEA.
 * User: Ravi Kumar
 * Date: 12/20/15
 * Time: 5:27 PM
 **/

@Controller
@RequestMapping("/")
public class IndexController {

    @RequestMapping
    public String getIndexPage() {
        return "index";
    }


}
