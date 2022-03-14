
const Err = ({children}) => {

  //El children es una palabra reservada la cual va a tener todo lo que le pases al componente ppuede traer todo
  //tambien se manda a llamar de forma distinta, en formulario está la forma de llamarlo
  return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg">
            {children}
        </div>
  )
}

export default Err