import { BubbleMenu } from "@tiptap/react";
import { styled } from "../../../styles";

export const Container = styled(BubbleMenu, {
  backgroundColor: 'tomato'
})

export const Option = styled('button', {
  variants: {
    isActive: {
      true: {
        background: 'black',
        color: 'white',
      }
    }
  }
})