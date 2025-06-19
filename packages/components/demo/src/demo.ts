import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const demoProps = buildProps({
  message: {
    type: String,
    default: '我是demo组件',
  },
} as const)
export type DemoProps = ExtractPropTypes<typeof demoProps>

export const demoEmits = {
  showMsg: (msg: string) => typeof msg === 'string',
}
export type DemoEmits = typeof demoEmits
