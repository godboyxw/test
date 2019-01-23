<template>
  <div>
    <!--观察数据为字符串或数组 -->
    <input v-model="example0" />
    <input v-model="example1" />
    <!--当单观察数据examples2为对象时，如果键值发生变化，为了监听到数据变化，需要添加deep:true参数 -->
    <input v-model="example2.inner0" />
    <input v-model="setData" />
    {{setData}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      example0: "",
      example1: "",
      example2: {
        inner0: 1,
        innner1: 2
      },
      test: 'test'
    }
  },
  watch: {
    example0 (curVal, oldVal) {
      console.log(curVal, oldVal);
    },
    example1: 'aFunction',//值可以为methods的方法名       //写成变量的同名函数形式，或者变量：function fn(){}
    example2: {
      //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      //同一个指针，curVal, oldVal相等，打印出来的是同一个对象或数组
      handler (curVal, oldVal) {
        console.log(curVal, oldVal)  //监控的实质是example2.inner0
      },
      deep: true
    }
  },
  methods: {
    aFunction (curVal, oldVal) {
      console.log(curVal, oldVal)
    }
  },
  computed: {
    //computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
    setData: function () {
      return this.example0 + this.test
    }
  }
  /*
  computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，
  举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化。
  这里的这个总金额使用computed属性来进行计算是最好的选择
  计算属性允许我们对指定的视图，复杂的值计算。这些值将绑定到依赖项值，只在需要时更新。

  与watch之间的区别：watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象
  watch一般用于监控路由、input输入框的值特殊处理等等，它比较适合的场景是一个数据影响多个数据
  */
}
</script>

<style scoped>
</style>

