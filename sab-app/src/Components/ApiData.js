import React from 'react'
import { CircularProgress } from '@mui/material';

const ApiData = (props) => {
  console.log(props)
  const { arrData } = props;
  const detailList = arrData.length ? (arrData.slice(0, 5).map((info => 
  {

    return (

      <div key={info.id}>
        <p>Location: {info.country}</p>
        <p>Name:{info.name}</p>
        <p>Website: {info.web_pages}</p>
        <p>Domains: {info.domains}</p>
        <hr style={{
          height: .20,
          borderColor: '#DF7401'
        }}></hr>

      </div>



    )

  }
  )
  )
  ) : <CircularProgress />


  return (
    <div><h1 align='center'>List of Universities</h1>
      <p align='center'>{detailList}</p></div>


  )

}



export default ApiData;