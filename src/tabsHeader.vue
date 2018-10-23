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
            let { width, left } = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            // 若是父元素有padding或者margin，line的水平位置会偏移
            this.$refs.line.style.left = `${left}px`
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs-header {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
    position: relative;
    > .line {
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid #1890ff;
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
