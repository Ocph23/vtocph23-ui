
const route = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/ButtonView.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/autocomplete',
    name: 'autocomplete',
    component: () => import('../views/AutoCompleteView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/TableView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestPage.vue'),
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../views/DialogView.vue'),
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: () => import('../views/TooltipView.vue'),
  },
  // Card
  {
    path: '/card',
    name: 'card',
    component: () => import('../views/CardView.vue')
  },
  // Select
  {
    path: '/select',
    name: 'select',
    component: () => import('../views/SelectView.vue')
  },
  // Text Area
  {
    path: '/textarea',
    name: 'textarea',
    component: () => import('../views/TextAreaView.vue')
  },
  // Tabs
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../views/TabsView.vue')
  },
  // Accordion
  {
    path: '/accordion',
    name: 'accordion',
    component: () => import('../views/AccordionView.vue')
  },
  // Button Save
  {
    path: '/button-save',
    name: 'button-save',
    component: () => import('../views/ButtonSaveView.vue')
  },
  // Toast
  {
    path: '/toast',
    name: 'toast',
    component: () => import('../views/ToastView.vue')
  },
  // Error View
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/ErrorView.vue')
  },
  // Label Item
  {
    path: '/label-item',
    name: 'label-item',
    component: () => import('../views/LabelItemView.vue')
  },
  // Status
  {
    path: '/status',
    name: 'status',
    component: () => import('../views/StatusView.vue')
  },
  // Typography
  {
    path: '/typography',
    name: 'typography',
    component: () => import('../views/TypographyView.vue')
  },
  // Wrap Text
  {
    path: '/wrap-text',
    name: 'wrap-text',
    component: () => import('../views/WrapTextView.vue')
  },
  // Modal
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../views/ModalView.vue')
  },
  // Page Title
  {
    path: '/page-title',
    name: 'page-title',
    component: () => import('../views/PageTitleView.vue')
  },
  // Coming Soon
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('../views/ComingSoonView.vue')
  },
  // Button Action
  {
    path: '/button-action',
    name: 'button-action',
    component: () => import('../views/ButtonActionView.vue')
  },
  // Sync Status
  {
    path: '/sync-status',
    name: 'sync-status',
    component: () => import('../views/SyncStatusView.vue')
  },
  // Busy Progress
  {
    path: '/busy-progress',
    name: 'busy-progress',
    component: () => import('../views/BusyProgressView.vue')
  },
]


export default route;
