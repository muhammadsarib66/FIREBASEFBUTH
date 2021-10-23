const abc = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    console.log('user===>',user)

   console.log('user===>',user.displayName)
  })
  .catch((error) => {
    
    
  });
}
function google(){
var provider1 = new firebase.auth.GoogleAuthProvider();

firebase.auth()
  .signInWithPopup(provider1)
  .then((result) => {
    var userr = result.userr
    console.log('result===>',userr.email)
  }).catch((error) => {
    console.log(error.message)
  });
}
