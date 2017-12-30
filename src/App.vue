<template>
  <div id="app">
    <!-- <Sorting/> -->
    <router-link :to="{ name: 'array' }">Array</router-link>
    <router-link :to="{name: 'numberformat'} ">Number Format</router-link>
    <router-link :to="{name: 'parent'} ">Parent</router-link>
    <router-link :to="{name: 'child'} ">Child</router-link>
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
