<template>
  　　<div id="div1"
       :style="style"></div>
</template>
<script>
　　export default {
  data () {
    return {
      style: {
        width: '100%',
        height: this.height + 'px'
      }
    }
  },
  props: { //里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
    height: {
      type: Number,
      default: 500
    },
    longitude: {
      type: Number,
      default: 39.915
    }, //定义经度
    latitude: {
      type: Number,
      default: 39.915
    } //定义纬度
  },
  mounted () {
    var map = new BMap.Map("div1");
    var point = new BMap.Point(this.longitude, this.latitude);
    map.centerAndZoom(point, 12);
    var marker = new BMap.Marker(point);// 创建标注
    map.addOverlay(marker);
  }
　　}
</script>
