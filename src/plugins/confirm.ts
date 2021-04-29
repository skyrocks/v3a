import { createVNode } from 'vue'
import { QuestionCircleOutlined } from '@ant-design/icons-vue'
import { Modal } from 'ant-design-vue'

export function confirm(title: string, ok: () => void, cancel?: () => void) {
  Modal.confirm({
    title: title,
    icon: createVNode(QuestionCircleOutlined),
    okText: '确定',
    cancelText: '取消',
    onOk: ok,
    onCancel: cancel
  })
}
