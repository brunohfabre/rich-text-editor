import { PureEditorContent } from "@tiptap/react"
import { styled } from "../../styles"

export const Container = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  header: {
    padding: 16
  }
})

export const Editor = styled(PureEditorContent, {
  flex: 1,
  
  '.ProseMirror': {
    outline: 'none',
    padding: 16,

    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',

    blockquote: {
      borderLeft: '3px solid rgba(#0d0d0d, 0.1)',
      paddingLeft: '1rem',
    },

    code: {
      padding: 4,
      backgroundColor: 'lightgray',
    },

    'ul[data-type="taskList"]': {
      listStyle: 'none',
      padding: 0,
    
      p: {
        margin: 0,
      },
    
      li: {
        display: 'flex',
    
        '> label': {
          flex: '0 0 auto',
          marginRight: '0.5rem',
          userSelect: 'none',
        },
    
        '> div': {
          flex: '1 1 auto',
        },
      }
    },

    'ul, ol': {
      padding: '0 1rem',
    },

    'p.is-editor-empty:first-child::before': {
      color: '#adb5bd',
      content: 'attr(data-placeholder)',
      float: 'left',
      height: 0,
      pointerEvents: 'none',
    }
  }
})