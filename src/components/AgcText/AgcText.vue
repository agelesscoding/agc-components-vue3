<template>
  <component :is="tag" :style="styleProps" class="agc-text-component" @click="handleClick">{{
    text
  }}</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useComponentCommon from '@/hooks/useComponentCommon'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '@/defaultProps'

const defaultProps = transformToComponentProps(textDefaultProps)

export default defineComponent({
  name: 'agc-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)

    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
h2.agc-text-component,
p.agc-text-component {
  margin-bottom: 0;
}
button.agc-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.agc-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  /* TODO 暂时覆盖 */
  position: relative !important;
}
</style>
