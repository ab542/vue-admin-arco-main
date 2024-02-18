export default {
  path: 'service_product_list',
  name: 'service_product_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.service_product.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-service-product', // The midline path complies with SEO specifications
      name: 'searchTable-service-product',
      component: () => import('@/views/list/search-table/index_service-product.vue'),
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
