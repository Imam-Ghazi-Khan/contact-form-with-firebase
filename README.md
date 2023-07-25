# contact-form-with-firebase
A simple web project to understand the integration of firebase with web for data storage

Steps:
Contact form

1.	Login to firebase account
2.	Go to console
3.	Create project
4.	Click on real time database
5.	Use locked mode for security
6.	Click rules and set write to true
7.	Do the same for Firestore database
8.	This will create a cloud firestore for your database
9.	Chance allow read,write if false; 
To
allow read : if false;
allow write: if true;
10.	Go to home and click on </> web
11.	Name the app
12.	In html, add the cdnjs link of firebase in script tag:
https://cdnjs.cloudflare.com/ajax/libs/firebase/10.1.0/firebase-app.js
13.	Copy the Use a <script> tag part
14.	Paste firebase config part in mail.js
15.	Initialize app by :
firebase.initializeApp(firebaseConfig);
16.	Reference your database:
var contactFormDB = firebase.database().ref(‘contactForm’)
17.	Add event listener to your form:
document.getElementById("contactForm").addEventListener("submit", submitForm);
18.	Implement the submitForm callback function:
function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);
  //   enable alert
  document.querySelector(".alert").style.display = "block";
  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  //   reset the form
  document.getElementById("contactForm").reset();
}

19.	Define the saveMessages function that will save the data to the firebase:
const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};
20.	Define the getElementVal function used earlier:
const getElementVal = (id) => {
  return document.getElementById(id).value;
};



https://github.com/igk1710/contact-form-with-firebase/assets/140341197/415c0b38-95c9-439f-8469-e2d687e4a535

