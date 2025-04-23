import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    Chip,
    CircularProgress,
    Divider,
} from '@mui/material';
import axios from 'axios';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/water-purifiers/${id}/`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

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

    if (!product) {
        return (
            <Container>
                <Typography>Product not found</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="500"
                            image={product.image || '/placeholder.jpg'}
                            alt={product.name}
                            sx={{
                                objectFit: 'cover',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px',
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <CardContent>
                            <Box sx={{ mb: 2 }}>
                                <Chip
                                    label={product.category.name}
                                    color="primary"
                                    sx={{ mr: 1 }}
                                />
                                <Chip
                                    label={product.purifier_type.name}
                                    color="secondary"
                                />
                            </Box>
                            <Typography
                                variant="h3"
                                component="h1"
                                gutterBottom
                                sx={{ fontWeight: 700 }}
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                gutterBottom
                            >
                                {product.brand}
                            </Typography>
                            <Typography
                                variant="h4"
                                color="primary"
                                gutterBottom
                                sx={{ fontWeight: 700, my: 2 }}
                            >
                                ₹{product.price}
                            </Typography>
                            <Divider sx={{ my: 3 }} />
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Specifications
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body1" color="text.secondary">
                                            Model Number
                                        </Typography>
                                        <Typography variant="body1">
                                            {product.model_number}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1" color="text.secondary">
                                            Capacity
                                        </Typography>
                                        <Typography variant="body1">
                                            {product.capacity_lph} LPH
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography variant="body1" paragraph>
                                {product.description}
                            </Typography>
                            <Box sx={{ mt: 4 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        borderRadius: '50px',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    Contact for Purchase
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            height: '100%',
                        }}
                    >
                        <WaterDropIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Pure Water Guarantee
                        </Typography>
                        <Typography color="text.secondary">
                            Advanced filtration technology ensures pure and safe drinking water
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            height: '100%',
                        }}
                    >
                        <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Free Installation
                        </Typography>
                        <Typography color="text.secondary">
                            Professional installation service included with every purchase
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            p: 3,
                            textAlign: 'center',
                            height: '100%',
                        }}
                    >
                        <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            24/7 Support
                        </Typography>
                        <Typography color="text.secondary">
                            Round-the-clock customer support for all your queries
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetail; 