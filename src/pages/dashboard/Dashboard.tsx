import { BarraDeFerramentas } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"

export const Dashboard = () => {
    return(
        <LayoutBase 
        titulo='Página Inicial' 
        barraDeFerramentas={(
            <BarraDeFerramentas
            mostrarInputBusca
            />
        )}
        >
            Testando
        </LayoutBase>
    )
}