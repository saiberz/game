  var chatRef = new Firebase("https://saiberz.firebaseio.com");
    var myuser = {};
var usuario;

var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
    alert(error);
  } else if (user) {
    // user authenticated with Firebase
    usuario = user;
    var myuser1 = user.id.typeof;
    myuser [user.id] = user;
    chatRef.child("users").child(user.id).set(user);
    console.log(chatRef.child("users").child(user.id));
    
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    console.log(myuser);
    alert("bienvenido "+user.first_name);
    home();
  } else {
    //mylogin();
    
    alert("no esta logeado");
  }
});



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

