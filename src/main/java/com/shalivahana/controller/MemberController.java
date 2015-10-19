package com.shalivahana.controller;

import com.shalivahana.beans.MembersInfo;
import com.shalivahana.service.MemberServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Ravi on 19/10/15.
 **/

@Controller
@RequestMapping("/members")
public class MemberController {

    @Autowired
    public MemberServiceImpl memberService;

    @RequestMapping(value = "/addMember", method = RequestMethod.POST)
    public
    @ResponseBody
    void addMember(@RequestBody MembersInfo member) {
        memberService.addMember(member);
    }

    @RequestMapping("/members-view")
    public String getMembersViewPage(ModelMap modelMap)
    {
        return "members/members-view";
    }
}
