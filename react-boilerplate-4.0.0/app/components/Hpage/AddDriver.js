import React from 'react';
import { APage } from './skins';

const AddDriver = props => {
    return (
        <APage>
            <form onSubmit={(e) => props.onClick(e)}>
                <label for="driverid">driverid:</label>
                <input id="driverid"/><br/>
                <label for="name">name:</label>
                <input id="name"/><br/>
                <label for="createdat">createdat:</label>
                <input id="createdat"/><br/>
                <label for="dateOfBirth">dateOfBirth:</label>
                <input id="dateOfBirth"/><br/>
                <label for="emailId">emailId:</label>
                <input id="emailId"/><br/>
                <label for="balanceAmount">balanceAmount:</label>
                <input id="balanceAmount"/><br/>
                <label for="bankAccName">bankAccName:</label>
                <input id="bankAccName"/><br/>
                <label for="bankAccNum">bankAccNum:</label>
                <input id="bankAccNum"/><br/>
                <label for="gender">gender:</label>
                <input id="gender"/><br/>
                <label for="phoneNumber">phoneNumber:</label>
                <input id="phoneNumber"/><br/>
                <label for="rating">rating:</label>
                <input id="rating"/><br/>
                <label for="state">state:</label>
                <input id="state"/><br/>
                <label for="status">status:</label>
                <input id="status"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </APage>
    );
}

export default AddDriver;