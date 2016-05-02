import App from 'src/App.vue'
import Overview from 'pages/Overview.vue'
import Project from 'pages/Project.vue'
import Task from 'pages/Task.vue'
import System from 'pages/System.vue'
import Admin from 'pages/Admin.vue'
import Documents from 'pages/Documents.vue'
import About from 'pages/About.vue'

const Routers = function (router) {
  router.map({
    '/': {
      name: 'index',
      component: App
    },
    '/overview': {
      name: 'overview',
      component: Overview
    },
    '/project': {
      name: 'project',
      component: Project
    },
    '/task': {
      name: 'task',
      component: Task
    },
    '/system': {
      name: 'system',
      component: System
    },
    '/admin': {
      name: 'admin',
      component: Admin
    },
    '/documents': {
      name: 'documents',
      component: Documents
    },
    '/about': {
      name: 'about',
      component: About
    }
  })
  router.redirect({
    '*': '/'
  })
}

export default Routers
