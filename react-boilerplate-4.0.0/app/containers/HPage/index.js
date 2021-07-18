import React from 'react';
import PageLayout from '../../components/Hpage/PageLayout.js';
import Item from '../../components/Hpage/Item.js';
import Riders from '../../components/Hpage/Riders.js';
import Drivers from '../../components/Hpage/Drivers.js';
import Rides from '../../components/Hpage/Rides.js';
import AddRider from '../../components/Hpage/AddRider.js';
import AddDriver from '../../components/Hpage/AddDriver';
import AddRides from '../../components/Hpage/AddRides.js';
import NotFoundPage from '../NotFoundPage/Loadable';
import { dataBase } from './firebaseConfigs';


class HomePage extends React.PureComponent {
    constructor(props){
        super(props);
        this.routes = this.routes.bind(this);
        this.onClick = this.onClick.bind(this);
        this.addRider = this.addRider.bind(this);
        this.Delete = this.Delete.bind(this);
        this.state = {
            ridersData: [],
            driversData: [],
            ridesData: [],
        }
    }

    componentDidMount() {
        let ridersData = [];
        let driversData = [];
        let ridesData = [];
        dataBase.collection('riders').get()
            .then(snapshot => {
                snapshot.forEach(rider => {
                    rider = rider.data();
                    var obj = {
                        Name: rider.firstName + " " + rider.lastName,
                        riderid: rider.riderid,
                        DOB: rider.dateOfBirth,
                        Email: rider.emailId,
                        Mobile: rider.phoneNumber,
                        Gender: rider.gender,
                        Rating: rider.rating,
                        Home: rider.favouriteLocation.home,
                        Office: rider.favouriteLocation.office,
                        OtherLocation: rider.favouriteLocation.otherfavlocation,
                    }
                    ridersData.push(obj);
                });
            })
            .catch(err => console.error(err));
            this.state["ridersData"] = ridersData;


            dataBase.collection('drivers').get()
            .then(snapshot => {
                snapshot.forEach(driver => {
                    driver = driver.data();
                    var obj = {
                        Name: driver.name,
                        driverid: driver.driverid,
                        DOB: driver.dateOfBirth,
                        Email: driver.emailId,
                        Mobile: driver.phoneNumber,
                        Gender: driver.gender,
                        Rating: driver.rating,
                        driverId: driver.driverid,
                        balanceAmount: driver.balanceAmount,
                        bankAccName: driver.bankAccName,
                        bankAccNum: driver.bankAccNum,
                    }
                    driversData.push(obj);
                });
            })
            .catch(err => console.error(err));
            this.state["driversData"] = driversData;

            dataBase.collection('rides').get()
            .then(snapshot => {
                snapshot.forEach(ride => {
                    ride = ride.data();
                    var obj = {
                        rideid: ride.rideid,
                        driverid: ride.driverid,
                        riderid: ride.riderid,
                        drivername: ride.drivername,
                        ridername: ride.ridername,
                        canceltype: ride.canceltype,
                        destinationlocation: ride.destinationlocation,
                        sourcelocation: ride.sourcelocation,
                        paymentMode: ride.paymentMode,
                        projectRideDistance: ride.projectRideDistance,
                        projectedRideCost: ride.projectedRideCost,
                        riderMobile: ride.riderMobile,
                        rating: ride.rating,
                        driverMobile: ride.driverMobile,
                        status: ride.status,
                    }
                    ridesData.push(obj);
                });
            })
            .catch(err => console.error(err));
            this.state["ridesData"] = ridesData;
    }

    addRides = (e) => {
        const drivername = document.getElementById('drivername').value || "";
        const ridername = document.getElementById('ridername').value || "";
        const driverid = document.getElementById('driverid').value || "";
        const rideid = document.getElementById('rideid').value || "";
        const riderid = document.getElementById('riderid').value || "";
        const createdat = document.getElementById('createdat').value || "";
        const canceltype = document.getElementById('canceltype').value || "";
        const destinationlocation = document.getElementById('destinationlocation').value || "";
        const sourcelocation = document.getElementById('sourcelocation').value || "";
        const paymentMode = document.getElementById('paymentMode').value || "";
        const projectRideDistance = document.getElementById('projectRideDistance').value || "";
        const projectedRideCost = document.getElementById('projectedRideCost').value || "";
        const riderMobile = document.getElementById('riderMobile').value || "";
        const driverMobile = document.getElementById('driverMobile').value || "";
        const rating = document.getElementById('rating').value || "";
        const status = document.getElementById('status').value || "";
        e.preventDefault();
        dataBase.collection('rides').doc(rideid).set({
            rideid: rideid,
            driverid: driverid,
            riderid: riderid,
            drivername: drivername,
            ridername: ridername,
            createdat: createdat,
            canceltype: canceltype,
            destinationlocation: destinationlocation,
            sourcelocation: sourcelocation,
            paymentMode: paymentMode,
            projectRideDistance: projectRideDistance,
            projectedRideCost: projectedRideCost,
            riderMobile: riderMobile,
            rating: rating,
            driverMobile: driverMobile,
            status: status,
        })
        .then(() => {console.log("Data Added Successfully");})
        .catch(error => {console.error(error)});

        this.props.history.replace("/adminpanel/rides");
    }

    addDriver = (e) => {
        const userName = document.getElementById('name').value || "";
        const driverid = document.getElementById('driverid').value || "";
        const createdat = document.getElementById('createdat').value || "";
        const dateOfBirth = document.getElementById('dateOfBirth').value || "";
        const emailId = document.getElementById('emailId').value || "";
        const balanceAmount = document.getElementById('balanceAmount').value || "";
        const bankAccName = document.getElementById('bankAccName').value || "";
        const bankAccNum = document.getElementById('bankAccNum').value || "";
        const gender = document.getElementById('gender').value || "";
        const phoneNumber = document.getElementById('phoneNumber').value || "";
        const rating = document.getElementById('rating').value || "";
        const state = document.getElementById('state').value || "";
        const status = document.getElementById('status').value || "";
        e.preventDefault();
        dataBase.collection('drivers').doc(driverid).set({
            driverid: driverid,
            name: userName,
            createdat: createdat,
            dateOfBirth: dateOfBirth,
            emailId: emailId,
            balanceAmount: balanceAmount,
            bankAccName: bankAccName,
            gender: gender,
            bankAccNum: bankAccNum,
            phoneNumber: phoneNumber,
            rating: rating,
            state: state,
            status: status,
        })
        .then(() => {console.log("Data Added Successfully");})
        .catch(error => {console.error(error)});

        this.props.history.replace("/adminpanel/drivers");
    }

    addRider = (e) => {
        console.log("event clicked:");
        const userName = document.getElementById('name').value || "";
        const riderid = document.getElementById('riderid').value || "";
        const createdat = document.getElementById('createdat').value || "";
        const dateOfBirth = document.getElementById('dateOfBirth').value || "";
        const emailId = document.getElementById('emailId').value || "";
        const home = document.getElementById('home').value || "";
        const office = document.getElementById('office').value || "";
        const otherfavlocation = document.getElementById('otherfavlocation').value || "";
        const fcmToken = document.getElementById('fcmToken').value || "";
        const firstName = document.getElementById('firstName').value || "";
        const gender = document.getElementById('gender').value || "";
        const lastName = document.getElementById('lastName').value || "";
        const paymentPreference = document.getElementById('paymentPreference').value || "";
        const phoneNumber = document.getElementById('phoneNumber').value || "";
        const picture = document.getElementById('picture').value || "";
        const rating = document.getElementById('rating').value || "";
        const referralMoney = document.getElementById('referralMoney').value || "";
        const referredBy = document.getElementById('referredBy').value || "";
        const rideHistory = document.getElementById('rideHistory').value || "";
        const soloRideHistoryid = document.getElementById('soloRideHistory-id').value || "";
        const soloRideHistorycost = document.getElementById('soloRideHistory-cost').value || "";
        const soloRideHistoryrequestDestinationEnglish = document.getElementById('soloRideHistory-requestDestinationEnglish').value || "";
        const soloRideHistoryrequestSourceEnglish = document.getElementById('soloRideHistory-requestSourceEnglish').value || "";
        const soloRideHistorypaymentMode = document.getElementById('soloRideHistory-paymentMode').value || "";
        const soloRideHistoryrideId = document.getElementById('soloRideHistory-rideId').value || "";
        const soloRideHistoryseats = document.getElementById('soloRideHistory-seats').value || "";
        const soloRideHistorystartTime = document.getElementById('soloRideHistory-startTime').value || "";
        const soloRideHistorystatus = document.getElementById('soloRideHistory-status').value || "";
        const state = document.getElementById('state').value || "";
        const status = document.getElementById('status').value || "";
        const walletId = document.getElementById('walletId').value || "";
        e.preventDefault();
        dataBase.collection('riders').doc(riderid).set({
            riderid: riderid,
            name: userName,
            createdat: createdat,
            dateOfBirth: dateOfBirth,
            emailId: emailId,
            favouriteLocation: {
                home: home,
                office: office,
                otherfavlocation: otherfavlocation,
            },
            fcmToken: fcmToken,
            firstName: firstName,
            gender: gender,
            lastName: lastName,
            paymentPreference: paymentPreference,
            phoneNumber: phoneNumber,
            picture: picture,
            rating: rating,
            referralMoney: referralMoney,
            referredBy: referredBy,
            rideHistory: rideHistory,
            soloRideHistory: {
                [soloRideHistoryid]: {
                    cost: soloRideHistorycost,
                    paymentMode: soloRideHistorypaymentMode,
                    requestDestinationEnglish: soloRideHistoryrequestDestinationEnglish,
                    requestSourceEnglish: soloRideHistoryrequestSourceEnglish,
                    rideId: soloRideHistoryrideId,
                    seats: soloRideHistoryseats,
                    startTime: soloRideHistorystartTime,
                    status: soloRideHistorystatus,
                }
            },
            state: state,
            status: status,
            walletId: walletId,
        })
        .then(() => {console.log("Data Added Successfully");})
        .catch(error => {console.error(error)});

        this.props.history.replace("/adminpanel/riders")
    }

    Delete(col, id){
        if (col === "rides"){
            dataBase.collection('rides').doc(id).delete();
        } else if (col === "drivers"){
            dataBase.collection('drivers').doc(id).delete();
        } else if (col === "riders"){
            dataBase.collection('riders').doc(id).delete();
        }
        this.props.history.replace("/adminpanel/homepage");
    }

    onClick(item) {
        const {
            history: {
                push,
            }
        } = this.props;
        if(item === "Riders"){
            push("/adminpanel/riders");
        } else if(item === "Drivers"){
            push("/adminpanel/drivers")
        } else if(item === "Rides"){
            push("/adminpanel/rides")
        }
    }

    routes = () => {
        const {
            location: {
                pathname: path,
            }
        } = this.props;
        const items = ["Riders", "Drivers", "Rides"];
        const ridersData = this.state.ridersData;
        const driversData = this.state.driversData;
        const ridesData = this.state.ridesData;
        switch(path){
            case "/adminpanel/homepage":
                return <PageLayout>
                {items.map(item => <Item key={item} Name={item} onClick={this.onClick}></Item>)}
                </PageLayout>
                break;
            case "/adminpanel/riders":
                return <Riders ridersData={ridersData} onClick={this.Delete} {...this.props}></Riders>
                break;
            case "/adminpanel/drivers":
                return <Drivers driversData={driversData} onClick={this.Delete} {...this.props}></Drivers>
                break;
            case "/adminpanel/rides":
                return <Rides ridesData={ridesData} onClick={this.Delete} {...this.props}></Rides>
                break;
            case "/adminpanel/addrider":
                return <AddRider onClick={this.addRider} {...this.props}></AddRider>
                break;
            case "/adminpanel/adddriver":
                return <AddDriver onClick={this.addDriver} {...this.props}></AddDriver>
                break;
            case "/adminpanel/addrides":
                return <AddRides onClick={this.addRides} {...this.props}></AddRides>
                break;
            default:
                <NotFoundPage></NotFoundPage>
                break;

        }
    }
    render() {
        return(
            <div>{this.routes()}</div>
        );
    }
}

export default HomePage;