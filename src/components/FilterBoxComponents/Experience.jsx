import { Style } from '@mui/icons-material';
import {Autocomplete, TextField} from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { jdList } from '../../state/atoms/atoms';
import { filterExp } from '../../state/atoms/atoms';

export default function Experience(){

    const [expSelected, setExpSelected] = useRecoilState(filterExp);
    const setJobList = useSetRecoilState(jdList);
    
    useEffect(()=>{
        if(expSelected){
            setJobList((jobList)=>{
                return jobList ? jobList.filter((job)=>job.minExp <= expSelected) : []
            })
        }
    }, [expSelected]);

    return <>
            <Autocomplete
            id="expFilter"
            size='small'
            options={expList}
            sx={{ minWidth: 125, direction: 'initial', fontSize: 5}}
            onChange={(e, v)=> setExpSelected(v.years)}
            blurOnSelect={true}
            renderInput={(params) => <TextField {...params} label="Experience"/>}
            />    
    
    </>
}


const expList =[

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