<template>
    <div class="callapse-wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'guluCallapse',
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
        this.eventBus.$emit('update:select', this.selected)
        this.eventBus.$on('update:addSelected', name => {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            if (this.single) {
                selectedCopy = [name]
            } else {
                selectedCopy.push(name)
            }
            this.eventBus.$emit('update:selected', selectedCopy)
            this.$emit('update:selected', selectedCopy)
        })
        this.eventBus.$on('update:removeSelected', name => {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            let index = selectedCopy.indexOf(name)
            selectedCopy.splice(index, 1)
            this.eventBus.$emit('update:selected', selectedCopy)
            this.$emit('update:selected', selectedCopy)
        })
    }
}
</script>

<style lang="scss" scoped>
.callapse-wrapper {
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 4px;
}
</style>
