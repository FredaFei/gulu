<template>
    <div class="cascader-wrapper">
        <div class="cascader" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <div v-for="sourceItem in source" :key="sourceItem.name">
                <gulu-cascader-item :source-item="sourceItem"></gulu-cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
import guluCascaderItem from './cascaderItem'
export default {
    name: "guluCascader",
    components: { guluCascaderItem },
    props: {
        source: {
            type: Array,
            require: true
        }
    },
    data(){
        return {
            popoverVisible: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
