import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario.jsx";
import Error from "../components/Error.jsx";
import { agregarCliente } from "../data/clientes.jsx";

export async function action({request}){
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    //console.log(datos)
    const email = formData.get('email')

    //validacion
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
        errores.push("El email no es valido")
    }

    //Retornar errores
    if(Object.keys(errores).length){
        //console.log('si hay errores')
        //console.log(Object.keys(errores))
        return(errores)
    }

    await agregarCliente(datos)

    return redirect('/')
}
function NuevoCliente() {
    const navigate = useNavigate()
    const errores = useActionData()
    //console.log(errores)
    return(
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>
            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={()=>navigate('/')}
                >Volver</button>
            </div>
            <div className="bg-white shadow mt-20 rounded-md md:w-3/4 mx-auto px-5 py-10">
                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form
                    method="POST"
                    noValidate
                >
                    <Formulario />
                     <input
                        type="submit"
                        className="mt-5 w-full rounded-md bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Registar cliente"
                    />
                </Form>
            </div>

        </>
    )
}

export default NuevoCliente