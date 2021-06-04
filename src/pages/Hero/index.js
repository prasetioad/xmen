import React, { useState, useEffect }from 'react'
import Navbar from '../../components/Navbar/'
import Hero from '../../components/organism/Hero/'
import axios from 'axios'

function Index() {
    const [data, setData] = useState([])
    const [search, setsearch] = useState()
    useEffect(() => {
       axios.get(process.env.REACT_APP_URL_HOST+'/hero')
       .then((res)=>{
           setData(res.data.data)
       })
       .catch((err)=>{
           console.log(err.response);
       })
    }, [])

    const findHero=(e)=>{
        setsearch(e.target.value)
        axios.get(`${process.env.REACT_APP_URL_HOST}/hero/by/?search=${e.target.value}`)
        .then((res)=>{
            console.log(res);
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }
    console.log(search);
    console.log(data);
    return (
        <div>
            <Navbar />
            <Hero data={data} funcPage={(e)=>{findHero(e)}}/>
        </div>
    )
}
export default Index