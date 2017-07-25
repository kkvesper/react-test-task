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
            </div>
            <div className="pt-navbar-group pt-align-right">
                <button className="pt-button pt-minimal pt-intent-primary">
                    {this.props.location}
                </button>
            </div>
        </nav>
    }
}

export default Header
