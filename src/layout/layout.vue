<template>
    <div class="layout-content" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guluLayout',
    data(){
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach(item=>{
            if(item.$options.name === 'guluSider'){
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.layout-content {
    display: flex;
    flex-direction: column;    
    width: 100%;
    &.hasSider{
        flex-direction: row;
    }
}
</style>
