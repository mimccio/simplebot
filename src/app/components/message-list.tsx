import type { RefObject } from 'react'
import { format } from 'date-fns'
import SyncLoader from 'react-spinners/SyncLoader'
import { BotMessageSquare } from 'lucide-react'

import { ScrollArea } from '@/common/ui/scroll-area'
import { Message } from '../types/message'

interface Props {
  listRef: RefObject<HTMLUListElement>
  messageList: Message[]
  isLoading: boolean
}

export const MessageList = ({ listRef, messageList, isLoading }: Props) => {
  return (
    <ScrollArea className="xs:px-4 xs:h-[calc(100svh-176px)] h-[calc(100svh-220px)] border-y border-indigo-200 bg-white px-2 sm:mx-4 sm:rounded-md sm:border sm:px-4">
      <ul ref={listRef} className="flex flex-col gap-2">
        {messageList.length ? (
          <span className="py-2 text-center text-xs font-semibold text-neutral-200">
            - Début de la conversation-
          </span>
        ) : (
          <div className="mt-16 flex justify-center">
            <span className="flex max-w-xs flex-col items-center gap-4 rounded-lg border-indigo-400 bg-indigo-400 p-4 shadow-md">
              <BotMessageSquare className="text-indigo-50" />
              <span className="text-center text-white">
                Commencez une discution avec SimpleBot en entrant un message
              </span>
            </span>
          </div>
        )}

        {messageList.map((msg, i) => (
          <li className={`flex ${msg.isBot ? '' : 'justify-end'}`} key={i}>
            <span
              className={`xs:max-w-[90%] flex flex-col gap-1 rounded-lg px-3 py-2 shadow-sm md:max-w-[70%] ${msg.isBot ? 'bg-neutral-50 text-neutral-700' : 'bg-indigo-100 text-indigo-700'}`}
            >
              <span>{msg.text}</span>
              <span className="self-end text-xs opacity-60">{format(msg.datetime, 'hh:mm')}</span>
            </span>
          </li>
        ))}

        <SyncLoader
          color="rgb(165 180 252)"
          loading={isLoading}
          size={8}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="mb-6 mt-3"
        />
        <span className="h-8" />
      </ul>
    </ScrollArea>
  )
}
