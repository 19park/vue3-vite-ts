<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    Main
  </div>
  <teleport to="body">
    <div class="top-bar">
      main의 자식 teleport..
    </div>
  </teleport>
</template>

<style scoped>
  .top-bar {
    position: fixed;
    z-index: 9999;
    background-color: blue;
    width: 100%;
    left: 0;
    top: 60px;
    height: 20px;
    text-align: center;
  }
</style>
