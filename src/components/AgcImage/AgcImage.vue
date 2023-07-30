<template>
  <img class="agc-image-component" :style="styleProps" :src="src" @click.prevent="handleClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { transformToComponentProps, imageDefaultProps, imageStylePropsNames } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const defaultProps = transformToComponentProps(imageDefaultProps)

export default defineComponent({
  name: 'agc-image',
  props: {
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames)
    return { styleProps, handleClick }
  }
})
</script>
