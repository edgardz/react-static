export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home/Home'
      }
    ]
  },
  plugins: [require.resolve('react-static-plugin-reach-router'), require.resolve('react-static-plugin-sitemap')]
}
