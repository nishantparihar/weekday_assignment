import {Autocomplete, TextField} from '@mui/material';


export default function Location(){
    return <>

        <Autocomplete
        multiple
        id="grouped-demo"
        size='small'
        options={locationList}
        sx={{ minWidth: 110}}
        blurOnSelect={true}            
        renderInput={(params) => <TextField {...params} label="Remote"/>}
        />    
    
    </>
}


const locationList =[

    {label: 'Remote', type: 1},
    {label: 'Hybrid', type: 2},
    {label: 'In-office', type: 3},

]