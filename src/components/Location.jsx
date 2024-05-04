import {Autocomplete, TextField, Stack} from '@mui/material';


export default function Location(){
    return <>

            <Autocomplete
            multiple
            limitTags={2}
            id="grouped-demo"
            size='small'
            options={roleslist}
            groupBy={(roleslist) => roleslist.field}
            getOptionLabel={(roleslist) => roleslist.title}
            sx={{ minWidth: 110, direction: 'initial'}}
            blurOnSelect={true}
            
            renderInput={(params) => <TextField {...params} label="Remote"/>}
            />    
    
    </>
}


const roleslist =[

    {label: 'Remote', type: 1},
    {label: 'Hybrid', type: 2},
    {label: 'In-office', type: 3},

]