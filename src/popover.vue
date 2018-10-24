<template>
    <div class="popover-wrapper">
        <div class="popover-content" v-if="isVisible">
            <slot name="popover"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guluPopover',
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.popover-wrapper{

}
.popover-content{
    
}
</style>
