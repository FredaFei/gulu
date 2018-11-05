<template>
    <div class="cascader-wrapper">
        <div class="cascader" @click="popoverVisible=!popoverVisible">
            {{ result }}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <gulu-cascader-item :source-items="source" :selected="selected" 
            @update:selected="onUpdateSelected" :load-data="loadData":height="popoverHeight"></gulu-cascader-item>
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
            // type: Array,
            require: true,
            default: []
        },
        selected: {
            type: Array,
            default: () => []
        },
        popoverHeight: {
            type: String,
        },
        loadData: {
            type: Function
        }
    },
    data() {
        return {
            popoverVisible: false
        }
    },
    computed: {
        result() {
            return this.selected.map(item => item.name).join('/')
        }
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
            let lastItem = newSelected[newSelected.length - 1]
            console.log('lastItem')
            console.log(lastItem)
            let simplest = (children, id) => {
                return children.filter(item => item.id === id)[0]
            }
            let complex = (children, id) => {
                let hasChildrem = []
                let noChildrem = []
                children.forEach(item => {
                    if (item.children) {
                        hasChildrem.push(item)
                    } else {
                        noChildrem.push(item)
                    }
                })
                let found = simplest(noChildrem, id)
                if (found) {
                    return found
                } else {
                    found = simplest(hasChildrem, id)
                    if (found) {
                        return found
                    } else {
                        for (let i = 0; i < hasChildrem.length; i++) {
                            found = complex(hasChildrem[i].children, id)
                            if (found) { return found }
                        }
                        return undefined
                    }
                }
            }
            console.log('source')
            console.log(JSON.stringify(this.source))
            let updateSource = (result) => {
                // 找到原来的id，添加children属性
                let copy = JSON.parse(JSON.stringify(this.source))
                let toUpdate = complex(copy, lastItem.id)
                toUpdate.children = result
                console.log('toUpdate')
                console.log(JSON.stringify(toUpdate))
                console.log('copy')
                console.log(JSON.stringify(copy))
                this.$emit('update:source', copy)
            }
            this.loadData && this.loadData(lastItem, updateSource)
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.cascader-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    .cascader {
        height: 30px;
        line-height: 30px;
        padding: 0 1em;
        margin-bottom: 6px;
        min-width: 10em;
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
    .popover-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
        background: #fff;
        z-index: 1;
        box-shadow: 0 0 3px rgba(0, 0, 0, .2);
    }
}
</style>
