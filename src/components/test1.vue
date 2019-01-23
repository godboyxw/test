<template>
  <div id="demo">
    <div>
      <button @click="show=!show">Toggle</button>
      <transition name="fade">
        <p v-show="show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  created () {
    console.log(this.$route) //path: "/test"  meta:{index: 2}  name: "test"  fullPath: "/test" params: {}
  }
}
</script>

<style scoped>
/* .fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
