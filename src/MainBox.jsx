import { useEffect } from 'react';
import FilterBox from './components/FilterBox';
import JobsBox from './components/JobsBox';
import Container from '@mui/material/Container'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { jdList } from './state/atoms/atoms';

import InfiniteScroll from 'react-infinite-scroll-component';


export default function MainBox(){

    const [jobList, setJobList] = useRecoilState(jdList);


    function fetchData(){
       try {
            const jobListLength = jobList ? jobList.length : 0;
            axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON',{
                "limit":jobListLength + 6,
                "offset":0
            })
            .then(res => {
                const jdIds = jobList ? jobList.map(job => job.jdUid) : [];
                const resJdList = res.data.jdList ? res.data.jdList.filter((job)=> !jdIds.includes(job.jdUid)) :[];
                setJobList(jobList => [...jobList,...resJdList]);
                
            })
        } 
        catch (error) {
            console.log(error);
        } 

    }

    useEffect(()=>{
        fetchData()
    }, [])


    return <>
        <Container sx={{mt: 5}}>
            <FilterBox></FilterBox>
            <InfiniteScroll
                dataLength={jobList.length} //This is important field to render the next data
                next={fetchData}
                hasMore={jobList.length > 100 ? false : true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
            >

            <JobsBox></JobsBox>
            </InfiniteScroll>
        </Container>           
    </>
}