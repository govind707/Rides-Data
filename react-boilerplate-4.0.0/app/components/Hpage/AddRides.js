import React from 'react';
import { APage } from './skins';

const AddRides = props => {
    return (
        <APage>
            <form onSubmit={(e) => props.onClick(e)}>
                <label for="rideid">rideid:</label>
                <input id="rideid"/><br/>
                <label for="driverid">driverid:</label>
                <input id="driverid"/><br/>
                <label for="riderid">riderid:</label>
                <input id="riderid"/><br/>
                <label for="drivername">drivername:</label>
                <input id="drivername"/><br/>
                <label for="ridername">ridername:</label>
                <input id="ridername"/><br/>
                <label for="createdat">createdat:</label>
                <input id="createdat"/><br/>
                <label for="canceltype">canceltype:</label>
                <input id="canceltype"/><br/>
                <label for="destinationlocation">destinationlocation:</label>
                <input id="destinationlocation"/><br/>
                <label for="sourcelocation">sourcelocation:</label>
                <input id="sourcelocation"/><br/>
                <label for="paymentMode">paymentMode:</label>
                <input id="paymentMode"/><br/>
                <label for="projectRideDistance">projectRideDistance:</label>
                <input id="projectRideDistance"/><br/>
                <label for="riderMobile">riderMobile:</label>
                <input id="riderMobile"/><br/>
                <label for="driverMobile">driverMobile:</label>
                <input id="driverMobile"/><br/>
                <label for="rating">rating:</label>
                <input id="rating"/><br/>
                <label for="projectedRideCost">projectedRideCost:</label>
                <input id="projectedRideCost"/><br/>
                <label for="status">status:</label>
                <input id="status"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </APage>
    );
}

export default AddRides;