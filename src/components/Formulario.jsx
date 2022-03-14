import { useEffect, useState } from "react"
import Err from "./Err"

const Formulario = ({ Pacientes, setPacientes, paciente, setPaciente }) => {

    const [Nombre, setNombre] = useState('')
    const [Propietario, setPropietario] = useState('')
    const [Email, setEmail] = useState('')
    const [Alta, setAlta] = useState('')
    const [Sintomas, setSintomas] = useState('')

    const [Error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.Nombre)
            setPropietario(paciente.Propietario)
            setEmail(paciente.Email)
            setAlta(paciente.Alta)
            setSintomas(paciente.Sintomas)
        }//con esto compruebas siun objeto está vacio
    }, [paciente]); //Se ejecuta cuando paciente cambia


    const generarId = () => { //genera id aleatorio
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([Nombre, Propietario, Email, Alta, Sintomas].includes('')) {
            console.log('Hay almenos un campo Vacio')
            setError(true);
            return;
        }
        setError(false);

        //Objeto de Paciente

        const objetoPaciente = {
            Nombre,
            Propietario,
            Email,
            Alta,
            Sintomas,

        }

        if (paciente.id) {
            //Editando el Registro
            objetoPaciente.id = paciente.id
            // console.log(objetoPaciente)
            // console.log(paciente)
            const pacientesActualizados = Pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {

            //Nuevo Registro
            objetoPaciente.id = generarId();
            setPacientes([...Pacientes, objetoPaciente])
            //tomo lo que hay en pacientes(por buena práctica) le aplico
            // el spred operator, genero una copia y la asigno a objeto pacientes
            //esto me va a generar un nuevo arreglo
        }



        //Reiniciar el form
        setNombre('')
        setError('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
                onSubmit={handleSubmit}
            >
                {Error &&

                    <Err>
                        <p>Todos los Campos son Obligatorios</p>
                    </Err>}
                {/* Valida si error es True si si, entonces renderiza error */}

                <div className="mb-5">
                    <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input id='mascota' type="text" placeholder='Nombre de la Mascota' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">
                        Nombre propietario
                    </label>
                    <input id='propietario' type="text" placeholder='Nombre de la propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={Propietario} onChange={(e) => setPropietario(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor='email' className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input id='email' type="email" placeholder='Email Contancto Propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input id='alta' type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md  " value={Alta} onChange={(e) => setAlta(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder='Describe los Sintomas' value={Sintomas} onChange={(e) => setSintomas(e.target.value)} />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>
        </div>
    )
}

export default Formulario