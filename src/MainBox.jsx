import { useEffect } from 'react';
import FilterBox from './components/FilterBox';
import JobsBox from './components/JobsBox';
import Container from '@mui/material/Container'
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { jdList } from './state/atoms/atoms';

import InfiniteScroll from 'react-infinite-scroll-component';

import { filterExp, filterLocation, filterCompany, filterRole, filterSalary } from './state/atoms/atoms';


export default function MainBox(){

    const [jobList, setJobList] = useRecoilState(jdList);

    const selectedCompany = useRecoilValue(filterCompany);
    const selectedExperience = useRecoilValue(filterExp);
    const selectedLocation = useRecoilValue(filterLocation);
    const selectedSalary = useRecoilValue(filterSalary);
    const selectedRoles = useRecoilValue(filterRole);



    function filterData(){

        if(selectedCompany){
            setJobList((jobList)=>{
                return jobList ? jobList.filter((job)=>job.companyName.toLowerCase().includes(selectedCompany)) : []
            })
        }

        if(selectedExperience){
            setJobList((jobList)=>{
                return jobList ? jobList.filter((job)=>job.minExp <= expSelected) : []
            })
        }

        if(selectedLocation){
            setJobList((jobList)=>{
                return jobList ? jobList.filter((job)=>{
                    if(job.location === 'remote' && selectedLocation.includes('remote'))
                        return true
                    if(job.location === 'hybrid' && selectedLocation.includes('hybrid'))
                        return true
                    if(selectedLocation.includes('in-office'))
                        return true
                    
                }) : []
            })
        }

        if(selectedSalary){

        }

        if(selectedRoles){

        }

    }


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
                filterData()
            })
        } 
        catch (error) {
            console.log(error);
        } 

    }

    useEffect(()=>{
        fetchData()
        filterData()
    }, [])

    useEffect(()=>{
        filterData()
    }, [selectedCompany, selectedExperience, selectedLocation, selectedRoles, selectedSalary])


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