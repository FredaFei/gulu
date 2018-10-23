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
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        if (this.$children.length === 0) {
            console &&
                console.warn &&
                console.warn('tabs的子组件应该是tabs-header和tabs-body,但是你没有写子组件')
        }
        this.$children.forEach(vm => {
            if (vm.$options.name === 'guluTabsHeader') {
                vm.$children.forEach(childVm => {
                    if (
                        childVm.$options.name === 'guluTabsItem' &&
                        childVm.name === this.selected
                    ) {
                        this.eventBus.$emit(
                            'update:selected',
                            this.selected,
                            childVm
                        )
                    }
                })
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs-content {
}
</style>
