import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={1}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="span" sx={{ color: 'primary.light' }}>
                            Water
                        </Box>
                        <Box component="span" sx={{ color: 'white' }}>
                            Purifier
                        </Box>
                    </Typography>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/"
                        startIcon={<HomeIcon />}
                        sx={{ mx: 1 }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/products"
                        startIcon={<ShoppingCartIcon />}
                        sx={{ mx: 1 }}
                    >
                        Products
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar; 