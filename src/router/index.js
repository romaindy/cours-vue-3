import { createRouter, createWebHistory } from 'vue-router'

const pages = import.meta.glob('../pages/*.vue', { eager: true })

const routes = Object.entries(pages).map(([path, component]) => {
  const name = path.match(/\.\/pages\/(.*)\.vue$/)[1]

  return {
    path: name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`,
    name,
    component: component.default,
  }
})

const index = createRouter({
  history: createWebHistory(),
  routes,
})

export default index
