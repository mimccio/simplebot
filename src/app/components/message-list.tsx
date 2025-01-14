import SyncLoader from 'react-spinners/SyncLoader'

import { ScrollArea } from '@/common/ui/scroll-area'
import { Message } from '../types/message'

interface Props {
  messageList: Message[]
  isLoading: boolean
}

export const MessageList = ({ messageList, isLoading }: Props) => {
  return (
    <ScrollArea className="xs:px-4 h-[calc(100svh-190px)] border-y border-indigo-200 bg-white px-2 sm:mx-4 sm:rounded-md sm:border sm:px-4">
      <ul className="flex flex-col gap-2">
        {messageList.map((msg, i) => (
          <li className={`flex ${msg.isBot ? '' : 'justify-end'}`} key={i}>
            <span
              className={`xs:max-w-[90%] flex flex-col gap-1 rounded-lg px-3 py-2 shadow-sm md:max-w-[70%] ${msg.isBot ? 'bg-neutral-50 text-neutral-700' : 'bg-indigo-100 text-indigo-700'}`}
            >
              {msg.text}
            </span>
          </li>
        ))}

        <SyncLoader
          color="rgb(165 180 252)"
          loading={isLoading}
          size={8}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="mb-8"
        />
      </ul>
    </ScrollArea>
  )
}
