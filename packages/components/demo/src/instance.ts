import type Demo from './demo.vue'

export type DemoInstance = InstanceType<typeof Demo> & unknown
