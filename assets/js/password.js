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

  var path= window.location.href.split('#');

  var patname ="" ;

  if (window.location.href.indexOf("#") > (-1)){
    patname = path[1];
  }

  var firebaseRef= firebase.database().ref();


  function sendPassword(){

    if (document.getElementById("signup-email").value!=""){
    
    var userEmail = document.getElementById("signup-email").value;

    firebase.auth().sendPasswordResetEmail(
    userEmail.toString(), actionCodeSettings)
    .then(function() {
      
      console.log("gonderildi");
    })
    .catch(function(error) {
    
      console.log(error);
    });

    }else{

    }
   

    

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

