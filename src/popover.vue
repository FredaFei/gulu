<template>
    <div class="popover-wrapper" @click="onClose" ref="popoverWrapper">
        <div class="popover-content" ref="popoverContent" v-if="isVisible" :class="`position-${position}`">
            <slot name="popover"></slot>
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
        }
    },
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        positionContent() {
            document.body.appendChild(this.$refs.popoverContent)
            const { left, top, width, height } = this.$refs.trigger.getBoundingClientRect()
            const { popoverContent } = this.$refs
            console.log(left, top, width, height)
            if (this.position === 'top') {
                popoverContent.style.left = left + window.scrollX + 'px'
                popoverContent.style.top = top + window.scrollY + 'px'
            } else if (this.position === 'right') {
                let { height: height2 } = this.$refs.popoverContent.getBoundingClientRect()
                popoverContent.style.left = left + width + window.scrollX + 'px'
                popoverContent.style.top = top + (height - height2) / 2 + window.scrollY + 'px'
            } else if (this.position === 'bottom') {
                popoverContent.style.left = left + window.scrollX + 'px'
                popoverContent.style.top = top + height + window.scrollY + 'px'
            } else if (this.position === 'left') {
                let { height: height2 } = this.$refs.popoverContent.getBoundingClientRect()
                popoverContent.style.left = left + window.scrollX + 'px'
                popoverContent.style.top = top + (height - height2) / 2 + window.scrollY + 'px'
            }
        },
        onClickDocument(e) {
            console.log('body click')
            if (this.$refs.popoverWrapper
                && (this.$refs.popoverWrapper.contains(e.target) || this.$refs.popoverContent === e.target)
            ) { return }
            this.close()
        },
        open() {
            this.isVisible = true
            this.$nextTick(() => {
                this.positionContent()
                console.log('document addEvent')
                document.documentElement.addEventListener('click', this.onClickDocument)
            })
        },
        close() {
            console.log('document removeEv')
            this.isVisible = false
            document.documentElement.removeEventListener('click', this.onClickDocument)
        },
        onClose(event) {
            if (this.$refs.trigger.contains(event.target)) {
                console.log('down')
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
$border-radius: 4px;
$border-color:#333;
.popover-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
}

.popover-content {
    position: absolute;
    padding: .5em 1em;
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
