import { Editor } from '@tiptap/core';
import debounce from 'lodash.debounce'

import { Container, Option } from "./styles";

type BubbleMenuOptionsProps = {
  editor: Editor
}

export function BubbleMenuOptions({ editor }: BubbleMenuOptionsProps) {
  function handleSetLink() {
    editor
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    
    if(!url) {
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }

  return (
    <Container
      editor={editor}
      pluginKey="options"
      shouldShow={({ editor, from, to }) => {
        return from !== to && !editor.isActive('link')
      }}
      tippyOptions={{ duration: 200 }}
    >
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={!!editor.isActive('bold')}
      >
        bold
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={!!editor.isActive('italic')}
      >
        italic
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={!!editor.isActive('strike')}
      >
        strike
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        isActive={!!editor.isActive('highlight')}
      >
        highlight
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleCode().run()}
        isActive={!!editor.isActive('code')}
      >
        code
      </Option>

      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={!!editor.isActive('heading', { level: 1 })}
      >
        h1
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={!!editor.isActive('heading', { level: 2 })}
      >
        h2
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={!!editor.isActive('heading', { level: 3 })}
      >
        h3
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={!!editor.isActive('blockquote')}
      >
        blockquote
      </Option>

      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        isActive={!!editor.isActive('task')}
      >
        task
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={!!editor.isActive('bullet')}
      >
        bullet
      </Option>
      <Option
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={!!editor.isActive('ordered')}
      >
        ordered
      </Option>

      <Option
        type='button'
        onClick={() => {
          if(editor.isActive('link')) {
            editor.chain().focus().unsetLink().run()
          } else {
            handleSetLink()
          }
        }}
        isActive={!!editor.isActive('link')}
      >
        link
      </Option>
    </Container>
  )
}