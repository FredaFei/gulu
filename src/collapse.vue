<template>
    <div class="collapse-wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'guluCollapse',
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array
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
        // 默认选中状态
        this.eventBus.$emit('update:select', this.selected)
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        this.onAddSelected(selectedCopy)
        this.onRemoveSelected(selectedCopy)
    },
    methods: {
        onAddSelected(selectedCopy) {
            this.eventBus.$on('update:addSelected', name => {
                if (this.single) {
                    selectedCopy = [name]
                } else {
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
        },
        onRemoveSelected(selectedCopy) {
            this.eventBus.$on('update:removeSelected', name => {
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.collapse-wrapper {
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 4px;
}
</style>
