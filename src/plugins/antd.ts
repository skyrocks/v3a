import type { App } from 'vue'

import { Row, Col, Button, Input, Form, Table, Modal, Menu } from 'ant-design-vue'

export function setupAntd(app: App<Element>) {
  app.use(Row).use(Col).use(Button).use(Input).use(Form).use(Table).use(Modal).use(Menu)
}
