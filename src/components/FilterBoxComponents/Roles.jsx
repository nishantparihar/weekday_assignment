import {Autocomplete, TextField, Stack} from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { filterRole } from '../../state/atoms/atoms';


export default function Roles(){

    const setFilterRole = useSetRecoilState(filterRole);

    return <div>
              
                    <Autocomplete
                    multiple
                    limitTags={2}
                    id="grouped-demo"
                    size='small'
                    options={roleslist}
                    onChange={(e, v) => {setFilterRole(v ? v.map((choice)=>choice.title) : [])}}
                    groupBy={(roleslist) => roleslist.field}
                    getOptionLabel={(roleslist) => roleslist.title}
                    sx={{ minWidth: 150, direction: 'initial'}}
                    blurOnSelect={true}
                    
                    renderInput={(params) => <TextField {...params} label="Roles"/>}
                    />
              
            </div>
}


const roleslist =[

    {field: "ENGINEERING", title: "backend"},
    {field: "ENGINEERING", title: "frontend"},
    {field: "ENGINEERING", title: "fullstack"},
    {field: "ENGINEERING", title: "ios"},
    {field: "ENGINEERING", title: "flutter"},
    {field: "ENGINEERING", title: "react native"},
    {field: "ENGINEERING", title: "android"},
    {field: "ENGINEERING", title: "tech lead"},
    {field: "ENGINEERING", title: "dev-ops"},
    {field: "ENGINEERING", title: "data engineer"},
    {field: "ENGINEERING", title: "data science"},
    {field: "ENGINEERING", title: "computer-vision"},
    {field: "ENGINEERING", title: "nlp"},
    {field: "ENGINEERING", title: "deep-learning"},
    {field: "ENGINEERING", title: "test / qa"},
    {field: "ENGINEERING", title: "web3"},
    {field: "ENGINEERING", title: "sre"},

]