import Overview from 'pages/Overview.vue'
import OverviewService from 'pages/OverviewService.vue'
import OverviewSetup from 'pages/OverviewSetup.vue'

import Project from 'pages/Project.vue'
import ProjectList from 'pages/ProjectList.vue'
import ProjectAdd from 'pages/ProjectAdd.vue'

import Task from 'pages/Task.vue'
import TaskList from 'pages/TaskList.vue'
import RegressionTest from 'pages/RegressionTest.vue'
import RiskRetrieval from 'pages/RiskRetrieval.vue'

import Tools from 'pages/Tools.vue'
import ToolsDebug from 'pages/ToolsDebug.vue'

import System from 'pages/System.vue'

import Admin from 'pages/Admin.vue'

import Documents from 'pages/Documents.vue'

import About from 'pages/About.vue'
import Production from 'pages/Production.vue'

const Routers = function (router) {
  router.map({
    '/overview': {
      name: 'overview',
      component: Overview,
      subRoutes: {
        '/service': {
          name: 'overview.service',
          component: OverviewService
        },
        '/setup': {
          name: 'overview.setup',
          component: OverviewSetup
        }
      }
    },
    '/project': {
      name: 'project',
      component: Project,
      subRoutes: {
        '/list': {
          name: 'project.list',
          component: ProjectList
        },
        '/add': {
          name: 'project.add',
          component: ProjectAdd
        }
      }
    },
    '/task': {
      name: 'task',
      component: Task,
      subRoutes: {
        '/list': {
          name: 'task.list',
          component: TaskList
        },
        '/add': {
          name: 'task.add',
          component: Task
        },
        '/regression': {
          name: 'task.regression',
          component: RegressionTest
        },
        '/bug': {
          name: 'task.bug',
          component: RiskRetrieval
        }
      }
    },
    'tools': {
      name: 'tools',
      component: Tools,
      subRoutes: {
        '/debug': {
          name: 'tools.debug',
          component: ToolsDebug
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
        '/network': {
          name: 'system.network',
          component: System
        },
        '/block': {
          name: 'system.block',
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
        '/index': {
          name: 'documents.index',
          component: Documents
        }
      }
    },
    '/about': {
      name: 'about',
      component: About,
      subRoutes: {
        '/production': {
          name: 'about.production',
          component: Production
        }
      }
    }
  })
  router.redirect({
    '*': '/',
    '/': '/overview/service',
    '/overview': '/overview/service',
    '/project': '/project/list',
    '/task': '/task/list',
    '/task/add': '/project/add',
    '/tools': '/tools/debug',
    '/system': '/system/users',
    '/admin': '/admin/project',
    '/documents': '/documents/index',
    '/about': '/about/production'
  })
}

export default Routers
