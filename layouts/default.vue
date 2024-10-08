<script setup lang="ts">
import logo from "public/images/logo.png";
</script>

<template>
  <div class="d-flex flex-column centered-div gap-2">
    <div class="w-100 logo-container">
      <img :src="logo" alt="logo"/>
    </div>
    <div class="body-container d-flex flex-column">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.centered-div {
  width: 800px;
  min-height: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: grey 3px 3px 3px;
  padding: 15px;
}

.logo-container {
  text-align: center;
  margin-bottom: 10px;
}

.logo-container img {
  height: 6rem;
}

.body-container {
  background-color: #fbfbfb;
  flex-grow: 1;
  padding: 15px;
  border-radius: 10px;
}
</style>