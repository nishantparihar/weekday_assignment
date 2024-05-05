import { useEffect } from 'react';
import FilterBox from './components/FilterBox';
import JobsBox from './components/JobsBox';
import Container from '@mui/material/Container'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { jdList } from './state/atoms/atoms';

export default function MainBox(){

    const [jobList, setJobList] = useRecoilState(jdList);

    useEffect(()=>{
        axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON',{
            "limit":10,
            "offset":0
        })
        .then(res => {
            setJobList(jobList => [...jobList, ...res.data.jdList])
        });
        
    }, [])

    return <>
            <Container sx={{mt: 5}}>
                <FilterBox></FilterBox>
                <JobsBox></JobsBox>
            </Container> 
            
    </>
}