import './app.css'
import { ChatForm } from './components/chat-form'
import { Header } from './components/header'
import { MessageList } from './components/message-list'
import { useChat } from './hooks/use-chat'

export const App = () => {
  const { form, onSubmit, messageList } = useChat()

  return (
    <div className="flex min-h-svh flex-col px-4">
      <Header />
      <MessageList messageList={messageList} />
      <ChatForm form={form} onSubmit={onSubmit} />
    </div>
  )
}
