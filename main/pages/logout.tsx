import Router from 'next/router';
import { useEffect } from 'react';
import { AUTH_TOKEN } from '../constant';

const Logout = () => {

    useEffect(() => {
        localStorage.removeItem(AUTH_TOKEN)
        Router.replace('/');
    }, [])
    return null;
}

export default Logout

