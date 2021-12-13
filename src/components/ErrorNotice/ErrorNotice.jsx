export default function ErrorNotice({message,clearError}) {
  return (
    <div>
      <span>{message}</span>    
      <button onClick={clearError}></button>
    </div>
  )
}
