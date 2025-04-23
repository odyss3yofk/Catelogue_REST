import { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Chip,
    CircularProgress,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/water-purifiers/');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 64px)',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    mb: 6,
                    fontWeight: 700,
                    color: 'primary.main',
                }}
            >
                Our Products
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="240"
                                image={product.image || '/placeholder.jpg'}
                                alt={product.name}
                                sx={{
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px',
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Chip
                                        label={product.category.name}
                                        color="primary"
                                        size="small"
                                        sx={{ mr: 1 }}
                                    />
                                    <Chip
                                        label={product.purifier_type.name}
                                        color="secondary"
                                        size="small"
                                    />
                                </Box>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{ fontWeight: 600 }}
                                >
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1 }}
                                >
                                    {product.brand}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ fontWeight: 700, mb: 2 }}
                                >
                                    ₹{product.price}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    Capacity: {product.capacity_lph} LPH
                                </Typography>
                                <Button
                                    component={RouterLink}
                                    to={`/products/${product.id}`}
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                    }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList; 