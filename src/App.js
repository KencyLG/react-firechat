
import {
  db,
  googleAuthProvider,
  firebase
  } from './config/firebase';
  import Button from './components/Button';

function App(){
  const signInWithGoogle = async () => {

    // Coloca el lenguaje de preferencia del dispositivo
    firebase.auth() .useDeviceLanguage();

    //Inicio el procedo de login dentro de un try ... cath
    try{
      await firebase.auth().signInWithPopup(googleAuthProvider);

    } catch (e) {
      console.error(e.message)
    }
  };
return (

<div>
  <Button onClick={signInWithGoogle} > Sing in with Google</Button>
</div>
);

}
export default App;