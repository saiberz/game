  var chatRef = new Firebase("https://saiberz.firebaseio.com");
    var myuser = {};
var miusuario;

var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
    alert(error);
  } else if (user) {
    // user authenticated with Firebase
    miusuario = user;
    var myuser1 = user.id.typeof;
    myuser [user.id] = user;
    chatRef.set(myuser);
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    console.log(myuser);
    alert("bienvenido "+user.first_name);
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

