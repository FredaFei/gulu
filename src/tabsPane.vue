<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guluTabsPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number,
            require: true
        }
    },
    data(){
        return {
            active: false
        }
    },
    computed: {
        classes(){
            return {
                active: this.active
            }
        }
    },
    created() {
        console.log(this.name)
        this.eventBus.$on('update:selected', name => {
            console.log(9,name)
            this.active = name === this.name
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs-pane{
    &.active{
        background: red;
    }
}
</style>
