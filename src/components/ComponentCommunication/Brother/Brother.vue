<template>
    <div class="brother">
        <h3>兄弟组件</h3>
        <h3>接收到的兄弟的数据：name:{{ person.name}}，age:{{ person.age }}</h3>
    </div>
</template>


<script>
import { EventBus } from '../eventBus'
export default {
    data(){
        return {
            person:{}
        }
    },
    created() {
        // 使用事件总线接收兄弟组件的数据
        EventBus.$on('event-name', (data) => {
            // 使用$set将数据转化为具有响应式的数据
            this.$set(this.person,'name',data.name)
            this.$set(this.person,'age',data.age)
        });
        // console.log(this)
    },
    mounted(){
        // 使用$attrs接收父组件的数据
        console.log(this.$attrs.foo)
    }
}

</script>

<style scoped>
.brother {
    color: blue;
}
</style>
