import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import Button from '../Button'
import Swal from 'sweetalert2'

function HeroList({data, func}) {
    const history = useHistory()
    const viewHeroDetil=(id)=>{
        history.push(`/detil/${id}`)
    }
    const deleteHero =(id)=>{
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
              axios.delete(`${process.env.REACT_APP_URL_HOST}/hero/${id}`)
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
    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Jenis kelamin</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {data && data.map(item=>{return(
                <tbody>
                    <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.jenis_kelamin}</td>
                    <td style={{display: 'flex'}}>
                        <Button name='View Detil' color='white' backColor='#007bff' func={()=>{viewHeroDetil(item.id)}}/> 
                        <Button name='Hapus' color='white' backColor='#dc3545' func={()=>{deleteHero(item.id)}} /> 
                    </td>
                    </tr>
                </tbody>
                )})}
            </table>
        </div>
    )
}

export default HeroList
