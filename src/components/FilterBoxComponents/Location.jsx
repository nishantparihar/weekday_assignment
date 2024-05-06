import {Autocomplete, TextField} from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { filterLocation } from '../../state/atoms/atoms';

export default function Location(){

    const setFilterLocation = useSetRecoilState(filterLocation);

    return <>
        <Autocomplete
        multiple
        id="grouped-demo"
        size='small'
        options={locationList}
        onChange={(e, v) => {setFilterLocation(v ? v.map((choice)=>choice.type) : [])}}
        sx={{ minWidth: 110}}
        blurOnSelect={true}            
        renderInput={(params) => <TextField {...params} label="Remote"/>}
        />    
    
    </>
}


const locationList =[

    {label: 'Remote', type: "remote"},
    {label: 'Hybrid', type: "hybrid"},
    {label: 'In-office', type: "in-office"},

]