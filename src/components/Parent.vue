<script setup lang="ts">
import {fetchAll} from "../api/recoServices"
import { computed, onMounted, ref, watch } from 'vue'
import Child from "./Child.vue"

// defineProps<{ msg: string }>()

const recoServices = ref<string[]>([])
const recoString = computed(() => recoServices.value.join(","))
const getRecoServices = async () => {
  recoServices.value = await fetchAll()
}

onMounted(getRecoServices)

watch(recoServices, () => {
  console.log("변경됨..1")
})
</script>

<template>
  <h1>{{ recoServices }}</h1>
  <h2>{{ recoString }}</h2>
  <Child/>
</template>

<style scoped>
</style>
