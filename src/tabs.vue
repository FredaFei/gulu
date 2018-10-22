<template>
    <div class="tabs-content">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'guluTabs',
    props: {
        selected: {
            type: String | Number,
            require: true
        }
    },
    data(){
        return {
            eventBus: new Vue()
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected', this.selected)
    }
}
</script>

<style lang="scss" scoped>
    .tabs-content{
    }
</style>
