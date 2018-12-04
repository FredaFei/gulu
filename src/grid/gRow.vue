<template>
    <div class="row" :class="rowClass" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guluRow',
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: String,
            validator(val) {
                return ['left', 'center', 'right'].includes(val)
            }
        }
    },
    computed: {
        rowStyle() {
            let { gutter } = this
            return {
                marginLeft: -gutter / 2 + 'px',
                marginRight: -gutter / 2 + 'px'
            }
        },
        rowClass() {
            let { align } = this
            return [align && `align-${align}`]
        }
    },
    mounted() {
        this.$children.forEach(vm=>{
            vm.gutter = this.gutter
        })
    },
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: red;
    &.align-left {
        justify-content: flex-start;
    }
    &.align-center {
        justify-content: center;
    }
    &.align-right {
        justify-content: flex-end;
    }
}
</style>
