<template>
  <div id="app">
    <img src="./assets/logo.png"
         @click="push">
    <transition name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      height: 600,
      longitude: 116.404,
      latitude: 39.915,
      transitionName: ''
    }
  },
  components: {
  },
  mounted () {

  },
  methods: {
    push () {
      this.$router.push('/test')
    }
  },
  watch: {
    $route (to, from) {
      console.log(to, from)  // '/test'   '/
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'transitionRouter';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
   will-change: transform;
  transition: all 10s ease;
   position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
} */
.transitionRouter-enter-active {
  /* transition: opacity 0.3s ease; */
  animation: bounce-in 0.3s;
}
.transitionRouter-leave-active {
  animation: bounce-out 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  25% {
    transform: translate3d(-75%, 0, 0);
  }
  50% {
    transform: translate3d(-50%, 0, 0);
  }
  75% {
    transform: translate3d(-25%, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(25%, 0, 0);
  }
  50% {
    transform: translate3d(50%, 0, 0);
  }
  75% {
    transform: translate3d(75%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
