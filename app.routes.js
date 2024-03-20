// app.routes.js
import IndexPage from './index.svelte';
import AboutPage from './about.svelte';

export const routes = [
    {
        name: '/',
        component: IndexPage
    },
    {
        name: 'about',
        component: AboutPage
    }
];