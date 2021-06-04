import React, { useEffect, useState } from 'react'
import Button from '../../moleculs/Button'
import Search from '../../moleculs/search'
import Navbar from '../../Navbar/index'
import HeaderTop from '../../organism/Hero/headerTop'
import DetTable from '../../moleculs/table/DetTable'
import DaftarSkill from '../../moleculs/table/DaftarSkill'
import axios from 'axios'

function Index() {
    const [data, setData] = useState([])
    const [search, setsearch] = useState()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL_HOST}/skill`)
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }, [])
    const findSKill=(e)=>{
        setsearch(e.target.value)
        axios.get(`${process.env.REACT_APP_URL_HOST}/skill/by/?search=${e.target.value}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }
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
                        <h2>Daftar Skill</h2>
                    </div>
                    <div>
                        <Search name='Edit' backColor='#007bff' color='white' size='50px' bordCol='white' func={(e)=>{findSKill(e)}}/>
                    </div>
                </div>
                <div style={{marginTop: '10px', width: '70%',marginLeft: 'auto', marginRight:'auto'}}>
                    <DaftarSkill data={data} />    
                </div>
            </div>
        </div>
        
    )
}

export default Index
