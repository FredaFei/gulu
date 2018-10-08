<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                return value === 'left' || value === 'right'
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.g-button {
    font-size: var(--button-fontSize);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &>.loading {
        animation: spin 1.2s infinite linear;
    }
    &.icon-left {
        >.icon {
            order: 1;
            margin-right: .2em;
        }
        >.content {
            order: 2;
        }
    }
    &.icon-right {
        >.icon {
            order: 2;
            margin-left: .2em;
        }
        >.content {
            order: 1;
        }
    }
    &:hover {
        border-color: var(--border-color-hover)
    }

    &:active {
        background-color: var(--border-active-bg);
    }

    &:focus {
        outline: none;
    }
}
</style>
