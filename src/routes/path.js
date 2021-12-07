const path = (root, sublink) => {
    return `${root}${sublink}`;
};

const ROOT_AUTH = '/auth';

export const PATH_AUTH = {
    root: ROOT_AUTH,
    login: path(ROOT_AUTH, '/login'),
    register: path(ROOT_AUTH, '/register')
};

export const PATH_PAGE = {
    home: '/',
    cart: '/cart',
    category: '/:slugCategory',
    detail: '/:slugProduct'
};