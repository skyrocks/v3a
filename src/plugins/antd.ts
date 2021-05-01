import type { App } from 'vue'

import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Select,
  Table,
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Breadcrumb,
  Spin
} from 'ant-design-vue'

export function setupAntd(app: App<Element>) {
  app
    .use(Row)
    .use(Col)
    .use(Button)
    .use(Form)
    .use(Input)
    .use(Select)
    .use(Table)
    .use(Layout)
    .use(Menu)
    .use(Avatar)
    .use(Dropdown)
    .use(Breadcrumb)
    .use(Spin)
}
