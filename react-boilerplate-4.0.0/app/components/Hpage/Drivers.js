import React from 'react';
import { APage, HeaderCon, TableCon, TRRow } from './skins';

const Drivers = props => {
    return (
        <APage>
            <HeaderCon clr={"#f4d63"} shadow={true} multiShadow={true} fixedHdr={true} shadowLight={true
            }> <p>Drivers</p> <button onClick={() => props.history.push("/adminpanel/adddriver")}>Add Driver</button></HeaderCon>
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
                        <td>driverId</td>
                        <td>balanceAmount</td>
                        <td>bankAccName</td>
                        <td>bankAccNum</td>
                    </TRRow>
                    {props.driversData && props.driversData.map((data, index) => {
                        return (<tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{data.Name}</td>
                            <td>{data.DOB}</td>
                            <td>{data.Email}</td>
                            <td>{data.Mobile}</td>
                            <td>{data.Gender}</td>
                            <td>{data.Rating}</td>
                            <td>{data.driverid}</td>
                            <td>{data.balanceAmount}</td>
                            <td>{data.bankAccName}</td>
                            <td>{data.bankAccNum}</td>
                        </tr>);
                    })}
                </tbody>
            </TableCon>
            <br></br><br></br>
            <div>
                <p><b>Delete item by entering Sr. No. in given below input. Please input a valid Sr. No.</b></p>
                <input id="dltBox" type="text"/><br/>
                <button id="dltBtn" onClick={() => props.onClick("drivers",props.driversData[document.getElementById('dltBox').value-1]["driverid"])}>Delete Row</button>
            </div>
        </APage>
    );
}

export default Drivers;