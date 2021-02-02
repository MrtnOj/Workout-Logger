import React, { Fragment } from 'react';
import NavBar from '../../components/Navbar/Navbar';

const layout = (props: any) => {
    return (
        <Fragment>
            <NavBar />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default layout;