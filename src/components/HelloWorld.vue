<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

// defineProps<{ msg: string }>()

const recoServices = ref([])
const recoString = computed(() => recoServices.value.join(","))
const getRecoServices = () => {
  recoServices.value = ["admin", "customer", "driver", "mobile"]
}

onMounted(getRecoServices)

watch(recoServices, () => {
  console.log("변경됨..")
})
</script>

<template>
  <h1>{{ recoServices }}</h1>
  <h2>{{ recoString }}</h2>
</template>

<style scoped>
</style>
