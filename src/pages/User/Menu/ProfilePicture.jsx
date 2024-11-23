import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import UserLayout from '../UserLayout';
import Button from '../../../components/Button';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { getProfilePicture, updateProfilePicture } from '../../../api/index';
import { Modal } from 'react-bootstrap';

const ProfilePicture = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const auth = useAuthUser();
    const [imageFile, setImageFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Error');
    const [modalMessage, setModalMessage] = useState('');

    const fetchProfilePicture = async () => {
        try {
            const { data } = await getProfilePicture();
            setCurrentImage(data.profilePicture);
        } catch (error) {
            setModalTitle('Error');
            setModalMessage(error.response.data.message);
            setShowModal(true);
        }
    };

    useEffect(() => {
        fetchProfilePicture();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!imageFile) {
            setModalTitle('Error');
            setModalMessage('Please select an image to upload');
            setShowModal(true);
        }

        const formData = new FormData();
        formData.append('profilePicture', imageFile);

        try {
            await updateProfilePicture(formData);
            setSelectedImage(null);
            setModalTitle('Success');
            setModalMessage('Profile picture updated successfully');
            setShowModal(true);
            fetchProfilePicture();

        } catch (error) {
            setModalTitle('Error');
            setModalMessage(error.response.data.message);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalTitle('');
        setModalMessage('');
    };

    return (
        <UserLayout>
            <div className="bg-[#202020] p-10 md:ms-5 rounded-lg">
                <Row>
                    <h1 className="text-red-500 text-[20px]">Change Profile Picture</h1>
                    <span className="text-gray-400 mt-3">Add a profile picture to make your account more personal</span>
                    <span className="text-gray-400 fw-bold">*Accepted formats: .png, .jpg, .jpeg</span>
                </Row>
                <Row className='mt-4'>
                    <Col md={12}>
                        <div className="form-group text-center relative">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Profile" className="rounded-full my-5 w-48 h-48 md:w-96 md:h-96 object-cover mx-auto" />
                            ) : currentImage ? (
                                <img src={currentImage} alt="Profile" className="rounded-full my-5 w-48 h-48 md:w-96 md:h-96 object-cover mx-auto" />
                            ) : (
                                <div className="rounded-full my-5 w-48 h-48 md:w-96 md:h-96 bg-gray-500 mx-auto flex items-center justify-center text-white text-[100px] md:text-[200px]">
                                    {auth.username ? auth.username.charAt(0).toUpperCase() : 'U'}
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                        <span className="text-gray-400 text-center block mt-3">Click on the image to change it</span>
                    </Col>
                </Row>
                <Row className='mt-5 justify-end'>
                    <div className="d-flex justify-content-end">
                        <Button className='w-[200px] me-3 bg-black'>Cancel</Button>
                        <Button className='w-[200px]' onClick={handleSubmit}>Save Changes</Button>
                    </div>
                </Row>
            </div>

            <Modal centered show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="px-5" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </UserLayout>
    )
}

export default ProfilePicture;
