import Login from '../views/Login';
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';
import Topic from '../views/Topic';
import SubTopic from '../views/SubTopic';
import Weatherapp from '../views/Weatherapp';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },

  { path: '/weatherapp', name: 'Weatherapp', component: Weatherapp },

  {
    path: '/topics',
    name: 'Topic',
    component: [
      { path: '/topics/subtopic', name: 'Sub Topic', component: SubTopic },
      { path: null, name: 'Topic', component: Topic },
    ],
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: true,
  },
];

export default indexRoutes;
