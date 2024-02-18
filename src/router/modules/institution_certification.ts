export default {
  path: 'institution_certification',
  name: 'institution_certification',
  component: () => import('@/views/form/index.vue'),
  meta: {
    locale: 'menu.institution_certification',
    icon: 'icon-settings',
    requiresAuth: true,
  },
  children: [
    {
      path: 'step',
      name: 'step',
      component: () => import('@/views/form/step/index_institution_certification.vue'),
      meta: {
        locale: 'menu.form.step',
        requiresAuth: true,
        roles: ['user'],
      },
    },
    {
      path: 'group',
      name: 'group',
      component: () => import('@/views/form/group/index.vue'),
      meta: {
        locale: 'menu.form.group',
        requiresAuth: true,
        roles: ['user'],
      },
    },
  ],
}
