import {Autocomplete, TextField} from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { filterSalary } from '../../state/atoms/atoms';

export default function MinSalary(){

    const setFilterSalary = useSetRecoilState(filterSalary);

    return <>

        <Autocomplete
        id="grouped-demo"
        size='small'
        options={salaryList}
        sx={{ minWidth: 240}}
        onChange={(e, v)=> setFilterSalary(v.min)}
        blurOnSelect={true}            
        renderInput={(params) => <TextField {...params} label="Minimum Base Pay Salary"/>}
        />    
    
    </>
}


const salaryList = [
    {label: '0L', min: 0},
    {label: '10L', min: 10},
    {label: '20L', min: 20},
    {label: '30L', min: 30},
    {label: '40L', min: 40},
    {label: '50L', min: 50},
    {label: '60L', min: 60},
    {label: '70L', min: 70},
]