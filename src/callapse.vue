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
            type: String,
            default: ''
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
        this.eventBus && this.eventBus.$emit('select:updated', this.selected)
        this.eventBus.$on('select:updated', name => {
            this.$emit('select:updated',name)
        })
        this.$children.forEach(vm=>{
            vm.single = this.single
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
