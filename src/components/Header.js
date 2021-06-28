import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1 style={headerStyle}>Track {title}</h1>
            <Button onClick={onAdd} color={showAdd ? 'green' : 'red'} text={showAdd ? 'Add' : 'Close'}></Button>
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
