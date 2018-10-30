<template>
    <div class="cascader-item">
        <div class="level">{{sourceItem.name}}</div>
        <gulu-cascader-item
            v-for="(item,index) in sourceItem.children" v-if="sourceItem.children"
            :key="item.name"
            :source-item="item"
        ></gulu-cascader-item>
    </div>
</template>

<script>
export default {
    name: "guluCascaderItem",
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
