<script setup lang="ts">
import {provide} from "vue"
// This starter template is using Vue 3 <script setup> SFCs
//Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
provide("message", "hello")
</script>

<template>
  <div id="nav">
      <router-link to="/">Main</router-link>
      <router-link to="/sub">Sub</router-link>
  </div>
  <router-view />
</template>

<style scoped>
  #nav {
    position: fixed;
    height: 60px;
    line-height: 60px;;
    background-color: #fff;
    top: 0;
    left :0;
    width: 100%;
  }
  #nav a {
    margin: 0 2vw;
    font-weight: bold;
  }
</style>
