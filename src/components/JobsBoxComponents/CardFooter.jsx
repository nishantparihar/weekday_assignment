import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Button, Stack } from '@mui/material';

  export default function CardFooter() {
    return (
        <Stack sx={{ width: '100%', mb:'10px'}}>
            <Button
                component="label"
                role={undefined}
                variant="contained"
              
                sx={{backgroundColor:'#55EFC4', color: 'black', width: '90%', margin:'auto'}}
                startIcon={<ElectricBoltIcon sx={{color:'gold'}} />}
            >
                Easy Apply
            </Button>
        </Stack>
    )
  }