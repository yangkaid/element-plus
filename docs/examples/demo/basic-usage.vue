<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Demo演示')
function changeDemo() {
  message.value = '改编后的文字'
}
function showMessage(val) {
  alert(`弹窗的值${val}`)
}
</script>

<template>
  <el-demo :message="message" @show-msg="showMessage" />
  <el-button type="primary" size="small" @click="changeDemo"
    >改变文字</el-button
  >
</template>
