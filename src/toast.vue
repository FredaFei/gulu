<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'gTaost'
}
</script>

<style lang="scss" scoped>
.toast {
    display: flex;
    padding: 8px 16px;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    background: rgba(0, 0, 0, .8);
    box-shadow: 0 1px 3px rgba(0,0,0,.6);
}
</style>
