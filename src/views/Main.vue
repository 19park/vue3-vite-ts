<script setup lang="ts">
  import {useCart} from '../store/cart'
  const cart = useCart()
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
