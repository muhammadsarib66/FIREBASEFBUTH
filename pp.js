const abc = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    console.log('user===>',user)

  })
  .catch((error) => {
    
    console.log('error===>',error.message)
    
  });
}