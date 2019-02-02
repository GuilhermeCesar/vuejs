import Cadastro from './components/cadastro/cadastro.vue';
import Home from './components/home/home.vue';

export const routes = [
  {path:'', component:Home, titulo:'Home'},
  {path:'/cadastro',component:Cadastro, titulo:'cadastro'}
];


