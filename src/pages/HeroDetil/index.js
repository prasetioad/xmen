import React, { useEffect, useState } from 'react'
import HeroDetil from '../../components/organism/HeroDetil'
import axios from 'axios'

function Index(props) {
    // const json = JSON.parse()        
    const [data, setData] = useState([null])
    const [skill, setSkill] = useState([])
    useEffect(() => {
        let param = props.location.pathname.split('/')[2]
        axios.get(`${process.env.REACT_APP_URL_HOST}/hero/${param}`)
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }, [])
    useEffect(() => {
            if(data[0] !== null){
                console.log(data);
                let skills = data.skill.split(',')
                console.log(skills);
                axios.post(`${process.env.REACT_APP_URL_HOST}/skill/ids`, skills)
                .then((res)=>{
                    setSkill(res.data.data)
                })
                .catch((err)=>{
                    console.log(err.response);
                })
            }
    }, [data])
    console.log(skill);
    return (
        <div>
            <HeroDetil hero={data} skill={skill}/>
        </div>
    )
}

export default Index
