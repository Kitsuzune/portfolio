import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Row, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../AdminLayout';
import { getBanner } from '../../../../api';
import { Icon } from '@iconify/react/dist/iconify.js';

const AdminBanner = () => {
    const [banners, setBanners] = useState([]);

    const fetchBanners = async () => {
        const response = await getBanner();
        setBanners(response.data.banners);
    };

    useEffect(() => {
        fetchBanners();
    }, []);

    return (
        <DefaultLayout>
            <Container fluid>
                <Row className="mt-5 mx-3 bg-white text-black rounded-lg p-5">
                    <div className='w-full'>
                        <div className="d-flex justify-content-between">
                            <span className="text-[40px]">Banners</span>
                            <div className="flex gap-3 align-items-center justify-end">
                                <div>
                                    <input type="text" placeholder="Search" className="px-4 py-3 rounded-lg " />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5" style={{ height: '100%', overflowY: 'scroll' }}>
                        <Row>
                            {banners.map(banner => (
                                <div key={banner.id} className="col-md-4 my-2">
                                    <div className="card">
                                        {Array.isArray(banner.image) ? (
                                            <div className="card-img-top grid grid-cols-2 gap-2 relative" style={{ height: '20vh', overflow: 'hidden' }}>
                                                {banner.image.slice(0, 4).map((img, index) => (
                                                    <img key={index} src={img} alt={`banner-${index}`} className="w-full h-full object-cover" />
                                                ))}
                                                {banner.image.length > 4 && (
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                                                        +{banner.image.length - 4} more
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <img src={banner.image} alt="banner" className="card-img-top h-[20vh] object-cover" />
                                        )}
                                        <div className="card-body flex justify-between items-center">
                                            <h5 className="card-title">{banner.name}</h5>
                                            <Link to={`/admin/banner/${banner.id}`} className="btn btn-primary">Change Image</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Row>
                    </div>
                </Row>
            </Container>
        </DefaultLayout>
    );
};

export default AdminBanner;
