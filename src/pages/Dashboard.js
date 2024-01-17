import { Typography,Grid, Card, CardContent } from '@mui/material';
import { Box } from '@mui/joy';
import Map from '../components/Map'


const Dashboard = () => {
    return(
            <div style={{marginTop: 80}}>
                <Box p={{ xs: 2, md: 2}}>
                    <Typography variant='h5' component='h2'>Dashboard</Typography>
                    <Grid container spacing={3}> 
                        <Grid item xs={6} md={3}>
                        <Card>
                            <CardContent>
                            <Typography variant="h5">Card 1</Typography>
                            {/* Your card content */}
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={6} md={3}>
                        <Card>
                            <CardContent>
                            <Typography variant="h5">Card 1</Typography>
                            {/* Your card content */}
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={6} md={3}>
                        <Card>
                            <CardContent>
                            <Typography variant="h5">Card 1</Typography>
                            {/* Your card content */}
                            </CardContent>
                        </Card>
                        </Grid>

                        <Grid item xs={6} md={3}>
                        <Card>
                            <CardContent>
                            <Typography variant="h5">Card 1</Typography>
                            {/* Your card content */}
                            </CardContent>
                        </Card>
                        </Grid>
                        {/* Repeat for 3 additional cards */}
                    </Grid>
                </Box>
                <Map />
            </div>
    )
}

export default Dashboard;