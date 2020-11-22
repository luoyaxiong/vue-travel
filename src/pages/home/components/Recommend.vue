<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
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
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recomList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_200x200_dba18b05.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_200x200_dba18b05.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_200x200_dba18b05.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_200x200_dba18b05.jpg',
        desc: '明清两朝皇帝祭天、祈穀和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被国务院公布为第一批全国重点文物保护单位之一。1998年，“北京皇家祭坛—天坛”被列为世界文化遗产。',
        name: '天坛公园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_200x200_dba18b05.jpg',
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
  // margin-top  .2rem
  line-height: 0.6rem;
  background: #eeeeee;
  text-indent: 0.3rem;
}

.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  background: white;

  .item-img {
    height: 1.7rem;
    width: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
