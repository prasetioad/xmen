
import React, { useEffect, useState } from 'react'
import './style.css'

function HeroList({data}) {
    const [edit, setEdit] = useState(false)
    const [the, setThedata] = useState(data.name)
    useEffect(() => {
        setThedata({
            name: data.name
        })
    }, [])
    const changeData=()=>{
        if(edit){
            setEdit(false)
        }else{
            setEdit(true)
        }
    }
    const editData =(e)=>{
        data.name = e.target.value
    }
    return (
        <div>
            <table class="table table-bordered">
                <tbody>
                        <tr>
                        <td className='col col-lg-4'>ID</td>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>
                            {edit ? 
                            <input type="text" id='name' value={data.name} onChange={(e)=>editData(e)}  style={{width:'100%', borderRadius:'4px', height:'100%'}} onClick={()=>{changeData()}}/>
                            :
                            <input type="text" id='name' value={data.name} readOnly style={{width:'100%', borderRadius:'4px', height:'100%'}} onClick={()=>{changeData()}}/>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>
                            <select name="jenisKelamin" id="" style={{width:'100%', borderRadius:'4px', height:'100%'}} >
                                {data && data.jenis_kelamin == 'Laki-laki' ? <>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option> </>
                                : <>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                                </>}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HeroList
