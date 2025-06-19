import { withInstall } from '@element-plus/utils'
import Demo from './src/demo.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElDemo: SFCWithInstall<typeof Demo> = withInstall(Demo)
export default ElDemo

export * from './src/demo'
export type { DemoInstance } from './src/instance'
