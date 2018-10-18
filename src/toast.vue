<template>
    <div class="toast" :class="`position-${position}`">
        <div class="content" :class="toastClass">
            <slot v-if="enableHtml" v-html="$slots.default[0]"></slot>
            <slot v-else></slot>
        </div>
        <span class="close" v-if="closeButton&&!autoClose" @click="onClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
export default {
    name: 'gTaost',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 2
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'middle'
        },
    },
    computed: {
        toastClass() {
            return [{ 'border': !this.autoClose }]
        }
    },
    mounted() {
        this.execAutoClose()
    },
    methods: {
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        close() {
            this.$el.remove()
            this.$destroy()
        },
        onClose() {
            this.close()
            if (
                this.closeButton &&
                typeof this.closeButton.callback === 'function'
            ) {
                this.closeButton.callback(this) // this === toast
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$toast-bg: rgba(0, 0, 0, 0.75);
$box-shadow: rgba(0, 0, 0, 0.5);
$border-color: #666;
.toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    color: #fff;
    font-size: 14px;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 $box-shadow;
    &.position-top {
        top: 0;
        transform: translate(0 -50%);
        border-radius: 0 0 4px 4px;
    }
    &.position-middle {
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &.position-bottom {
        bottom: 0;
        border-radius: 4px 4px 0 0;
    }
    .content {
        flex: 1;
        padding: 12px 16px 12px 0;
        &.border {
            border-right: 1px solid $border-color;
        }
    }
    .close {
        flex-shrink: 0;
        margin-left: 16px;
    }
}
</style>
