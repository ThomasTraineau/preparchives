
const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{path: '', component: () => import('pages/Index.vue')},
			{name: 'portail', path: 'portail', component: () => import('pages/Portail.vue')},
			{name: 'annales', path: 'annales', component: () => import('pages/Annales.vue')}
		]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
