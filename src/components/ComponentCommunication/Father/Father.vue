<template>
  <div>
    <h2>父亲组件</h2>
    <ChildrenVue ref="child" name="youxiurui" :age=22 @person="showPerson($event)"/>
    <BrotherVue foo="foo"/>
  </div>
</template>

<script>
import BrotherVue from '../Brother/Brother.vue'
import ChildrenVue from '../Children/Children.vue'
export default {
    components:{
        ChildrenVue,
        BrotherVue
    },
    methods:{
        // 使用$emit触发自定义事件接收子组件的数据
        showPerson(data){
            // console.log(data)
        }
    },
    mounted(){
        // console.log(this.$refs.child)
    }
}

</script>

<style scoped>

</style>
