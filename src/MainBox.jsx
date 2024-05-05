import FilterBox from './components/FilterBox';
import JobsBox from './components/JobsBox';
import Container from '@mui/material/Container'
import { red } from '@mui/material/colors';

export default function MainBox(){
    return <>
            <Container sx={{mt: 5}}>
                <FilterBox></FilterBox>
                <JobsBox></JobsBox>
            </Container> 
            
    </>
}