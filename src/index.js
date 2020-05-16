import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './components/App.vue';
import AboutPage from './pages/About.vue';
import HomePage from './pages/Home.vue';
import FilmPage from './pages/Film.vue';
import PersonPage from './pages/Person.vue';
import StudioPage from './pages/Studio.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/film/:id', component: FilmPage },
    { path: '/person/:id', component: PersonPage },
    { path: '/studio/:id', component: StudioPage },
  ],
});
createApp(App).use(router).mount('#app');
