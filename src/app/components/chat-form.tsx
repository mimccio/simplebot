import type { UseFormReturn } from 'react-hook-form'
import { Send, Loader2 } from 'lucide-react'

import { Button } from '@/common/ui/button'
import { Form, FormField, FormItem, FormControl } from '@/common/ui/form'
import { Input } from '@/common/ui/input'

interface Props {
  onSubmit: ({ message }: { message: string }) => void
  form: UseFormReturn<{ message: string }, unknown, undefined>
  isLoading: boolean
}

export const ChatForm = ({ form, onSubmit, isLoading }: Props) => {
  return (
    <Form {...form}>
      <form
        className="mb-8 flex grow flex-col justify-end px-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="xs:flex-row flex w-full flex-col items-center gap-x-2 gap-y-2">
                  <Input type="text" placeholder="Votre message" {...field} />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
