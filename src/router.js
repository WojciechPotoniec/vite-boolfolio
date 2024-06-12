import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from './pages/HomeComponent.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectComponent from './pages/ProjectComponent.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectComponent,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: NotFound
        },
    ],
});

export { router };