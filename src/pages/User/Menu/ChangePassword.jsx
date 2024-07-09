import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import UserLayout from '../UserLayout';
import Button from '../../../components/Button';
import { Modal } from 'react-bootstrap';
import { changePassword } from '../../../api/index';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Error');
    const [modalMessage, setModalMessage] = useState('');

    const handleCloseModal = () => {
        setShowModal(false);
        setModalTitle('');
        setModalMessage('');
    };

    const handleSaveChanges = async () => {
        if (!oldPassword || !newPassword) {
            setModalTitle('Error');
            setModalMessage('Please fill in all fields.');
            setShowModal(true);
            return;
        }

        try {
            const formData = {
                oldPassword,
                newPassword,
            };

            const response = await changePassword(formData);
            setModalTitle('Success');
            setModalMessage(response.data.message);
            setShowModal(true);
        } catch (error) {
            setModalTitle('Error');
            setModalMessage(error.response?.data?.message || 'An error occurred');
            setShowModal(true);
        }
    };

    return (
        <UserLayout>
            <div className="bg-[#202020] p-10 ms-5 rounded-lg">
                <Row>
                    <h1 className="text-red-500 text-[20px]">Change Password</h1>
                </Row>
                <Row className='mt-4'>
                    <Col md={12}>
                        <div className="form-group">
                            <label htmlFor="oldPassword" className="text-white mb-2">Current Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Enter your current password" 
                                name="oldPassword" 
                                id="oldPassword" 
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={12}>
                        <div className="form-group">
                            <label htmlFor="newPassword" className="text-white mb-2">New Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Enter your new password" 
                                name="newPassword" 
                                id="newPassword" 
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 justify-end'>
                    <div className="d-flex justify-content-end">
                        <Button className='w-[200px] me-3 bg-black'>Cancel</Button>
                        <Button className='w-[200px]' onClick={handleSaveChanges}>Save Changes</Button>
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
    );
}

export default ChangePassword;
