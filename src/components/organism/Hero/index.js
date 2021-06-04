import React from 'react'
import HeroTop from './headerTop'
import HeroBot from '../Hero/heroBot'
import Search from '../../moleculs/search'

function Index({data, funcPage}) {



    return (
        <div>
            <HeroTop content={`
                            Di bawah ini adalah Daftar orang-orang yang super hebat itu. 
                            Kamu bisa mencari nama mereka melalui fasilitas pencarian di sebelah kanan.  
                            Kita beruntung memiliki data-data mereka. Jangan sampai jatuh ke tangan musuh, ini akan mengubah dunia..
                        `}/>
            <div style={{width: '95vw',  marginLeft: 'auto', marginRight:'auto', marginTop:'10px'}}>
                <div className="searchContainer" style={{display:'flex', justifyContent: 'space-between', width: '70%', marginLeft: 'auto', marginRight:'auto', alignItems:'center'}}>
                    <div className="searcDesc">
                        <h2 style={{margin: '0'}}>Daftar Superhero</h2>
                    </div>
                    <Search func={funcPage}/>
                </div>
            </div>
            <HeroBot data={data}/>
            <div style={{width: '95vw', marginTop:'50px', marginLeft:'auto', marginRight:'auto'}}>
                <hr style={{width: '100%', marginTop:'10px'}}/>
            </div>
        </div>
    )
}

export default Index
