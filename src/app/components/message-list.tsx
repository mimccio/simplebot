interface Props {
  messageList: string[]
}

export const MessageList = ({ messageList }: Props) => {
  return (
    <ul className="grow">
      {messageList.map((msg, i) => (
        <li key={i}>{msg}</li>
      ))}
    </ul>
  )
}
