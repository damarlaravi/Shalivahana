package com.shalivahana.dao;

import com.shalivahana.modal.Member;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Ravi on 15/10/15.
 **/

@Repository
public class MemberDAOImpl implements MemberDAO, Serializable
{
    private static final Logger logger = LoggerFactory.getLogger(MemberDAOImpl.class);

    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sf){
        this.sessionFactory = sf;
    }

    @Override
    public void addMember(Member member) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(member);
        logger.info("Person saved successfully, Person Details=  "+ member);
    }

    @Override
    public List<Member> getMembers() {
        return null;
    }

    @Override
    public void removeMember(Integer id) {

    }
}
