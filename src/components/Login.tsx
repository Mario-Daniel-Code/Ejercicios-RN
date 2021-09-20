import { useReducer, useEffect } from "react";
import { type } from 'os';

interface AuthState{ //creamos una interfaz para colocarsela al initialState y colocar el tivo de valor
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = { //constante = a un objeto literal
validando: true,                    
token: null,
username: '',
nombre: ''
}

type LoginPayload= {
    username: string;
    nombre: string;
}

type AuthAction = 
|{type: 'logout'} //| tuberia al inicio
|{type: 'login', payload: LoginPayload};
                    


//el state va hacer de tipo AuthState
const authReducer = ( state : AuthState, action : AuthAction ): AuthState => { //la accion es el que modifica el state

switch (action.type) { //voy a evaluar el tipo de la accion
    case 'logout':
        
        return{
            validando: false,
            token: null,
            nombre: '',
            username: ''
        }
        case 'login':
        const {nombre, username} = action.payload; //desestructuracion del action payload 
        return{
            validando: false,
            token: 'ABC',
            nombre,
            username
        }
        default:
            return state;
}

}

export const Login = () => { //desestrcturamos en token y el nombre
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState); //nos regresa state y dispatch estado y funcion para disparar acciones 
    //para disparar la ccion necesito un useEffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logout'}) //va a disparar la ccion del type
        }, 1500);
        
    }, [])

    const login = () =>{
        dispatch({ //disparamos la ccion de login con su payload y traiga el nombre y el username 
            type: 'login', 
            payload: {
                nombre: 'Mario',
                username: 'stric'
            }
        })
    }

    const logout = () =>{
        dispatch({ type: 'logout' })
    }

    if(validando){
        return(
            <>
            <h3>Login</h3>
            <div className="alert alert-info">
                validando....
            </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            
            {
                (token)
                ?<div className="alert alert-success">Autenticado como: {nombre}</div> //si tenemos algo
                :<div className="alert alert-danger">No autenticado</div>// si no null
            }
           
            {
                (token)//si el token existe
                ? ( //entonces que es lo que quiero hacer
                    <button className="btn btn-danger"
                    onClick = {logout}
                    >
                        Logout
                    </button> 
                  ) 
                : (
                    <button className="btn btn-primary"
                    onClick={login}
                    >
                    Login
                    </button>
                  )
            }
             
        </>
    )
}
