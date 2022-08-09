<script setup lang="ts">
  import Parent from '../components/Parent.vue'
  import {useCart} from '../store/cart'
  const cart = useCart()
</script>

<template>
  <div>
    Main
  </div>
  <Parent />
  <teleport to="body">
    <div class="top-bar" @click="cart.addItem({id:1, name: 'f'})">
      main의 자식 teleport..
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
  @import "../assets/main.scss";
</style>
