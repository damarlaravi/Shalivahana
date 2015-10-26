package com.shalivahana.dao;

import com.shalivahana.modal.Member;

import java.util.List;

/**
 * Created by Ravi on 15/10/15.
 **/
public interface MemberDAO
{
    public void addMember(Member members);
    public List<Member> getMembers();
    public void removeMember(Integer id);
}
