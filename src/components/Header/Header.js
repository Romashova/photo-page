import './style.css';

import logo from '../../assets/images/PagePhoto/logo.svg';
import logoName from '../../assets/images/PagePhoto/logo_name.png';

export const Header = () => {
    return (
        <div className="topHeader">
            <div className='logo-dir'>
                <img src={logo} className="App-logo" alt="logo" />
                <img className='logo-name' src={logoName} />
            </div>

            <p className="App-name">
                Welcome to my page
            </p>
        </div>
    )
}
