﻿import Cookie from 'js-cookie';

export default function authPortal({ to, next }) {
    // var exceptRoute = ['portal.login', 'portal.password.forgot', 'portal.password.reset'];
    // var isExceptRoute = exceptRoute.includes(to.name);
    // if (isExceptRoute && !Cookie.get('PORTAL_ACCESS_TOKEN')) {
    //     return next();
    // } else if (isExceptRoute && Cookie.get('PORTAL_ACCESS_TOKEN') && Cookie.get('PORTAL_USER')) {
    //     return next({ name: 'portal.index' });
    // } else if (!isExceptRoute && !Cookie.get('PORTAL_ACCESS_TOKEN')) {
    //     return next({ name: 'portal.login' });
    // } else {
    return next();
    // }
}
