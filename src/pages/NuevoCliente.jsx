import { useNavigate, Form } from "react-router-dom"
import Formulario from "../components/Formulario.jsx";

export async function action({request}){
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)
    console.log(datos)

    return ("ff")
}
function NuevoCliente() {
    const navigate = useNavigate()
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
                <Form
                    method="POST"

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