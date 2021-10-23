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
