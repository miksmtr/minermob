  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA--sTmDU0Ld47ahXTgKFH4GsO7ktHqybM",
    authDomain: "minermob-1f709.firebaseapp.com",
    databaseURL: "https://minermob-1f709.firebaseio.com",
    projectId: "minermob-1f709",
    storageBucket: "minermob-1f709.appspot.com",
    messagingSenderId: "352294938656"
  };
  firebase.initializeApp(config);
  var firebaseRef= firebase.database().ref();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      if (document.getElementById("email_field").value==""){


      }else{

       var userEmail = document.getElementById("regemail_field").value;
       var userPass = document.getElementById("regpassword_field").value;
       var userPass2 = document.getElementById("regpassword_field2").value;
       var name = document.getElementById("devName").value;
       createDev(userEmail,user.uid,name,dil());

     }



   } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    //document.getElementById("login_div").style.display = "block";

  }
});


  function login()
  {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

  }



  function googleSignin(){

    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
     'login_hint': 'user@example.com'
   });

    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  createDev(user.email,user.uid,user.displayName,"");

  

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}

function createUser(){


  var userEmail = document.getElementById("regemail_field").value;
  var userPass = document.getElementById("regpassword_field").value;
  var userPass2 = document.getElementById("regpassword_field2").value;
  var name = document.getElementById("devName").value;
  var country = dil();

  if (userPass===userPass2){
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;



  window.alert("Error : " + errorMessage);

  // ...
});

  }else{
     window.alert("Error : " + "password esit degil");
    }


}

function createDev(mail,token,name,country){

  var path= window.location.href.split('#');

  var patname ="" ;

  if (window.location.href.indexOf("#") > (-1)){
    patname = path[1];
  }

  var firebaseRef= firebase.database().ref();
  firebaseRef.child("dev").child(token).child("devName").set(name);
  firebaseRef.child("dev").child(token).child("token").set(token);
  firebaseRef.child("dev").child(token).child("mail").set(mail);
  firebaseRef.child("dev").child(token).child("month").child("rev").set("0");
  firebaseRef.child("dev").child(token).child("month").child("us").set("0");
  firebaseRef.child("dev").child(token).child("lastMonth").child("rev").set("0");
  firebaseRef.child("dev").child(token).child("lastMonth").child("us").set("0");
  firebaseRef.child("dev").child(token).child("walletID").set("");
  firebaseRef.child("dev").child(token).child("country").set(dil());

  if (patname!=""){
      firebaseRef.child("dev").child(token).child("refCode").set(patname);
  }

  window.location.href="dashboard/apps.html"

}

function dil(){
  var dil = (navigator.language || navigator.userLanguage ).substring(0, 2);
  if (dil == "tr"){
    return "tr";
  }
  else if (dil=="en"){
    return "en";
  }
  else{
    return "en";
  }
}

