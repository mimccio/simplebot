import { useChat } from './hooks/use-chat'
import { ChatForm } from './components/chat-form'
import { Header } from './components/header'
import { MessageList } from './components/message-list'
import './app.css'

export const App = () => {
  const { listRef, form, onSubmit, messageList, isLoading } = useChat()

  return (
    <div className="bg-indigo-50">
      <div className="mx-auto flex min-h-svh max-w-4xl flex-col">
        <Header />
        <MessageList messageList={messageList} isLoading={isLoading} listRef={listRef} />
        <ChatForm form={form} onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </div>
  )
}
