<template>
    <div class="wrapper" :class="[`${iconType}`]">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
        @click="$emit('click',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)">
        <template v-if="iconType">
            <g-icon class="icon" :name="iconType"></g-icon>
            <span :class="[`message ${iconType}-message`]">{{message}}</span>
        </template>
    </div>
</template>

<script>
import GIcon from './icon'
export default {
    name: 'guluInput',
    components: {
        GIcon
    },
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        }

    }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$color: #333;
$border-color: rgba(102, 102, 102, 1);
$border-radius: 4px;
$error-color: #F1453D;
$info-color: #67c23a;
$border-color-hover: #666;
.wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size;
    >:not(:last-child) {
        margin-right: .5em;
    }
    &>.message {
        font-size: 12px;
    }
    >input {
        width: 128px;
        padding: 0 8px;
        height: 32px;
        font-size: inherit;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        &:hover {
            border-color: $border-color-hover;
        }
        &:focus {
            outline: none;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
        }
        &[disabled],
        &[readonly] {
            color: #bbb;
            background: #fff;
            border-color: #bbb;
            cursor: not-allowed;
        }
    }
    &.error {
        >input {
            border-color: $error-color;
        }
        >.icon {
            fill: $error-color;
        }
        >.error-message {
            color: $error-color;
        }
    }
    &.info {
        >input {
            border-color: $info-color;
        }
        >.icon {
            fill: $info-color;
        }
        >.info-message {
            color: $info-color;
        }
    }
}
</style>
