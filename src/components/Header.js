import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {

    const onClick = () => {
        console.log('Call OnClick From Home Function')
    }

    return (
        <header className='header'>
            <h1 style={headerStyle}>Track {title}</h1>
            <Button color='red' text='add' />
            <Button color='green' text='approve' />
            <Button onClick={onClick}></Button>
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
