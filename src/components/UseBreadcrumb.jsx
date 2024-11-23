import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const UseBreadcrumb = () => {
    const auth = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const breadcrumbs = useBreadcrumbs();

    return (
        <Row className="text-white">
            <Col xs={12} md={6} className="py-4">
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    <li key={index + 1} className="inline-flex items-center">
                        <Link
                            className={`text-decoration-none ${index === breadcrumbs.length - 1
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {breadcrumb}
                        </Link>
                        {index < breadcrumbs.length - 1 && (
                            <span className="mx-2 text-gray-500">/</span>
                        )}
                    </li>
                ))}
            </Col>

            <Col xs={12} md={6} className="py-4 d-flex justify-content-end">
                {isAuthenticated ? (
                    <div className="text-white">
                        Welcome! &nbsp;
                        <span className="text-red-500">
                            {auth.username}
                        </span>
                    </div>
                ) : (
                    <Link to="/login" className="text-white">
                        You are not logged in, Please login by clicking this text
                    </Link>
                )}
            </Col>
        </Row>
    )
}