<template>
    <div class="children">
        <h3>孩子组件</h3>
        <h3>自己的数据：name:{{ person.name }}，age:{{ person.age }}</h3>
        <h3>接收到的数据：name:{{ name }}，age:{{ age }}</h3>
    </div>
</template>

<script>
import { EventBus } from '../eventBus'
export default {
    data() {
        return {
            person: {
                name: 'rui',
                age: 18
            }
        }
    },
    // 使用props
    props: {
        name: {
            type: String,
            default: 'youxiurui'
        },
        age: {
            type: Number,
            default: 18
        }
    },
    methods: {
        sendData() {
            // 使用事件总线
            EventBus.$emit('event-name', this.person);
        }
    },
    mounted() {
        // 使用$emit触发自定义事件
        this.$emit('person', this.person)
        this.sendData()
    }
}

</script>

<style scoped>
.children {
    color: red;
}
</style>
