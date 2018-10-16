<template>
    <div class="row-container" :style="{marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'gRow',
    props:{
        gutter: {
            type: [Number,String]
        }
    },
}
</script>

<style lang="scss" scoped>
    .row-container{
        display: flex;
    }
</style>
