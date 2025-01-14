import { useState } from 'react'
import { useForm } from 'react-hook-form'

const botResponses = [
  { id: 1, text: 'Bonjour comment puis-je vous aider ?', keyWords: ['bonjour', 'salut', 'hello'] },
  { id: 2, text: 'Le temps à Lyon est pluvieux et il fait 12°C', keyWords: ['météo', 'temps', 'température', 'lyon'] },
];

const getBotResponse = (msg: string) => {
  let botResponse = null
  for (let i = 0; i < botResponses.length; i++) {
    if (botResponses[i].keyWords.some((kw) => msg.includes(kw))) {
      botResponse = botResponses[i]
      break
    }
  }

  if (botResponse) return botResponse
  return botResponses[Math.floor(Math.random() * botResponses.length)]
}

export const useChat = () => {
  const [messageList, setMessageList] = useState<string[]>([])

  const form = useForm({
    defaultValues: { message: '' },
  })

  const onSubmit = async ({ message }: { message: string }) => {
    setMessageList((prevList) => [...prevList, message])
    form.reset({ message: '' })
    const response = getBotResponse(message.trim().toLowerCase())
    setMessageList((prevList) => [...prevList, response.text])
  }

  return { form, onSubmit, messageList }
}
