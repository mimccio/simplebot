import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import autoAnimate from '@formkit/auto-animate'

import { Message } from '../types/message'

const botResponses = [
  { id: 1, text: 'Bonjour comment puis-je vous aider ?', keyWords: ['bonjour', 'salut', 'hello'] },
  {
    id: 2,
    text: 'Le temps à Lyon est pluvieux et il fait 12°C',
    keyWords: ['météo', 'temps', 'température', 'lyon'],
  },
]

const getBotResponse = async (msg: string) => {
  let botResponse = null
  for (let i = 0; i < botResponses.length; i++) {
    if (botResponses[i].keyWords.some((kw) => msg.includes(kw))) {
      botResponse = botResponses[i]
      break
    }
  }
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  if (botResponse) return botResponse
  return botResponses[Math.floor(Math.random() * botResponses.length)]
}

const formSchema = z.object({
  message: z
    .string()
    .min(2, { message: 'Le message doit faire au moins 2 caractères' })
    .max(500, { message: 'Le message doit faire 500 caractères au maximum' }),
})

export const useChat = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const [messageList, setMessageList] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  })

  useEffect(() => {
    if (listRef.current) {
      autoAnimate(listRef.current)
    }
  }, [listRef])

  useLayoutEffect(() => {
    if (!listRef.current?.lastElementChild) return
    listRef.current.lastElementChild.scrollIntoView({ behavior: 'smooth' })
  }, [messageList])

  const onSubmit = async ({ message }: { message: string }) => {
    try {
      if (isLoading || !message.length) return

      setMessageList((prevList) => [...prevList, { text: message }])
      form.reset({ message: '' })
      setIsLoading(true)
      const response = await getBotResponse(message.trim().toLowerCase())
      setIsLoading(false)
      setMessageList((prevList) => [...prevList, { text: response.text, isBot: true }])
    } catch (error) {
      // TODO: handle error with toast
      console.log(error)
    }
  }

  return { listRef, form, onSubmit, messageList, isLoading }
}
