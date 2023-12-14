import Titles from "./Titles"
import BotonesAcceso from "./BotonesAcceso"
//import viteLogo from '/vite.svg'

export default function Encabezado(){
    return(
        <header className="header-container">
            <section>
                <Titles/>
                <BotonesAcceso/>
            </section>
            <img src="/vite.svg" alt="vite" className="vite-logo1"/>
        </header>
    )
}