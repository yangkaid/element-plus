<template>
  <div :class="ns.b()" @click="onShowMsg">
    <div :class="ns.e('title')">
      <span :class="ns.is('blue', true)">{{ message }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { demoEmits, demoProps } from './demo'
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'ElDemo',
})

const props = defineProps(demoProps)
const emit = defineEmits(demoEmits)

onMounted(() => {
  console.log('Mounted', props.message)
})

const ns = useNamespace('demo')
function onShowMsg() {
  emit('showMsg', props.message)
}

// init here
</script>
