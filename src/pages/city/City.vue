<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :hotCities="hotCities" :cities="cities"></city-list>
    </div>

</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  methods: {
    getCityInfo () {
      // 这里then传入的是函数名，作为argument 不是调用
      axios.get('/api/city.json').then(this.getCitySucc)
    },
    getCitySucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }

}
</script>

<style>

</style>
