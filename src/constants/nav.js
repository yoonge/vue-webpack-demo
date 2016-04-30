export default [
  {
    name: 'overview',
    text: '服务概况',
    icon: 'grid',
    sub: [
      {name: 'overview.service', text: '服务概况', done: 'part'},
      {name: 'overview.setup', text: '如何接入'}
    ]
  },
  {
    name: 'project',
    text: '项目配置',
    icon: 'stack',
    sub: [
      {name: 'project.list', text: '项目管理', done: true, api: true, complete: true},
      {name: 'project.add', text: '添加项目', done: true, api: true, bugs: ['text', 'picker', 'api.plugins']}
    ]
  },
  {
    name: 'task',
    text: '任务管理',
    icon: 'map',
    sub: [
      {name: 'task.list', text: '任务列表'},
      {name: 'task.add', text: '新增任务'},
      {name: 'task.regression', text: '回归测试'},
      {name: 'task.bug', text: '风险检索'}
    ]
  },
  {
    name: 'tools',
    text: '调试工具',
    icon: 'tools',
    sub: [
      {name: 'tools.debug', text: '在线调试'}
    ]
  },
  {
    name: 'system',
    text: '系统管理',
    icon: 'settings',
    sub: [
      {name: 'system.users', text: '用户管理', done: true, api: 'part', bugs: ['text']},
      {name: 'system.wifi', text: 'WiFi 管理', done: 'part'},
      {name: 'system.server', text: '服务器管理'},
      {name: 'system.logs', text: '日志管理', done: true, api: true, complete: true},
      {name: 'system.settings', text: '系统设置'},
      {name: 'system.status', text: '系统配额', done: true, api: true, bugs: ['api:time', 'api:current']},
      {name: 'system.network', text: '网络设置'},
      {name: 'system.block', text: '黑名单配置'},
      {name: 'system.password', text: '密码修改', done: true, api: true}
    ]
  },
  {
    name: 'admin',
    text: '项目管理',
    icon: 'folder',
    sub: [
      {name: 'admin.project', text: '全局项目概览'},
      {name: 'admin.task', text: '全局任务管理'}
    ]
  },
  {
    name: 'documents',
    text: '技术文档',
    icon: 'file',
    sub: [
      {name: 'documents.sql', text: 'SQL 注入'}
    ]
  },
  {
    name: 'about',
    text: '关于系统',
    icon: 'info',
    sub: [
      {name: 'about.production', text: '产品介绍'}
    ]
  }
]
