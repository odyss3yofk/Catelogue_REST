import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 64px)',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                py: 8,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        mb: 8,
                    }}
                >
                    <WaterDropIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #2196f3 30%, #1976d2 90%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            mb: 2,
                        }}
                    >
                        Pure Water Solutions
                    </Typography>
                    <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        sx={{ color: 'text.secondary', mb: 4, maxWidth: '800px' }}
                    >
                        Discover our range of high-quality water purifiers for your home and business
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        component={RouterLink}
                        to="/products"
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                            },
                        }}
                    >
                        Explore Products
                    </Button>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                textAlign: 'center',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <WaterDropIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Pure Water
                            </Typography>
                            <Typography color="text.secondary">
                                Advanced filtration technology for crystal clear water
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                textAlign: 'center',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <WaterDropIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Energy Efficient
                            </Typography>
                            <Typography color="text.secondary">
                                Eco-friendly solutions that save energy and money
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                textAlign: 'center',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <WaterDropIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Easy Maintenance
                            </Typography>
                            <Typography color="text.secondary">
                                Simple maintenance procedures for long-lasting performance
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home; 