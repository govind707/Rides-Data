import React from 'react';
import { APage, BodyCon, HeaderCon } from './skins.js';
import Footer from './Footer.js';

const PageLayout = props => {
    return (
        <APage>
            {/* <BodyCon> */}
            <HeaderCon clr={"#f4d63"} shadow={true} multiShadow={true} fixedHdr={true} shadowLight={true
            }> <p>WelCome To Admin Panel</p></HeaderCon>
            {props.children}
            {/* </BodyCon> */}
            <Footer/>
        </APage>
    );
}

export default PageLayout;