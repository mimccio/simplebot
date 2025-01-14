import { TooltipProvider } from '@/common/ui/tooltip'
import { useChat } from './hooks/use-chat'
import { ChatForm } from './components/chat-form'
import { Header } from './components/header'
import { MessageList } from './components/message-list'
import './app.css'

export const App = () => {
  const { listRef, form, onSubmit, messageList, isLoading, clearChat } = useChat()

  return (
    <div className="bg-indigo-50">
      <TooltipProvider>
        <div className="mx-auto flex min-h-svh max-w-4xl flex-col">
          <Header clearChat={clearChat} />
          <MessageList messageList={messageList} isLoading={isLoading} listRef={listRef} />
          <ChatForm form={form} onSubmit={onSubmit} isLoading={isLoading} />
        </div>
      </TooltipProvider>
    </div>
  )
}
