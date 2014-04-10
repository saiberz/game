  var Fire = new Firebase("https://saiberz.firebaseio.com");

var usuario;

var auth = new FirebaseSimpleLogin(Fire, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
    alert(error);
  } else if (user) {
    // user authenticated with Firebase
    usuario = user;    

      
    Fire.child("users").child(user.id).set(user);      
      
    /*Fire.child("users").child(user.score).set(0);*/
    //console.log("go: " + user.score);
    /*console.log("this:" + Fire.child("users").child(user.gender));*/
    
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);

    alert("bienvenido "+user.first_name);
    
    home();
  } else {
    alert("no esta logeado");
  }
});


/*
    @return nothing
*/
function mylogin(){

  
auth.login('facebook', {
  rememberMe: false ,
  scope: 'email'//,user_likes,user_relationships,basic_info,user_birthday,user_photos'
});
  
/*auth.login('password', {
  email: useremail,
  password: userpassword
});*/
  
}

function mylogout(){
 auth.logout(); 
  
}

