import { useEffect } from "react"

export const Usuarios = () => {

    useEffect(() => {
        //llamado al api
        fetch
        
       
    }, [])
    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                <tr>
                    <th> Avatar</th>
                    <th> Nombre</th>
                    <th> Email</th>
                       
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </>
    )
}
