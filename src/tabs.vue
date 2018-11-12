<template>
    <div class="tabs-content" :class="classes">
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
            required: true
        },
        // todo direction 待定
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) > -1
            }
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
    computed: {
        classes() {
            return this.direction
        }
    },
    mounted() {
        this.checkChildren()
        this.selectedTabs()
    },
    methods: {
        checkChildren() {
            if (this.$children.length === 0) {
                console &&
                    console.warn &&
                    console.warn(
                        'tabs的子组件应该是tabs-header和tabs-body,但是你没有写子组件'
                    )
            }
        },
        selectedTabs() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'guluTabsHeader') {
                    vm.$children.forEach(childVm => {
                        if (
                            childVm.$options.name === 'guluTabsItem' &&
                            childVm.name === this.selected
                        ) {
                            this.eventBus &&
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
}
</script>

<style lang="scss">
.tabs-content {
    position: relative;
}
</style>
