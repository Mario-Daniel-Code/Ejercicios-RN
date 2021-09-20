interface Persona{
    nombreCompleto: string;
    edad: number;  
    direccion: Direccion //Es un objeto anidado direccion
}

interface Direccion{
    pais: string;
    casaNo: number;
}
export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombreCompleto: 'Mario',
        edad: 22,
        direccion: {
            pais: 'Mexico',
            casaNo: 333

        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
