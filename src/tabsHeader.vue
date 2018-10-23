<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guluTabsHeader',
    inject: ['eventBus'],
    mounted() {
        this.eventBus.$on('update:selected', (name, vm) => {
            console.log(vm.$el)
            console.log(vm.$el.getBoundingClientRect())
            let { width, left } = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            // todo line的宽度有偏移
            this.$refs.line.style.left = `${left}px`
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs-header {
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid #ddd;
    > .line {
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #1890ff;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    > .action-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1em;
    }
}
</style>
