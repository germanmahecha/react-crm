import { obtenerCliente } from "../data/clientes.js";
export async function loader({params}){
    console.log(`params`, params)
    const cliente = await obtenerCliente(params.clientId)
    if(Object.values(cliente).length === 0){
        //Detine la ejecucion del codigo y muestra el error
        throw new Response ('',{
            status: 404,
            statusText: 'No hay resultados'
        })

    }
    console.log(cliente)
}
function EditarCliente() {
    return (
        <h1>Editar cliente</h1>
    )
}

export default EditarCliente