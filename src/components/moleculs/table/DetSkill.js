import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import Button from '../Button'
import Swal from 'sweetalert2'

function HeroList({data}) {
    const history = useHistory()
    const viewHeroDetil=(id)=>{
        history.push(`/detil/${id}`)
    }
    const deleteSkill =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`${process.env.REACT_APP_URL_HOST}/skill/${id}`)
              .then((res)=>{
                  console.log(res.message);
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
              })
            }
          })
    }
    const tambahSkill =()=>{

    }
    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col" className='col col-lg-1'>No</th>
                    <th scope="col" className='col col-lg-8'>Nama</th>
                    <th scope="col">
                        <Button name='Tambah Skill' backColor='#007bff' bordCol='#007bff' color='white' func={()=>{tambahSkill()}}/>
                    </th>
                    </tr>
                </thead>
                {data && data.map(item=>{return(
                <tbody>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td style={{display: 'flex'}}>
                        <Button name='Hapus' color='white' backColor='#dc3545' func={()=>{deleteSkill()}} /> 
                    </td>
                    </tr>
                </tbody>
                )})}
            </table>
        </div>
    )
}

export default HeroList
