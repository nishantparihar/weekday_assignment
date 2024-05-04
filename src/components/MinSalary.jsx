import {Autocomplete, TextField, Stack} from '@mui/material';


export default function MinSalary(){
    return <>

            <Autocomplete
            multiple
            limitTags={2}
            id="grouped-demo"
            size='small'
            options={roleslist}
            groupBy={(roleslist) => roleslist.field}
            getOptionLabel={(roleslist) => roleslist.title}
            sx={{ minWidth: 240, direction: 'initial'}}
            blurOnSelect={true}
            
            renderInput={(params) => <TextField {...params} label="Minimum Base Pay Salary"/>}
            />    
    
    </>
}


const roleslist =[

    {field: "ENGINEERING", title: "Backend"},
    {field: "ENGINEERING", title: "Frontend"},
    {field: "ENGINEERING", title: "Fullstack"},
    {field: "ENGINEERING", title: "IOS"},
    {field: "ENGINEERING", title: "Flutter"},
    {field: "ENGINEERING", title: "React Native"},
    {field: "ENGINEERING", title: "Android"},
    {field: "ENGINEERING", title: "Tech Lead"},
    {field: "ENGINEERING", title: "Dev-Ops"},
    {field: "ENGINEERING", title: "Data Engineer"},
    {field: "ENGINEERING", title: "Data Science"},
    {field: "ENGINEERING", title: "Computer-Vision"},
    {field: "ENGINEERING", title: "Nlp"},
    {field: "ENGINEERING", title: "Deep-Learning"},
    {field: "ENGINEERING", title: "Test / Qa"},
    {field: "ENGINEERING", title: "Web3"},
    {field: "ENGINEERING", title: "Sre"},

]