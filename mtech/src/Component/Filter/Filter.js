import React from 'react'
import { createFilterOptions } from '@mui/material/Autocomplete';



function Filter() {

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title,
      });
      
      <Autocomplete filterOptions={filterOptions} />;
      

  return (
    <div>
        <button Onclick={filterOptions()}></button>

    </div>
  )
}

export default Filter