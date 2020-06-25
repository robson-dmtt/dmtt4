import React from 'react';

import {auth} from '../../firebase'


function Login() {

    
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    //const [pass, setPass] = React.useState('')

    const processar =  (e) => {
        e.preventDefault()

        if(!email.trim()){
            console.log("preencha o email!")
            return
        }
        if(!pass.trim()){
            console.log("preencha a senha!")
            return
        }
        
        logar()
    }

    const logar = React.useCallback( async() => {
        try {
            await auth().signInWithEmailAndPassword(email,pass)
            setEmail('')
            setPass('')

            console.log("usuario logado")
        } catch (error) {
            console.log(error)
        }
    },[email,pass])
    

  return (

    
        <div className="row">
            <form onSubmit={processar}>
                <h3>Acesso Restrito</h3><hr/>
                <div className="col-12">
                    <input type="text"  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="col-12 my-2">
                    <input type="password"  placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-dark">Acessar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;