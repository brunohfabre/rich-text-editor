import { styled } from "../../../styles";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: 320,
})

export const Item = styled('button', {
  backgroundColor: 'blue',

  variants: {
    isSelected: {
      true: {
        backgroundColor: 'tomato',
      }
    }
  }
})