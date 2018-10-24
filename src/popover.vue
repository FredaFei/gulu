<template>
    <div class="popover-wrapper" @click.stop="onClose">
        <div class="popover-content" ref="popoverContent" v-if="isVisible">
            <slot name="popover"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'guluPopover',
    data(){
        return {
            isVisible: false
        }
    },
    methods: {
        onClose(){
            console.log('btn click')
            this.isVisible = !this.isVisible
            if(this.isVisible){
                this.$nextTick(()=>{
                    document.body.appendChild(this.$refs.popoverContent)
                })
            }
            const close = ()=>{
                console.log('body click')
                this.isVisible = false
                document.documentElement.removeEventListener('click',close)
            }
            document.documentElement.addEventListener('click',close)
        }
    }
}
</script>

<style lang="scss" scoped>
.popover-wrapper{

}
.popover-content{
    
}
</style>
