import {Paper, Card, CardContent, CardActions, CardActionArea} from '@mui/material';
import CardHeading from './CardHeading';
import CardSalary from './CardSalary';
import CardAbout from './CardAbout';
import CardExperience from './CardExperience';
import CardFooter from './CardFooter';


export default function CompanyCard(){
    return <>
            <Paper elevation={2} sx={{width: 330}}>
                <Card>
                    <CardActionArea >
                        <CardContent>
                            <CardHeading/>
                            <CardSalary />
                            <CardAbout />
                            <CardExperience />
                        </CardContent>
                        <CardActions>
                            <CardFooter />
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Paper>
    </>
}