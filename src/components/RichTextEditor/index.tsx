import { useEditor } from '@tiptap/react'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Placeholder from '@tiptap/extension-placeholder'
import Bold from '@tiptap/extension-bold'
import Blockquote from '@tiptap/extension-blockquote'
import Highlight from '@tiptap/extension-highlight'
import Heading from '@tiptap/extension-heading'
import History from '@tiptap/extension-history'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Code from '@tiptap/extension-code'
import Link from '@tiptap/extension-link'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

import { Container, Editor } from './styles'

import { BubbleMenuOptions } from './BubbleMenuOptions'
import { BubbleMenuLink } from './BubbleMenuLink'

import { Commands } from './Commands'
import { suggestion } from './Commands/suggestion'
import { useEffect, useState } from 'react'

type RichTextEditorProps = {
  value: string
  onChange: (data: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [tasksCount, setTasksCount] = useState('')

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph, 
      Text,
      Bold,
      Blockquote,
      Highlight,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Placeholder.configure({
        placeholder: "write '/' to insert, or start writing..."
      }),
      History,
      Italic,
      Strike,
      Code,
      Link.configure({
        openOnClick: false
      }),
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      TaskItem.configure({
        nested: true
      }),
      Commands.configure({
        suggestion
      })
    ],
    onUpdate({ editor }) {
      const content = editor.getHTML()

      onChange(content)

      const tasksTotal = (content.match(/taskItem/g) || []).length;
      const tasksFinished = (content.match(/data-checked="true"/g) || []).length;

      if(!!tasksTotal) {
        setTasksCount(`${tasksFinished}/${tasksTotal}`)
      } else {
        setTasksCount('')
      }
    },
  })

  useEffect(() => {
    if(editor?.commands) {
      editor.commands.setContent(value, false, {
        preserveWhitespace: true
      })
    }
  }, [editor, value])

  return (
    <Container>
      {editor && (
        <>
          <BubbleMenuOptions editor={editor} />
          <BubbleMenuLink editor={editor} />
        </>
      )}

      {!!tasksCount && (
        <header>
          {tasksCount} tasks
        </header>
      )}
      <Editor editor={editor} />
    </Container>
  )
}