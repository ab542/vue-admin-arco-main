export default {
  path: 'order_list',
  name: 'order_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.order.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-order-list', // The midline path complies with SEO specifications
      name: 'searchTable-order-list',
      component: () => import('@/views/list/search-table/index_order_list.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['user'],
      },
    },
    {
      path: 'card',
      name: 'card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        roles: ['user'],
      },
    },
  ],
}
