package com.shalivahana.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Ravi on 19/10/15.
 **/

@Controller
@RequestMapping("/members")
public class MemberController {

    @RequestMapping("/member-view")
    public String getRailwayStationPartialPage(ModelMap modelMap)
    {
        return "members/member-view";
    }
}
