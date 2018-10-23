<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guluTabsHeader',
    inject: ['eventBus'],
}
</script>

<style lang="scss" scoped>
.tabs-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .action-wrapper{
        margin-left: auto;
    }
}
</style>
