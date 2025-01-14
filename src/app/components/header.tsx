import { Button } from '@/common/ui/button'
import { MessageSquareX } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/common/ui/tooltip'

interface Props {
  clearChat: () => void
}

export const Header = ({ clearChat }: Props) => {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <h1 className="font-semibold text-primary">SimpleBot</h1>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={clearChat} size="icon">
            <MessageSquareX className="text-primary" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p>Effacer les messages</p>
        </TooltipContent>
      </Tooltip>
    </header>
  )
}
