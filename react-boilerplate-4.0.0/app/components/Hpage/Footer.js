import React from 'react';
import { FooterCon } from './skins';

const Footer = props => {
    return (
        <FooterCon>
            {/* <p>Created By: <b>Govind Singh</b></p>
            <p>Mobile No: 7477221726</p>
            <p>Email: gsingh@mt.iitr.ac.in</p>
            <p>Education: IIT Roorkee</p> */}
            <table>
                <tbody>
                    <tr>
                        <td>Created By:</td>
                        <td><b> Govind Singh</b></td>
                    </tr>
                    <tr>
                        <td>Mobile No:</td>
                        <td><b> 7477221726</b></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><b> gsingh@mt.iitr.ac.in</b></td>
                    </tr>
                    <tr>
                        <td>Education:</td>
                        <td> <b>IIT Roorkee</b></td>
                    </tr>
                </tbody>
            </table>
        </FooterCon>
    );
}

export default Footer;