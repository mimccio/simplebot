import { useForm } from 'react-hook-form'
import { useState } from 'react'

import './app.css'
import { ChatForm } from './components/chat-form'
import { MessageList } from './components/message-list'

export const App = () => {
  const [messageList, setMessageList] = useState<string[]>([])

  const form = useForm({
    defaultValues: { message: '' },
  })

  const onSubmit = ({ message }: { message: string }) => {
    setMessageList((prevList) => [...prevList, message])
  }

  return (
    <div className="flex flex-col bg-indigo-200 p-4">
      <MessageList messageList={messageList} />
      <ChatForm form={form} onSubmit={onSubmit} />
    </div>
  )
}
