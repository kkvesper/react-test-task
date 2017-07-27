import * as React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    location: string
}

class Header extends React.Component<IProps, any> {
    render () {
        return <nav className='pt-navbar'>
            <div className="pt-navbar-group pt-align-left">
                <Link className="pt-navbar-heading" to='/'>
                    <b>Contact App</b>
                </Link>
                <button className="pt-button pt-minimal pt-intent-primary">
                    <b>{this.props.location}</b>
                </button>
            </div>
        </nav>
    }
}

export default Header
