import VueRouter from 'vue-router';

let routes=[
    {
        path: '/about',
        component: require('./components/AboutPage.vue')
    },
    {
        path: '/notfound',
        component: require('./components/NotFound.vue')
    }
];

export default new VueRouter({routes});