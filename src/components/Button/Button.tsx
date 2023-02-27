import './Button.css'

interface ButtonProps {
  handleClick: () => void
  children: React.ReactNode
}

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
