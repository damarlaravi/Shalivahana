package com.shalivahana.dao;

import com.shalivahana.modal.Members;

import java.util.List;

/**
 * Created by Ravi on 15/10/15.
 **/
public interface MemberDAO
{
    public void addMember(Members members);
    public List<Members> getMembers();
    public void removeMember(Integer id);
}
