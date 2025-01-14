import OpenAI from 'openai'

// We need a backend to keep the api key secret
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

export const getOpenaiMessage = async (userMessage: string) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
  })

  return { text: completion.choices[0].message.content ?? '', isBot: true, datetime: new Date() }
}
