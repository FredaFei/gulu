<template>
    <div class="cascader-item" :style="{height:height}">
        <div class="left">
            <div class="label" v-for="item in sourceItems" :key="item.name" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <span class="icons">
                    <template v-if="item.name===loadingItem.name">
                        <icon class="icon loading" name="loading"></icon>
                    </template>
                    <template v-else>
                        <icon class="icon next" name="right" v-if="rightArrowVisible(item)"></icon>
                    </template>
                </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-item :height="height" :source-items="rightItems" :loading-item="loadingItem"
            :level="level+1" :selected="selected" @update:selected="onUpdateSelected"
            :load-data="loadData"></gulu-cascader-item>
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
            // type: Array
        },
        loadingItem: {
            type: Object,
            default: ()=>({})
        },
        selected: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            default: 0
        },
        loadData: {
            type: Function
        },
        height: {
            type: String
        }
    },
    data() {
        return {
        }
    },
    computed: {
        rightItems() {
            if (this.selected[this.level]) {
                let selected = this.sourceItems.filter(item => item.name === this.selected[this.level].name)
                if (selected && selected[0].children && selected[0].children.length > 0) {
                    return selected[0].children
                } else {
                    return null
                }
            }
        }
    },
    methods: {
        rightArrowVisible(item){
            return this.loadData ? !item.isLeaf : item.children
        },
        onClickLabel(item) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item
            copy.splice(this.level + 1)
            this.$emit('update:selected', copy)
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/_var";
.cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        height: 100%;
        overflow: auto;
        .label {
            padding: 8px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
            &:hover{
                background: #eee;
            }
            .name{
                margin-right: 1em;
            }
            .icons {
                margin-left: auto;
                fill: #aaa;
                .next{
                    transform: scale(.7);
                }
                .loading{
                    animation: spin 1.2s infinite linear;
                }
            }
        }
    }
    .right {
        height: 100%;
        border-left: 1px solid $border-color;
    }
}
</style>
