<template>
    <div class="cascader-item" :style="{height:height}">
        <div class="left">
            <div class="label" v-for="item in sourceItems" @click="onClickLabel(item)">
                {{item.name}}
                <icon class="icon" name="right" v-if="item.children"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-item :height="height" :source-items="rightItems" :level="level+1"
            :selected="selected" @update:selected="updateSelected"></gulu-cascader-item>
        </div>
    </div>
</template>

<script>
import Icon from './icon'
export default {
    name: "guluCascaderItem",
    components: { Icon },
    props: {
        sourceItems: {
            type: Array
        },
        selected: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            default: 0
        },
        height: {
            type: String
        }
    },
    data() {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems() {
            let currentSelected = this.selected[this.level]
            if (currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    methods: {
        onClickLabel(item) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item
            copy.splice(this.level+1)
            this.$emit('update:selected',copy)
        },
        updateSelected(newSelected){
            this.$emit('update:selected',newSelected)
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #eee;
.cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        height: 100%;
        overflow: auto;
        .label {
            padding: 4px 8px;
            .icon {
                margin-left: 1em;
                fill: #aaa;
                transform: scale(.7);
            }
        }
    }
    .right {
        height: 100%;
        border-left: 1px solid $border-color;
    }
}
</style>
