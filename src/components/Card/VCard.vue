<template>
  <div :class="[
    this.animationsMixins,
    'card',
    {
      'slide-up': this.animated,
      'u-flex u-flex-column h-100': this.equalHeight,
      dark: this.dark,
    },
  ]">
    <slot />
  </div>
</template>

<script>
import Animations from '@/mixins/animations';

export default {
  mixins: [
    Animations,
  ],

  provide() {
    return {
      animated: this.animated,
    };
  },

  props: {
    animated: {
      type: Boolean,
      default: false,
    },
    equalHeight: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.card.dark {
  background-color: #272727;
  color: white;
}
</style>
