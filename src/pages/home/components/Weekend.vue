<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
      <ul>
        <li class="item"
        v-for="item of recomList"
        :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" :alt="item.name">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.name}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <!-- <button class="item-button">查看详情</button> -->
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recomList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.title {
  line-height: 0.6rem;
  background: #eeeeee;
  text-indent: 0.3rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.2rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
