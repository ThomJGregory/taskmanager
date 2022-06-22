import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: 'TaskManager'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header