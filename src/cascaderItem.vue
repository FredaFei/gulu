<template>
    <div class="cascader-item">
        <div class="left">
            <div class="label" v-for="item in sourceItems" @click="leftSelected=item">
                {{item.name}}
                <icon class="icon" name="right" v-if="item.children"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <gulu-cascader-item :source-items="rightItems"></gulu-cascader-item>
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
        .label{
            padding: 4px 8px;
            .icon{
                margin-left: 1em;
                fill:#aaa;
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
