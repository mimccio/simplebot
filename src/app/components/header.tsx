import { Button } from '@/common/ui/button'
import { MessageSquareX } from 'lucide-react'

interface Props {
  clearChat: () => void
}

export const Header = ({ clearChat }: Props) => {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <h1 className="font-semibold text-primary">SimpleBot</h1>
      <Button variant="outline" onClick={clearChat} size="icon">
        <MessageSquareX className="text-indigo-500" />
      </Button>
    </header>
  )
}
