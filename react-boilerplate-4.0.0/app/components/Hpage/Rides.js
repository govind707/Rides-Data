import React from 'react';
import { APage, HeaderCon, TableCon, TRRow } from './skins';

const Rides = props => {
    console.log("props at rides.js:",props);
    return (
        <APage>
        <HeaderCon clr={"#f4d63"} shadow={true} multiShadow={true} fixedHdr={true} shadowLight={true
        }> <p>Rides</p> <button onClick={() => props.history.push("/adminpanel/addrides")}>Add Rides</button></HeaderCon>
        <TableCon>
            <tbody>
                <TRRow>
                    <td>Sr.No.</td>
                    <td>Rideid</td>
                    <td>Driverid</td>
                    <td>Riderid</td>
                    <td>Drivername</td>
                    <td>Ridername</td>
                    <td>Rating</td>
                    <td>CancelType</td>
                    <td>DestinationLocation</td>
                    <td>SourceLocation</td>
                    <td>PaymentMode</td>
                    <td>ProjectRideDistance</td>
                    <td>ProjectedRideCost</td>
                    <td>RiderMobile</td>
                    <td>DriverMobile</td>
                    <td>Status</td>
                </TRRow>
                {props.ridesData && props.ridesData.map((data, index) => {
                    return (<tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{data.rideid}</td>
                        <td>{data.driverid}</td>
                        <td>{data.riderid}</td>
                        <td>{data.drivername}</td>
                        <td>{data.ridername}</td>
                        <td>{data.Rating}</td>
                        <td>{data.canceltype}</td>
                        <td>{data.destinationlocation}</td>
                        <td>{data.sourcelocation}</td>
                        <td>{data.paymentMode}</td>
                        <td>{data.projectRideDistance}</td>
                        <td>{data.projectedRideCost}</td>
                        <td>{data.riderMobile}</td>
                        <td>{data.driverMobile}</td>
                        <td>{data.status}</td>
                    </tr>);
                })}
            </tbody>
        </TableCon>
        <br></br><br></br>
        <div>
            <p><b>Delete item by entering Sr. No. in given below input. Please input a valid Sr. No.</b></p>
            <input id="dltBox" type="text"/><br/>
            <button id="dltBtn" onClick={() => props.onClick("rides",props.ridesData[document.getElementById('dltBox').value-1]["rideid"])}>Delete Row</button>
        </div>
    </APage>
    );
}

export default Rides;