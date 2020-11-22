<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
      <city-alphabet :cities="cities"
      @change="handleChange"></city-alphabet>
    </div>

</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      // 这里then传入的是函数名，作为argument 不是调用
      axios.get('/api/city.json').then(this.getCitySucc)
    },
    getCitySucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleChange (ele) {
      this.letter = ele
    }
  },
  mounted () {
    this.getCityInfo()
  }

}
</script>

<style>

</style>
