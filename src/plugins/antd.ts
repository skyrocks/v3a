import type { App } from 'vue'

import { Button, Modal, Table, Menu, Input, Form, Checkbox, Radio } from 'ant-design-vue'

export function setupAntd(app: App<Element>) {
  app.use(Button).use(Form).use(Input).use(Modal).use(Table).use(Menu).use(Checkbox).use(Radio)
}
