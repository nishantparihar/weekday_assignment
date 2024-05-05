import {Box, Typography} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


export default function CardSalary(){
    return (
        <Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color:'#9A8F8B', display: 'flex', alignItems: 'center' }}>
                Estimated Salary: ₹30 - 60 LPA <CheckBoxIcon sx={{width: '15px', color: '#16C60C', ml: '2px', mb:'1px'}} />
            </Typography>              
        </Box>
    )
}