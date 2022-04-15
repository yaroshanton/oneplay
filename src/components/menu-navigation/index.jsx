import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn && (
        <>
          <NavLink
            to="/news"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Новости
          </NavLink>
          <NavLink
            to="/home"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Моя страница
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
