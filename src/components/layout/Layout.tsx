import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout_wrapper">
      <header className="hero">
        <h1 className="hero_heading">Welcome to Schipol</h1>
      </header>
      <section>{children}</section>
    </div>
  )
}
