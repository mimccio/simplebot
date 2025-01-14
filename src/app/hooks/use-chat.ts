import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import autoAnimate from '@formkit/auto-animate'

import type { Message } from '../types/message'
import { getOpenaiMessage } from '../utils/get-openai-message'

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
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
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

      setMessageList((prevList) => [...prevList, { text: message, datetime: new Date() }])
      form.reset({ message: '' })
      setIsLoading(true)
      const response = await getOpenaiMessage(message.trim().toLowerCase())
      setIsLoading(false)
      setMessageList((prevList) => [...prevList, response])
    } catch (error) {
      // TODO: handle error with toast
      console.log(error)
    }
  }

  const clearChat = () => {
    setMessageList([])
    setIsLoading(false)
  }

  return { listRef, form, onSubmit, messageList, isLoading, clearChat }
}
