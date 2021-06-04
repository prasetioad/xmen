import React from 'react'
import Button from '../../moleculs/Button'
import Navbar from '../../Navbar/index'
import HeaderTop from '../../organism/Hero/headerTop'
import DetTable from '../../moleculs/table/DetTable'
import DetSkill from '../../moleculs/table/DetSkill'

function Index({hero, skill}) {
    return (
        <div>
            <Navbar/>
            <HeaderTop content='Meng-klik "View Detail" di atas akan membawamu ke halaman detail di bawah ini. Ini jika kamu mengklik data milik Wolverine.'/>
            <div style={{width:'66%', marginLeft: 'auto', marginRight:'auto'}}>
                <hr />
            </div>
            <div style={{marginTop: '10px', width: '95vw',marginLeft: 'auto', marginRight:'auto'}}>
                <div style={{marginTop: '10px', width: '70%',marginLeft: 'auto', marginRight:'auto', display: "flex", justifyContent:'space-between'}}>
                    <div>
                        <h2>Detail Superhero: {hero.name}</h2>
                    </div>
                    <div>
                        <Button name='Edit' backColor='#007bff' color='white' size='50px' bordCol='white'/>
                    </div>
                </div>
                <div style={{marginTop: '10px', width: '70%',marginLeft: 'auto', marginRight:'auto'}}>
                    <DetTable data={hero}/>    
                </div>
                <div style={{marginTop: '10px', width: '70%',marginLeft: 'auto', marginRight:'auto'}}>
                    <DetSkill data={skill}/>    
                </div>
            </div>
        </div>
    )
}

export default Index
