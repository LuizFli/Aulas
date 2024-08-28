import './Header.css'


function Header(props) {
  return (
    <div className='header-container'>

      <h1>{props.texto}{props.emoji}</h1>

    </div>
  )
}

export default Header
