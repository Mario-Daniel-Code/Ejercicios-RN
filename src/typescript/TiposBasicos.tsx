
export const TiposBasicos = () => { //mi componente 

const nombre: string = 'Mario';
const edad: number = 23; //Es una constante que no va a cambiar/ pero si colocas un | number 
const estaActivo :boolean = false;

const poderes: string[] = []; //'velocidad','volar','Respiarar bajo en agua'
//const poderes: (string|number)[] = []; //'velocidad','volar','Respiarar bajo en agua'
poderes.push('hola');
    return (
        <>
          <h3>Tipos Basicos</h3>  
          {nombre}, {edad}, {(estaActivo) ? 'Activo': 'Incativo'}
          <hr/>
          {poderes.join(', ')}
        </>
    )
}
