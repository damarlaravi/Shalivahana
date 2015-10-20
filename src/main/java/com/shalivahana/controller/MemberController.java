package com.shalivahana.controller;

import com.shalivahana.modal.Members;
import com.shalivahana.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
public class MemberController
{
    private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

    private MemberService memberService;

    @Autowired(required=true)
    @Qualifier(value="memberService")
    public void setMemberService(MemberService ps){
        this.memberService = ps;
    }


    /*@Autowired
    public MemberServiceImpl memberService;*/


    @RequestMapping(value = "/addMember", method = RequestMethod.POST)
    public @ResponseBody void addMember(@RequestBody Members member)
    {
        if(member.getId() == 0)
        {
            //new person, add it
            this.memberService.addMember(member);
        }
        else
        {
            System.out.print("Member will Update");
            logger.info("Member will Update");
            //existing person, call update
            //this.personService.updatePerson(p);
        }

    }

    @RequestMapping("/members-view")
    public String getMembersViewPage(ModelMap modelMap)
    {
        return "members/members-view";
    }
}
