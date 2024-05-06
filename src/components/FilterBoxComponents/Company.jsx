import {TextField} from '@mui/material';
import { useSetRecoilState } from 'recoil';
import {filterCompany} from '../../state/atoms/atoms'


export default function Company(){

    const setFilterCompany = useSetRecoilState(filterCompany)

    return <>
            <TextField id="outlined-basic" onChange={(e)=>{setFilterCompany(e.target.value.toLowerCase())}} sx={{ width: 210}} label="Search Company Name" variant="outlined" size='small' />    
    </>
}