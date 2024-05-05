import Stack from '@mui/material/Stack';
import Roles from './FilterBoxComponents/Roles';
import Experience from './FilterBoxComponents/Experience';
import MinSalary from './FilterBoxComponents/MinSalary';
import Company from './FilterBoxComponents/Company';
import Location from './FilterBoxComponents/Location';




export default function FilterBox(){
    return <>
            <Stack direction="row" sx={{mt: 5, width: '60rem'}} spacing={2}>
                <Roles />
                <Experience />
                <Location />
                <MinSalary />
                <Company />
            </Stack>
    </>
}