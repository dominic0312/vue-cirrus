<template>
  <input
    v-if=noControl
    :data-tooltip=tooltipData
    :type=type
    :class=inputClasses
    :placeholder=placeholder
  />
  <div v-else-if=!select :data-tooltip=tooltipData class="input-control">
    <label v-if=title class="font-normal">{{title}}</label>
    <span v-if="subtitle" :class=infoClasses>{{subtitle}}</span>
    <input :type=type :class=inputClasses :placeholder=placeholder />
    <span v-if=infoText class="info text-center">{{infoText}}</span>
  </div>
  <div v-else class="input-control">
    <select :class=inputClasses :data-tooltip=tooltipData>
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
          'text-error input-error': this.error,
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