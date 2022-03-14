import { useEffect } from "react"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {Nombre, Propietario, Email, Alta, Sintomas, id} = paciente

    const handleEliminar = () =>{
      const respuesta = confirm('Deseas Eliminar este paciente')

      if (respuesta) {
        eliminarPaciente(id)
      }
      
    }

    // console.log(paciente)
    useEffect(() => {
      console.log('el componente esta listo')
  }, []) //si las paso vacias significa que solo se va a ejecutar una vez
  

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
      <span className="font-normal normal-case">{Nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
      <span className="font-normal normal-case">{Propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
      <span className="font-normal normal-case">{Email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
      <span className="font-normal normal-case">{Alta}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
      <span className="font-normal normal-case">{Sintomas}</span>
    </p>

    <div className="flex justify-between mt-10">
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={() => setPaciente(paciente)} 
        //debe de ser un arrow function por que le vamos a pasar un parametro, arguMento es para que tome el argumento
        // si no lo agregamos, se envia automaticamente al enviar el campo por que mandas a llamar a la funcion
        //si lo envias en arrow function se espera hasta que des elboton agregar para pasar el argumento
        //es como llamar a una funcion setPaciente()
        >

            Editar

            </button>
        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}>
            Eliminar
            </button>
    </div>

  </div>
  )
}

export default Paciente