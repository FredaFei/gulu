<template>
    <div class="cascader-wrapper">
        <div class="cascader" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <gulu-cascader-item :source-items="source"></gulu-cascader-item>
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
    .cascader-wrapper{
        .popover{
            border: 1px solid red;
        }
    }
</style>
