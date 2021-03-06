import axios from 'axios';
import store from '~/store/User';
import Cookie from 'js-cookie';

// Request interceptor
axios.interceptors.request.use(request => {
    var token = store.getters['auth/USER_ACCESS_TOKEN'];
    if (token) {
        request.headers.common['Accept'] = 'application/json';
        request.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const locale = null;
    if (locale) {
        request.headers.common['Accept-Language'] = locale;
    }
    store.dispatch('loading/setEnable', true);

    return request;
});

// Response interceptor
axios.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch('loading/setEnable', false);

    return response;
}, error => {
    store.dispatch('loading/setEnable', false);

    if (error.response.status === 401
        && error.response.data.error != undefined
        && error.response.data.error.code == 4010
        && error.response.config.url.name != 'user.login') {

        Cookie.remove('USER_ACCESS_TOKEN');
        Cookie.remove('USER_AUTHENTICATED');
    }

    return Promise.reject(error);
});
