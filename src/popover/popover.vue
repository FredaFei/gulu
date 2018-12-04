<template>
    <div class="popover-wrapper" ref="popoverWrapper">
        <div class="popover-content" ref="popoverContent" v-if="isVisible" 
        :class="`position-${position}`">
            <slot name="popover" :close="close"></slot>
        </div>
        <div class="trigger" ref="trigger" style="display:inline-block">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guluPopover',
    props: {
        position: {
            type: String,
            default: 'top',
            validator(val) {
                return ['top', 'right', 'bottom', 'left'].indexOf(val) >= 0
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator(val) {
                return ['click', 'hover'].indexOf(val) >= 0
            }
        }
    },
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        if(this.trigger === 'click'){
            this.$refs.popoverWrapper.addEventListener('click', this.onClick)
        }else{
            this.$refs.popoverWrapper.addEventListener('mouseenter', this.open)
            this.$refs.popoverWrapper.addEventListener('mouseleave', this.close)
        }
    },
    destroyed() {
        if(this.trigger === 'click'){
            this.$refs.popoverWrapper.removeEventListener('click', this.onClick)
        }else{
            this.$refs.popoverWrapper.removeEventListener('mouseenter', this.open)
            this.$refs.popoverWrapper.removeEventListener('mouseleave', this.close)
        }
    },
    methods: {
        positionContent() {
            document.body.appendChild(this.$refs.popoverContent)
            const { popoverContent, trigger } = this.$refs
            const { left, top, width, height } = trigger.getBoundingClientRect()
            let { height: height2 } = popoverContent.getBoundingClientRect()

            const positions = {
                top: {
                    top: top + window.scrollY,
                    left: left + window.scrollX
                },
                right: {
                    top: top + (height - height2) / 2 + window.scrollY,
                    left: left + width + window.scrollX
                },
                bottom: {
                    top: top + height + window.scrollY,
                    left: left + window.scrollX
                },
                left: {
                    top: top + (height - height2) / 2 + window.scrollY,
                    left: left + window.scrollX
                }
            }
            popoverContent.style.top = positions[this.position]['top'] + 'px'
            popoverContent.style.left = positions[this.position]['left'] + 'px'
        },
        onClickDocument(e) {
            if (
                this.$refs.popoverWrapper &&
                (this.$refs.popoverWrapper.contains(e.target) ||
                    this.$refs.popoverContent === e.target)
            ) {
                return
            }
            this.close()
        },
        open() {
            this.isVisible = true
            this.$nextTick(() => {
                this.positionContent()
                document.documentElement.addEventListener(
                    'click',
                    this.onClickDocument
                )
            })
        },
        close() {
            this.isVisible = false
            document.documentElement.removeEventListener(
                'click',
                this.onClickDocument
            )
        },
        onClick(event) {
            if (this.$refs.trigger.contains(event.target)) {
                if (this.isVisible) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../style/_var";
.popover-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
}

.popover-content {
    position: absolute;
    padding: 0.5em 1em;
    max-width: 20em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: #fff;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    word-break: break-all;
    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 10px solid transparent;
    }
    &.position-top {
        margin-top: -10px;
        transform: translateY(-100%);
        &:before,
        &:after {
            left: 10px;
            border-bottom: 0;
        }
        &:before {
            top: 100%;
            border-top-color: #333;
        }
        &:after {
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &:before,
        &:after {
            left: 10px;
            border-top: 0;
        }
        &:before {
            bottom: 100%;
            border-bottom-color: #333;
        }
        &:after {
            border-bottom-color: white;
            bottom: calc(100% - 1px);
        }
    }
    &.position-right {
        margin-left: 10px;
        &:before,
        &:after {
            top: 50%;
            border-left: 0;
            transform: translateY(-50%);
        }
        &:before {
            right: 100%;
            border-right-color: #333;
        }
        &:after {
            border-right-color: white;
            right: calc(100% - 1px);
        }
    }
    &.position-left {
        margin-left: -10px;
        transform: translateX(-100%);
        &:before,
        &:after {
            border-right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        &:before {
            left: 100%;
            border-left-color: #333;
        }
        &:after {
            border-left-color: white;
            left: calc(100% - 1px);
        }
    }
}
</style>
