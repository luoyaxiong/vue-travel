<template>
  <div class="detail">
      <detail-banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></detail-banner>
      <detail-header ></detail-header>
      <detail-list :categoryList="categoryList" ></detail-list>
      <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      lastId: '',
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      this.lastId = this.$route.params.id
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.getDetailInfo()
      this.lastId = this.$route.params.id
    }
  },
  mounted () {
    this.getDetailInfo()
  }

}
</script>

<style lang="stylus" scoped>
.content
  height  50rem
</style>
