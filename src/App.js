
import Button from './components/Button';
import {signInWithGoogle, signOut} from './login';
import {useAuthState} from './hooks'
import { firebase } from './config/firebase';
  import Channel from './components/Channel';

  function App(){
    const {user, initializing} = useAuthState(firebase.auth());
  
    const renderLoading = ()=> {
      if (initializing){
        return <div>
          <h1>Cargando...</h1>
        </div>
      }
    }
    return(
      <div>
        {renderLoading()}
        {
          user ? (
            
            <>
            
            <center>
            
            <header><h4>Firechat-MaximeGroup</h4><Button onClick={signOut}> Logout Google</Button></header>
            <br></br><br></br><br></br>
            <div class="contenedor">
            <br></br><br></br><br></br>
            
            <h4 class="ben">Bienvenidos al Chat!</h4>
            <Channel user={user}/>
            <hr></hr>

            <br></br><br></br><br></br>
            </div>
            </center>
            <br></br>
            
            </>
            
            ):<div class="inicio"><Button onClick={signInWithGoogle} > Sign in with Google</Button></div>
            
          }
          <br></br>
      </div>
    );
  }
  export default App;