import React from 'react';
import { APage, HeaderCon, TableCon, TRRow } from './skins';

const Riders = props => {
    console.log("props",props);
    return (
        <APage>
            <HeaderCon clr={"#f4d63"} shadow={true} multiShadow={true} fixedHdr={true} shadowLight={true
            }> <p>Riders</p> <button onClick={() => props.history.push("/adminpanel/addrider")}>Add Rider</button></HeaderCon>
            <TableCon>
                <tbody>
                    <TRRow>
                        <td>Sr.No.</td>
                        <td>Name</td>
                        <td>Date Of Birth</td>
                        <td>Email</td>
                        <td>Mobile No.</td>
                        <td>Gender</td>
                        <td>Rating</td>
                        <td>Home</td>
                        <td>Office</td>
                        <td>Other Fav Location</td>
                    </TRRow>
                    {props.ridersData && props.ridersData.map((data, index) => {
                        return (<tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{data.Name}</td>
                            <td>{data.DOB}</td>
                            <td>{data.Email}</td>
                            <td>{data.Mobile}</td>
                            <td>{data.Gender}</td>
                            <td>{data.Rating}</td>
                            <td>{data.Home}</td>
                            <td>{data.Office}</td>
                            <td>{data.OtherLocation}</td>
                        </tr>);
                    })}
                </tbody>
            </TableCon>
            <br></br><br></br>
            <div>
                <p><b>Delete item by entering Sr. No. in given below input. Please input a valid Sr. No.</b></p>
                <input id="dltBox" type="text"/><br/>
                <button id="dltBtn" onClick={() => props.onClick("riders",props.ridersData[document.getElementById('dltBox').value-1]["riderid"])}>Delete Row</button>
            </div>
        </APage>
    );
}

export default Riders;