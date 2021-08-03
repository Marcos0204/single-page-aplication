import React from 'react'
import draw from '../../img/draw.png'
import moile from '../../img/mobile_screen.png'
import './index.css';

const Layout = () => {
    return (
        <div className='layout layout-feacture'>
            <div className='layout layout-left'>
                <div className='text'>
                    <h3>Funcionaledades</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer
                    </p>
                </div>
                <div className='img'>   
                    <img  src={draw} alt='img'/>
                </div>
            </div>

            <div className='layout layout-rigth'>
                
                <div className='img'>   
                    <img  src={moile} alt='img'/>
                </div>
                <div className='text'>
                    <h3>Funcionaledades</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer
                    </p>
                </div>
            </div>
            

           
        </div>
    )
}

export default Layout
