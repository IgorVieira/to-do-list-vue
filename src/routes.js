import Profile from './components/info/Info.vue'

import Home from './components/home/Home.vue';


export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/info/:id', name:'task', component: Info, titulo: 'Info', menu: false },    
    { path: '*', component: Home, menu: false }
]