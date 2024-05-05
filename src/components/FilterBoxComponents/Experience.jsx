import { Style } from '@mui/icons-material';
import {Autocomplete, TextField} from '@mui/material';



export default function Experience(){
    return <>

            <Autocomplete
            id="grouped-demo"
            size='small'
            options={roleslist}
            sx={{ minWidth: 125, direction: 'initial', fontSize: 5}}
            blurOnSelect={true}
            renderInput={(params) => <TextField {...params} label="Experience"/>}
            />    
    
    </>
}


const roleslist =[

    {label: '1', years: 1},
    {label: '2', years: 2},
    {label: '3', years: 3},
    {label: '4', years: 4},
    {label: '5', years: 5},
    {label: '6', years: 6},
    {label: '7', years: 7},
    {label: '8', years: 8},
    {label: '9', years: 9},
    {label: '10', years: 10},

]