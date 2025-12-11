import React from 'react'
import Button from 'react-bootstrap/Button';
import Foot from '../Footer/Foot';
import Head from '../Header/Head';
import { Link } from 'react-router-dom';

export default function Home() {
    return (

        <>

        <Head />

        <div>
            <Link to="/Link">
            <Button variant="primary">Click Me</Button>
            </Link>
        </div>

        <Foot />
        </>

    )
}
