import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import UserLayout from '../UserLayout'
import Button from '../../../components/Button'
import { getProfileDetail, updateProfileDetail } from '../../../api'
import { Modal } from 'react-bootstrap'


const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Error');
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await getProfileDetail();
                setProfile(response.data);
            } catch (error) {
                setModalTitle('Error');
                setModalMessage(error.response.data.message);
                setShowModal(true);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfileDetail(profile);
            setModalTitle('Success');
            setModalMessage('Profile updated successfully');
            setShowModal(true);
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
    }

    return (
        <UserLayout>
            <Form onSubmit={handleSubmit}>
                <div className="bg-[#202020] p-10 md:ms-5 rounded-lg">
                    <Row>
                        <h1 className="text-red-500 text-[20px]">Edit Your Profile</h1>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="firstName" className="text-white mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your first name"
                                    name="firstName"
                                    id="firstName"
                                    value={profile.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label htmlFor="lastName" className="text-white mb-2 ">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your last name"
                                    name="lastName"
                                    id="lastName"
                                    value={profile.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={12}>
                            <div className="form-group">
                                <label htmlFor="email" className="text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    id="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col md={12}>
                            <div className="form-group">
                                <label htmlFor="address" className="text-white mb-2">Address</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Enter your address"
                                    name="address"
                                    id="address"
                                    rows="4"
                                    value={profile.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 justify-end'>
                        <div className="d-flex justify-content-end">
                            <Button type="button" className='w-[200px] me-3 bg-black'>Cancel</Button>
                            <Button type="submit" className='w-[200px]'>Save Changes</Button>
                        </div>
                    </Row>
                </div>
            </Form>

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

export default Profile
