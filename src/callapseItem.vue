<template>
    <div class="callapse-item">
        <div class="title" @click="toggle">{{title}}</div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'guluCallapseItem',
    inject: ['eventBus'],
    props: {
        title: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            open: false
        }
    },
    mounted() {
        this.eventBus && this.eventBus.$on('select:updated', vm => {
            if (this !== vm) {
                this.close()
            }
        })
    },
    methods: {
        toggle() {
            if (this.open) {
                this.open = false
            } else {
                this.open = true
                this.eventBus && this.eventBus.$emit('select:updated', this)
            }
        },
        close() {
            this.open = false
        }
    }
}
</script>

<style lang="scss" scoped>
$font-size: 16px;
$border-radius: 4px;
.callapse-item {
    font-size: $font-size;
    >.title {
        margin-bottom: -1px;
        padding: 10px 12px;
        border-bottom: 1px solid rgba(204, 204, 204, 1);
    }
    &:first-child {
        >.title {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child {
        >.title:last-child {
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
    .content {
        padding: 0 12px;
    }
}
</style>
