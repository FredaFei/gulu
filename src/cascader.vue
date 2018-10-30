<template>
    <div class="cascader-wrapper">
        <div class="cascader">
            <slot></slot>
        </div>
        <div class="popover"></div>
    </div>
</template>

<script>
export default {
    name: "guluCascader",
    props: {
        source: {
            type: Array,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
