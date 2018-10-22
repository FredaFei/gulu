<template>
    <div class="sider" v-if="visible">
        <slot></slot>
        <button class="close" @click="visible=false">close</button>
    </div>
</template>

<script>
export default {
    name: 'guluSider',
    data(){
        return {
            visible: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .sider{
        position: relative;
        >.close{
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>
