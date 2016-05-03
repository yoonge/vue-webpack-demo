import Overview from 'pages/Overview.vue'
import Project from 'pages/Project.vue'
import Task from 'pages/Task.vue'
import System from 'pages/System.vue'
import Admin from 'pages/Admin.vue'
import Documents from 'pages/Documents.vue'
import About from 'pages/About.vue'

const Routers = function (router) {
  router.map({
    '/overview': {
      name: 'overview',
      component: Overview,
      subRoutes: {
        '/service': {
          name: 'overview.service',
          component: Overview
        },
        '/setup': {
          name: 'overview.setup',
          component: Overview
        }
      }
    },
    '/project': {
      name: 'project',
      component: Project,
      subRoutes: {
        '/list': {
          name: 'project.list',
          component: Project
        },
        '/add': {
          name: 'project.add',
          component: Project
        }
      }
    },
    '/task': {
      name: 'task',
      component: Task,
      subRoutes: {
        '/list': {
          name: 'task.list',
          component: Task
        },
        '/add': {
          name: 'task.add',
          component: Task
        },
        '/regression': {
          name: 'task.regression',
          component: Task
        },
        '/bug': {
          name: 'task.bug',
          component: Task
        }
      }
    },
    '/system': {
      name: 'system',
      component: System,
      subRoutes: {
        '/users': {
          name: 'system.users',
          component: System
        },
        '/wifi': {
          name: 'system.wifi',
          component: System
        },
        '/server': {
          name: 'system.server',
          component: System
        },
        '/logs': {
          name: 'system.logs',
          component: System
        },
        '/settings': {
          name: 'system.settings',
          component: System
        },
        '/status': {
          name: 'system.status',
          component: System
        },
        '/block': {
          name: 'system.block',
          component: System
        },
        '/network': {
          name: 'system.network',
          component: System
        },
        '/password': {
          name: 'system.password',
          component: System
        }
      }
    },
    '/admin': {
      name: 'admin',
      component: Admin,
      subRoutes: {
        '/project': {
          name: 'admin.project',
          component: Admin
        },
        '/task': {
          name: 'admin.task',
          component: Admin
        }
      }
    },
    '/documents': {
      name: 'documents',
      component: Documents,
      subRoutes: {
        '/sql': {
          name: 'documents.sql',
          component: Documents
        }
      }
    },
    '/about/production': {
      name: 'about.production',
      component: About
    }
  })
  router.redirect({
    '*': '/',
    '/': '/overview/service',
    '/overview': '/overview/service',
    '/project': '/project/list',
    '/task': '/task/list',
    '/system': '/system/users',
    '/admin': '/admin/project',
    '/documents': '/documents/sql',
    '/about': '/about/production'
  })
}

export default Routers
