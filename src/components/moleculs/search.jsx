import React from 'react'
import './style.css'
import {FaSearch} from 'react-icons/fa'

function Index({func }) {
    return (
        // <div style={{width: '95vw',  marginLeft: 'auto', marginRight:'auto', marginTop:'10px'}}>
        //     <div className="searchContainer" style={{display:'flex', justifyContent: 'space-between', width: '70%', marginLeft: 'auto', marginRight:'auto', alignItems:'center'}}>
        //         <div className="searcDesc">
        //             <h2 style={{margin: '0'}}>{desc}</h2>
        //         </div>
                <div className="searchTool">
                    <div style={{height: '40px', display:'flex', justifyContent:'flex-start' }}>
                        <div style={{padding: '10px', background:'#e9ecef', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px'}}>
                            <FaSearch style={{color: '#495057'}}/>
                        </div>
                        <div>
                            <input type="search" placeholder='Pencarian'  style={{height:'100%', borderColor:'#e9ecef'}} onChange={func}/>
                        </div>
                        <div>
                            <button style={{height:'100%', borderTopRightRadius: '4px',borderBottomRightRadius: '4px', background:'#e9ecef', cursor:'pointer'}} onClick={func}>Cari</button>
                        </div>
                    </div>
                </div>
        //     </div>
        // </div>
    )
}

export default Index
