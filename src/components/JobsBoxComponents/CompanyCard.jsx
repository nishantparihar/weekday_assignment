import {Paper, Card, CardContent, CardActions} from '@mui/material';
import CardHeading from './CardHeading';
import CardSalary from './CardSalary';
import CardAbout from './CardAbout';
import CardExperience from './CardExperience';


export default function CompanyCard(){
    return <>
            <Paper elevation={2} sx={{width: 330}}>
                <Card>
                    <CardContent>
                        <CardHeading/>
                        <CardSalary />
                        <CardAbout />
                        <CardExperience />
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </Paper>
    </>
}