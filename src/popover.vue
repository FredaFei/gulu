<template>
    <div class="popover-wrapper" @click="onClose" ref="popoverWrapper">
        <div class="popover-content" ref="popoverContent" v-if="isVisible">
            <slot name="popover"></slot>
        </div>
        <div class="trigger" ref="trigger">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guluPopover',
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        positionContent(){
            document.body.appendChild(this.$refs.popoverContent)
            let {left,top,width, height} = this.$refs.trigger.getBoundingClientRect()
            console.log(left, top, width, height)
            this.$refs.popoverContent.style.left = left + window.scrollX + 'px'
            this.$refs.popoverContent.style.top = top + window.scrollY + 'px'
        },
        onClickDocument(e){
            console.log('body click')
            if(this.$refs.popoverWrapper  
                && (this.$refs.popoverWrapper.contains(e.target)||this.$refs.popoverContent===e.target)
            ){ return }
            this.close()
        },
        open(){
            this.isVisible = true
            this.$nextTick(() => {
                this.positionContent()
                console.log('document addEvent')
                document.documentElement.addEventListener('click', this.onClickDocument)
            })
        },
        close(){
            console.log('document removeEv')
            this.isVisible = false
            document.documentElement.removeEventListener('click', this.onClickDocument)
        },
        onClose(event) {
            if(this.$refs.trigger.contains(event.target)){
                console.log('down')
                if (this.isVisible) {
                    this.close()
                }else{
                    this.open()
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.popover-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    border: 1px solid red;
}
.popover-content {
    position: absolute;
    // bottom: 100%;
    transform: translateY(-100%);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>
