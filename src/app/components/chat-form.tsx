import type { UseFormReturn } from 'react-hook-form'

import { Button } from '@/common/ui/button'
import { Form, FormField, FormItem, FormControl } from '@/common/ui/form'
import { Input } from '@/common/ui/input'

interface Props {
  onSubmit: ({ message }: { message: string }) => void
  form: UseFormReturn<{ message: string }, unknown, undefined>
}

export const ChatForm = ({ form, onSubmit }: Props) => {
  return (
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
  )
}
