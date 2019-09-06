<template>
  <input
    v-if=noControl
    :data-tooltip=tooltipData
    :type=type
    :class=inputClasses
    :placeholder=placeholder
    @input=handleInput($event)
  />
  <div
    v-else-if=!select
    :data-tooltip=tooltipData
    class="input-control"
  >
    <label
      v-if=title
      class="font-normal"
    >{{title}}</label>
    <span
      v-if="subtitle"
      :class=infoClasses
    >{{subtitle}}</span>
    <input
      :type=type
      :class=inputClasses
      :placeholder=placeholder
      :value=value
      @input=handleInput($event)
    />
    <span
      v-if=infoText
      class="info u-text-center"
    >{{infoText}}</span>
    <slot></slot>
  </div>
  <div
    v-else
    class="input-control"
  >
    <select
      :class=inputClasses
      :data-tooltip=tooltipData
    >
      <slot></slot>
    </select>
  </div>
</template>

<script>
import Layout from '@/mixins/layout';
import Animations from '@/mixins/animations';
import Tooltip from '@/mixins/tooltip';

export default {
  mixins: [
    Layout,
    Animations,
    Tooltip,
  ],

  props: {
    noControl: {
      type: Boolean,
      default: false,
    },
    select: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    subtitleInline: {
      type: Boolean,
      default: false,
    },
    infoText: {
      type: String,
      default: '',
    },
    focused: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    xsmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    xlarge: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event);
    },
  },

  computed: {
    inputClasses() {
      return Object.assign(
        this.layoutMixins,
        this.animationsMixins,
        this.tooltipMixins,
        {
          select: this.select,
          'input-xsmall': this.xsmall,
          'input-small': this.small,
          'input-large': this.large,
          'input-xlarge': this.xlarge,
          'input-focused': this.focused,
          'text-success input-success': this.success,
          'text-danger input-error': this.error,
          'input-contains-icon': this.icon,
        },
      );
    },
    infoClasses() {
      return {
        info: true,
        inline: this.subtitleInline,
      };
    },
  },
};
</script>