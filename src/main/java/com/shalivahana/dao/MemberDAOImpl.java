package com.shalivahana.dao;

import com.shalivahana.modal.Members;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Ravi on 15/10/15.
 **/

@Repository
public class MemberDAOImpl implements MemberDAO
{
    private static final Logger logger = LoggerFactory.getLogger(MemberDAOImpl.class);

    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sf){
        this.sessionFactory = sf;
    }

    @Override
    public void addMember(Members member) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(member);
        logger.info("Person saved successfully, Person Details=  "+ member);
    }

    @Override
    public List<Members> getMembers() {
        return null;
    }

    @Override
    public void removeMember(Integer id) {

    }
}
