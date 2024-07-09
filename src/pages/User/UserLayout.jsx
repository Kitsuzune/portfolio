import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UseBreadcrumb } from '../../components/UseBreadcrumb'
import ProfileSidebar from '../../components/ProfileSidebar'

const UserLayout = ({ children }) => {
    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0 pb-48">
            <div className="w-[90%]">

                <Row>
                    <UseBreadcrumb />
                </Row>

                <Row className='mt-5'>
                    <Col md={3}>
                        <ProfileSidebar />
                    </Col>
                    <Col md={9}>
                        {children}
                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default UserLayout
