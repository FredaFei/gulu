<template>
    <div class="toast">
        <div :class="['content',{border:!autoClose &&closeButton}]">
            <slot v-if="enableHtml" v-html="$slots.default[0]"></slot>
            <slot v-else></slot>
        </div>
        <span class="close" v-if="closeButton" @click="onClose">{{closeButton.text}}</span>
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
            default: 3
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    text: '',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    color: #fff;
    font-size: 14px;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 $box-shadow;
    .content {
        flex: 1;
        padding: 12px 0;
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
