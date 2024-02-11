import React from 'react'
// import { Grid } from '@mui/material'
// import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Back1 from '../../Images/Back.png'

function Back() {

  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //     setOpen(true);
  // };

  return (
    <>
    
      <Button ><img src={Back1} alt="Back arrow" /></Button>
      {/* <Backdrop open={open}></Backdrop>onClick={handleOpen} */}
     
    </>
  )
}

export default Back