import { computed } from 'vue'
import { pick } from 'lodash-es'
import type { CommonComponentProps } from '@/defaultProps'

const useComponentCommon = (
  props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url && !props.isEditing) {
      window.open(props.url)
    }
  }

  return { styleProps, handleClick }
}

export default useComponentCommon
