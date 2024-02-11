import { Grid } from '@mui/material'
import React from 'react'
import Back from '../../Component/Back/Back'
import { Filter } from '@mui/icons-material'
// import { Link } from 'react-router-dom'
// import { Dropdown } from '@mui/base/Dropdown';
// import { Menu } from '@mui/base/Menu';
// import { MenuButton } from '@mui/base/MenuButton';
// import { MenuItem } from '@mui/base/MenuItem';



//md,sm,xs
function Employee() {

    // const createHandleMenuClick = (menuItem) => {
    //     return () => {
    //         console.log(`Clicked on ${menuItem}`);
    //     };
    // };

    return (
        <>
            <Grid container>
                <Grid item lg={5} md={5} sm={5} xs={4}>
                    {/* <Link to={"/employeeregister"}> */}
                        <Back />
                    {/* </Link> */}
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={8}>
                    <h1 className='employee'>Employee List</h1>

                </Grid>
            </Grid><br></br>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} >
                    <Filter />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item lg={1}></Grid>
                <Grid  item lg={11}>
                {/* <Dropdown>
                    <MenuButton>Filter</MenuButton>
                    <Menu className='Menu'>
                        <MenuItem onClick={createHandleMenuClick('Profile')}>Name</MenuItem>
                        <MenuItem onClick={createHandleMenuClick('Language settings')}>Tel</MenuItem>
                        <MenuItem onClick={createHandleMenuClick('Log out')}>Adress</MenuItem>
                    </Menu>
                </Dropdown> */}

                </Grid>
            </Grid>
        </>
    )
}

export default Employee