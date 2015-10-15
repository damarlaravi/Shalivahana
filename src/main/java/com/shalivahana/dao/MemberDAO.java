package com.shalivahana.dao;

import com.shalivahana.forms.Member;

import java.util.List;

/**
 * Created by Ravi on 15/10/15.
 **/
public interface MemberDAO
{
    public void addMember(Member member);
    public List<Member> getMembers();
    public void removeMember(Integer id);
}
