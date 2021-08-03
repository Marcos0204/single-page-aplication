import React from 'react'
import './index.css';
import logo from '../../img/logo.png';
import phone from '../../img/phone.png'

const Header = () => {
    return (
        <header>
            <div className='menu'>
                <ul>
                    <li className='logo'>
                        <a href='/'>
                            <img src={logo} alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='//'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='//'>
                            Feactures
                        </a>
                    </li>
                </ul>
            </div>
            <div className='main'>
                <div className='text'>
                    <h1>Mi SPA</h1>
                    <p>
                        Conoce la mejor aplicacion para gestionar cursos.
                    </p>
                    <div className='button'>
                        <button>
                            Empezar ahora
                        </button>
                    </div>
                </div>
                <div className='image'>
                    <img src={phone}  alt='phone' width='450' className='img'/>
                </div>
            </div>
        </header>
    )
}

export default Header
