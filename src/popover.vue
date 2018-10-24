<template>
    <div class="popover-wrapper" @click.stop="onClose">
        <div class="popover-content" ref="popoverContent" @click.stop v-if="isVisible">
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
        onClose() {
            console.log('btn click')
            this.isVisible = !this.isVisible
            if (this.isVisible) {
                this.$nextTick(() => {
                    document.body.appendChild(this.$refs.popoverContent)
                    let {left,top,width, height} = this.$refs.trigger.getBoundingClientRect()
                    console.log(left, top, width, height)
                    this.$refs.popoverContent.style.left = left + window.scrollX + 'px'
                    this.$refs.popoverContent.style.top = top + window.scrollY + 'px'
                })
            }
            const close = () => {
                console.log('body click')
                this.isVisible = false
                document.documentElement.removeEventListener('click', close)
            }
            document.documentElement.addEventListener('click', close)
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
