import React from 'react'
import './style.css'

function Index() {
    return (
        <div>
            <div className="navbarBody" style={{ width: '95vw',height:'17vh', marginLeft: 'auto', marginRight: 'auto', marginBottom: '0'}}>
                <div className="navbarItem" style={{width: '70%', marginLeft: 'auto', marginRight:'auto', marginTop:'2%'}}>
                    <h1 style={{marginBottom: '0', fontSize: '2.5rem', color: 'inherit', opacity:'0.8'}}>X-MEN</h1>
                    <p style={{marginTop: '0'}}>Ini adalah X-MEN, ini adalah tentang para pahlawan pembela bumi.</p>
                </div>
            </div>
            <div style={{width: '95vw', marginLeft:'auto', marginRight:'auto', }}>
                <hr/>
            </div>
        </div>
    )
}

export default Index
