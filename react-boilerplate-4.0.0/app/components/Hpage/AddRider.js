import React from 'react';
import { APage } from './skins';

const AddRider = props => {
    return (
        <APage>
            <form onSubmit={(e) => props.onClick(e)}>
                <label for="riderid">riderid:</label>
                <input id="riderid"/><br/>
                <label for="name">name:</label>
                <input id="name"/><br/>
                <label for="createdat">createdat:</label>
                <input id="createdat"/><br/>
                <label for="dateOfBirth">dateOfBirth:</label>
                <input id="dateOfBirth"/><br/>
                <label for="emailId">emailId:</label>
                <input id="emailId"/><br/>
                <label for="home">home:</label>
                <input id="home"/><br/>
                <label for="office">office:</label>
                <input id="office"/><br/>
                <label for="otherfavlocation">otherfavlocation:</label>
                <input id="otherfavlocation"/><br/>
                <label for="fcmToken">fcmToken:</label>
                <input id="fcmToken"/><br/>
                <label for="firstName">firstName:</label>
                <input id="firstName"/><br/>
                <label for="gender">gender:</label>
                <input id="gender"/><br/>
                <label for="lastName">lastName:</label>
                <input id="lastName"/><br/>
                <label for="paymentPreference">paymentPreference:</label>
                <input id="paymentPreference"/><br/>
                <label for="phoneNumber">phoneNumber:</label>
                <input id="phoneNumber"/><br/>
                <label for="picture">picture:</label>
                <input id="picture"/><br/>
                <label for="rating">rating:</label>
                <input id="rating"/><br/>
                <label for="referralMoney">referralMoney:</label>
                <input id="referralMoney"/><br/>
                <label for="referredBy">referredBy:</label>
                <input id="referredBy"/><br/>
                <label for="rideHistory">rideHistory:</label>
                <input id="rideHistory"/><br/>
                <label for="soloRideHistory-id">soloRideHistory-id:</label>
                <input id="soloRideHistory-id"/><br/>
                <label for="soloRideHistory-cost">soloRideHistory-cost:</label>
                <input id="soloRideHistory-cost"/><br/>
                <label for="soloRideHistory-paymentMode">soloRideHistory-paymentMode:</label>
                <input id="soloRideHistory-paymentMode"/><br/>
                <label for="soloRideHistory-requestDestinationEnglish">soloRideHistory-requestDestinationEnglish:</label>
                <input id="soloRideHistory-requestDestinationEnglish"/><br/>
                <label for="soloRideHistory-requestSourceEnglish">soloRideHistory-requestSourceEnglish:</label>
                <input id="soloRideHistory-requestSourceEnglish"/><br/>
                <label for="soloRideHistory-rideId">soloRideHistory-rideId:</label>
                <input id="soloRideHistory-rideId"/><br/>
                <label for="soloRideHistory-seats">soloRideHistory-seats:</label>
                <input id="soloRideHistory-seats"/><br/>
                <label for="soloRideHistory-startTime">soloRideHistory-startTime:</label>
                <input id="soloRideHistory-startTime"/><br/>
                <label for="soloRideHistory-status">soloRideHistory-status:</label>
                <input id="soloRideHistory-status"/><br/>
                <label for="state">state:</label>
                <input id="state"/><br/>
                <label for="status">status:</label>
                <input id="status"/><br/>
                <label for="walletId">walletId:</label>
                <input id="walletId"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </APage>
    );
}

export default AddRider;