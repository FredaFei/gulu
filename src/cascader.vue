<template>
    <div class="cascader-wrapper">
        <div class="cascader" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <gulu-cascader-item :source-items="source" :selected="selected" @update:selected="updateSelected"></gulu-cascader-item>
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
        },
        selected: {
            type: Array,
            default: ()=>[]
        }
    },
    data(){
        return {
            popoverVisible: false
        }
    },
    methods: {
        updateSelected(newSelected){
            this.$emit('update:selected',newSelected)
        }
    }
}
</script>

<style lang="scss" scoped>
    .cascader-wrapper{
        .popover{
            height: 200px;
            border: 1px solid red;
        }
    }
</style>
