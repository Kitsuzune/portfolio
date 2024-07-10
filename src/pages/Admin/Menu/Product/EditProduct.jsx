import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../AdminLayout';
import { addProduct, updateProduct, getProductDetail } from '../../../../api';
import { Icon } from '@iconify/react';

const EditProduct = () => {
    const { productId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        status: true,
        productImage: null,
        description: ''
    });
    const [imageChanged, setImageChanged] = useState(false);

    useEffect(() => {
        if (productId) {
            fetchProductDetails(productId);
        }
    }, [productId]);

    const fetchProductDetails = async (id) => {
        try {
            const response = await getProductDetail(id);
            setFormData({
                name: response.data.product.name,
                price: response.data.product.price,
                status: response.data.product.status,
                productImage: response.data.product.productImage,
                description: response.data.product.description
            });
        } catch (error) {
            console.error('Failed to fetch product details', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            productImage: file
        }));
        setImageChanged(true);
    };

    const handleImageClick = () => {
        document.getElementById('productImageInput').click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataForApi = new FormData();
            formDataForApi.append('name', formData.name);
            formDataForApi.append('price', formData.price);
            formDataForApi.append('status', formData.status);
            formDataForApi.append('description', formData.description);
            if (imageChanged) {
                formDataForApi.append('productImage', formData.productImage);
            }

            if (productId) {
                await updateProduct(productId, formDataForApi);
            } else {
                await addProduct(formDataForApi);
            }
            window.location.href = '/admin/products';
        } catch (error) {
            console.error('Failed to save product', error);
        }
    };

    return (
        <DefaultLayout>
            <div className="flex justify-start items-center min-h-screen">
                <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-5">
                    <h1 className="text-2xl font-bold text-gray-700 mb-3">{productId ? 'Edit Product' : 'Add Product'}</h1>

                    <div className="flex justify-center my-4">
                        <div
                            className="w-56 h-56 flex justify-center items-center border rounded-lg cursor-pointer"
                            onClick={handleImageClick}
                        >
                            {formData.productImage ? (
                                <img
                                    src={typeof formData.productImage === 'string' ? formData.productImage : URL.createObjectURL(formData.productImage)}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                    <Icon icon="material-symbols-light:box" className="text-[90px]" />
                                    <span>Choose product images</span>
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            id="productImageInput"
                            name="productImage"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" required />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" required />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                                <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" required>
                                    <option value={true}>In Stock</option>
                                    <option value={false}>Out of Stock</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea rows={6} name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none" required />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="bg-transparent text-gray-500 py-2 px-4 border rounded-lg mr-4">
                                Cancel
                            </button>
                            <button type="submit" className="bg-black text-white py-2 px-4 rounded-lg h-[60px]">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default EditProduct;
