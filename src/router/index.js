import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import view1 from '@/components/view1';
import view2 from '@/components/view2';
import view3 from '@/components/view3';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/1',
      name: 'view1',
      component: view1,
    },
    {
      path: '/2',
      name: 'HelloWorld',
      component: view2,
    },
    {
      path: '/3',
      name: 'HelloWorld',
      component: view3,
    },
  ],
});
