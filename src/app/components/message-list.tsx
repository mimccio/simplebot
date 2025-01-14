interface Props {
  messageList: string[]
}

export const MessageList = ({ messageList }: Props) => {
  return (
    <ul>
      {messageList.map((msg, i) => (
        <li key={i}>{msg}</li>
      ))}
    </ul>
  )
}
