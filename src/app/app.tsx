import './app.css'
import { ChatForm } from './components/chat-form'
import { MessageList } from './components/message-list'
import { useChat } from './hooks/use-chat'

export const App = () => {
  const { form, onSubmit, messageList } = useChat()

  return (
    <div className="flex flex-col bg-indigo-200 p-4">
      <MessageList messageList={messageList} />
      <ChatForm form={form} onSubmit={onSubmit} />
    </div>
  )
}
