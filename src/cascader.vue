<template>
    <div class="cascader-wrapper">
        <div class="cascader" @click="popoverVisible=!popoverVisible">
            {{ result }}
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
    computed: {
        result(){
            return this.selected.map(item=>item.name).join('/')
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
$border-color: #ddd;
$border-radius: 4px;
    .cascader-wrapper{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        .cascader{
            height: 30px;
            line-height: 30px;
            padding: 0 1em;
            margin-bottom: 6px;
            min-width: 10em;
            border: 1px solid $border-color;
            border-radius: $border-radius;
        }
        .popover{
            height: 200px;
        }
    }
</style>
