import Overview from 'pages/Overview.vue'
import OverviewService from 'pages/OverviewService.vue'
import OverviewSetup from 'pages/OverviewSetup.vue'

import Project from 'pages/Project.vue'
import ProjectList from 'pages/ProjectList.vue'
import ProjectAdd from 'pages/ProjectAdd.vue'

import Task from 'pages/Task.vue'
import TaskList from 'pages/TaskList.vue'
import TaskRegressionTest from 'pages/TaskRegressionTest.vue'
import TaskRiskRetrieval from 'pages/TaskRiskRetrieval.vue'

import Tools from 'pages/Tools.vue'
import ToolsDebug from 'pages/ToolsDebug.vue'

import System from 'pages/System.vue'
import SystemUsers from 'pages/SystemUsers.vue'
import SystemWiFi from 'pages/SystemWiFi.vue'
import SystemServer from 'pages/SystemServer.vue'
import SystemLogs from 'pages/SystemLogs.vue'
import SystemSettings from 'pages/SystemSettings.vue'
import SystemStatus from 'pages/SystemStatus.vue'
import SystemNetwork from 'pages/SystemNetwork.vue'
import SystemBlock from 'pages/SystemBlock.vue'
import SystemPassword from 'pages/SystemPassword.vue'

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
          component: TaskRegressionTest
        },
        '/bug': {
          name: 'task.bug',
          component: TaskRiskRetrieval
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
          component: SystemUsers
        },
        '/wifi': {
          name: 'system.wifi',
          component: SystemWiFi
        },
        '/server': {
          name: 'system.server',
          component: SystemServer
        },
        '/logs': {
          name: 'system.logs',
          component: SystemLogs
        },
        '/settings': {
          name: 'system.settings',
          component: SystemSettings
        },
        '/status': {
          name: 'system.status',
          component: SystemStatus
        },
        '/network': {
          name: 'system.network',
          component: SystemNetwork
        },
        '/block': {
          name: 'system.block',
          component: SystemBlock
        },
        '/password': {
          name: 'system.password',
          component: SystemPassword
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
