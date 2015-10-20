package com.shalivahana.service;

import com.shalivahana.dao.MemberDAO;
import com.shalivahana.modal.Members;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by rdemarla on 19-Oct-15.
 **/

@Service("memberService")
public class MemberServiceImpl implements MemberService
{
    private MemberDAO memberDAO;

    public void setMemberDAO(MemberDAO memberDAO) {
        this.memberDAO = memberDAO;
    }

    @Override
    @Transactional
    public void addMember(Members member) {
        memberDAO.addMember(member);
    }
}
