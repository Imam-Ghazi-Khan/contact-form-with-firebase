const firebaseConfig = {
  apiKey: "AIzaSyChRRAyDK2NjSihz4ehUoLIdaTnAroKUVc",
  authDomain: "contactform-9da07.firebaseapp.com",
  databaseURL: "https://contactform-9da07-default-rtdb.firebaseio.com",
  projectId: "contactform-9da07",
  storageBucket: "contactform-9da07.appspot.com",
  messagingSenderId: "197855930529",
  appId: "1:197855930529:web:e8acff3942cc4403d3e8e0"
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

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

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
