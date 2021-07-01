import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={headerStyle}>Track {title}</h1>
            { location.pathname === '/' &&
                <Button onClick={onAdd} color={showAdd ? 'green' : 'red'} text={showAdd ? 'Add' : 'Close'}></Button>
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Chaiyarin Niamsuwan'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headerStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
