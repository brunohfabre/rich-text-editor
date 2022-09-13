import { useState } from "react"
import { RichTextEditor } from "./components/RichTextEditor"
import { styled } from "./styles"
import { applyGlobalCss } from "./styles/global"

applyGlobalCss()

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  
  display: 'flex',
  flexDirection: 'column',
})

export function App() {
  const [content, setContent] = useState('')

  return (
    <Container>
      <RichTextEditor value={content} onChange={setContent} />
    </Container>
  )
}