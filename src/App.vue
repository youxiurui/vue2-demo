<template>
  <div id="app">
    <!-- <Communication/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Communication from './components/ComponentCommunication/index.vue';
import ajax from './ajax'
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
  },
  async mounted(){
    let url='/api/simpleWeather/query'
    let params={
      city:'璧山',
      key:'b3ecfff793a7352308b6dd6faaf277b1'
    }
    // let res=await ajax(url,'GET',params)
    // console.log(res)
  },
  components: {
    Communication
  }
}
</script>

<style>

</style>
