import VueRouter from "vue-router";
let routes=[
    {
        path: '/about',
        component:require('./components/AboutPage.vue')
    }
];
export default new VueRouter({routes});