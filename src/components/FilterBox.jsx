import Stack from '@mui/material/Stack';
import Roles from './Roles';
import Experience from './Experience';
import MinSalary from './MinSalary';
import Company from './Company';
import Location from './Location';




export default function FilterBox(){
    return <>
            <Stack direction="row" spacing={2}>
                <Roles />
                <Experience />
                <Location />
                <MinSalary />
                <Company />
            </Stack>
    </>
}