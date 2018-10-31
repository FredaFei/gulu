<template>
    <div class="cascader-item">
        <div>
            selected: {{ selected && selected[level] && selected[level].name }} level: {{ level && level }}
        </div>
        <div class="left">
            <div class="label" v-for="item in sourceItems" @click="onClickLabel(item)">
                {{item.name}}
                <icon class="icon" name="right" v-if="item.children"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-item :source-items="rightItems" :level="level+1"></gulu-cascader-item>
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
        }
    },
    data() {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems() {
            if (this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            } else {
                return null
            }
        }
    },
    methods: {
        onClickLabel(item) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item
            this.$emit('update:selected',copy)
        }
    }
}
</script>

<style lang="scss" scoped>
.cascader-item {
    // margin: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        border: 1px solid red;
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
        border: 1px solid red;
        margin-left: -1px;
    }
}
</style>
