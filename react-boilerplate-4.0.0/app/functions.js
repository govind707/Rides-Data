const userName = document.getElementById('user');
const addBtn = document.getElementById('addBtn');
console.log(userName);
console.log(addBtn);
const dataBase = firebase.firestore();

addBtn.addEventListener('click', e => {
    console.log("addEventListner invoked");
    // e.preventDefault();
    // dataBase.collection('users').doc("local").set({
    //     Name: userName
    // })
    // .then(() => {console.log("Data Added Successfully");})
    // .catch(error => {console.error(error)});
});