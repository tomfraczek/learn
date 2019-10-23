import React from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut/SignOut';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';
import logoGold from './assets/CA_anniversary_logo.39dfdf6a.svg';

const Navigation = () => (
    <div className={styles.mainNav}>
        <div className={styles.mainNavLogo}>
            <img src={logoGold} alt=""/>
        </div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <NavigationAuth
                        authUser={authUser}
                        className={styles.mainNavList}
                    />
                ) : (
                    <NavigationNonAuth
                        className={styles.mainNavList}
                    />
                )
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = ({ authUser, className }) => (
    <ul className={className}>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {!!authUser.roles[ROLES.TEACHER] && (
            <li>
                <Link to={ROUTES.TEACHER}>Teacher</Link>
            </li>
        )}
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = ({className}) => (
    <ul className={className}>

    </ul>
);

export default Navigation;