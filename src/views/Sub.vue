<script setup lang="ts">
import {onMounted} from 'vue'
import Child from '../components/Child.vue'
import eventBus from '../eventBus'

onMounted(() => {
  eventBus.emit('foo')
})
</script>

<template>
  <div>
    Sub!
  </div>
  <Child />
</template>

<style scoped>
</style>
