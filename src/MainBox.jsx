import { useEffect } from 'react';
import FilterBox from './components/FilterBox';
import JobsBox from './components/JobsBox';
import Container from '@mui/material/Container'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { jdList } from './state/atoms/atoms';


function clicked(){
    axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON',{
        "limit":jobList.length + 6,
        "offset":0
    })
    .then(res => {
        const jdIds = jobList ? jobList.map(job => job.jdUid) : [];
        const resJdList = res.data.jdList ? res.data.jdList.filter((job)=> !jdIds.includes(job.jdUid)) :[];
        setJobList(jobList => [...jobList,...resJdList]);
        
    });
}

export default function MainBox(){

    const [jobList, setJobList] = useRecoilState(jdList);


    function clicked(){
        const jobListLength = jobList ? jobList.length : 0;
        axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON',{
            "limit":jobListLength + 6,
            "offset":0
        })
        .then(res => {
            const jdIds = jobList ? jobList.map(job => job.jdUid) : [];
            const resJdList = res.data.jdList ? res.data.jdList.filter((job)=> !jdIds.includes(job.jdUid)) :[];
            setJobList(jobList => [...jobList,...resJdList]);
            
        });
    }

    useEffect(()=>{
        clicked()
    }, [])


    return <>
            <Container sx={{mt: 5}}>
                <FilterBox></FilterBox>
                <JobsBox></JobsBox>
                <button onClick={clicked}>Load more</button>
            </Container> 
            
    </>
}