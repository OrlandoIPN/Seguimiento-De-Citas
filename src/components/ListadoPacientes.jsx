
import Paciente from './Paciente'

const ListadoPacientes = ({ Pacientes , setPaciente,eliminarPaciente}) => {

  console.log(Pacientes && Pacientes.length); //Esto retorna 0 si está vacio
  console.log(Pacientes)
 


  return (
    // md:h-screen elimina el scroll por defecto, quitalo para que veas que pasa
    <div className="md:w-1/2 lg:w-3/5 md:h-screen hover:overflow-y-scroll ">

      {Pacientes && Pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold text-xl">Citas</span>
          </p>
          {/* 
      {Pacientes.map((paciente) =>{
        return (
          <Paciente /> 
        )
      })}    ESTA ES LA FORMA TRADICIONAL DE HACER UN MAP*/}
          {Pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
          {/* ESTA DE ARRIBA ES LA FORMA RAPIDA YA QUE HACE IMPLICITO AL RETURN */}

        </>
      ) : (<>
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando Pacientes {' '}
            <span className="text-indigo-600 font-bold text-xl">y apareceran en este lugar</span>
          </p>
      </>)} 

      {/* (<></>) es un return implicito */}


    </div>
  )
}

export default ListadoPacientes