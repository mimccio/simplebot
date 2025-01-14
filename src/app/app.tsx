import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { Button } from '@/common/ui/button'
import { Form, FormField, FormItem, FormControl } from '@/common/ui/form'
import { Input } from '@/common/ui/input'
import './app.css'

export const App = () => {
  const [messageList, setMessageList] = useState<string[]>([])

  const form = useForm({
    defaultValues: { message: '' },
  })

  const onSubmit = ({ message }: { message: string }) => {
    setMessageList((prevList) => [...prevList, message])
  }

  return (
    <div className="flex flex-col bg-indigo-200 p-4">
      <ul>
        {messageList.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex">
                    <Input type="text" placeholder="Votre message" {...field} />
                    <Button type="submit">submit</Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
