import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../AdminLayout';
import { getBannerDetail, editBanner } from '../../../../api';
import { Icon } from '@iconify/react';

const EditBanner = () => {
    const { bannerId } = useParams();
    const [formData, setFormData] = useState({
        image: [],
    });
    const [imageChanged, setImageChanged] = useState(false);

    useEffect(() => {
        if (bannerId) {
            fetchBannerDetails(bannerId);
        }
    }, [bannerId]);

    const fetchBannerDetails = async (id) => {
        try {
            const response = await getBannerDetail(id);
            const image = response.data.banner.image;
            setFormData({
                image: Array.isArray(image) ? image : [image],
            });
        } catch (error) {
            console.error('Failed to fetch banner details', error);
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prevState => ({
            ...prevState,
            image: files
        }));
        setImageChanged(true);
    };

    const handleImageClick = () => {
        document.getElementById('bannerImageInput').click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataForApi = new FormData();
            if (imageChanged) {
                formData.image.forEach((img, index) => {
                    formDataForApi.append('bannerImage', img);
                });
            }

            await editBanner(bannerId, formDataForApi);
            window.location.href = '/admin/banner';
        } catch (error) {
            console.error('Failed to save banner', error);
        }
    };

    return (
        <DefaultLayout>
            <div className="flex justify-start items-center">
                <div className="w-full bg-white shadow-md rounded-lg p-5">
                    <h1 className="text-2xl font-bold text-gray-700 mb-3">Edit Banner</h1>

                    <div className="flex justify-center my-4">
                        <div
                            className="w-56 h-56 flex justify-center items-center border rounded-lg cursor-pointer"
                            onClick={handleImageClick}
                        >
                            {formData.image.length > 0 ? (
                                formData.image.map((img, index) => (
                                    <img
                                        key={index}
                                        src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                                        alt={`Banner ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                ))
                            ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                    <Icon icon="material-symbols-light:box" className="text-[90px]" />
                                    <span>Choose banner images</span>
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            id="bannerImageInput"
                            name="bannerImage"
                            onChange={handleImageChange}
                            accept="image/*"
                            multiple
                            className="hidden"
                        />
                    </div>
                    <span className='flex justify-center text-gray-400'>Click the image to change</span>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-end">
                            <button type="button" className="bg-transparent text-gray-500 py-2 px-4 border rounded-lg mr-4" onClick={() => window.history.back()}>
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

export default EditBanner;
