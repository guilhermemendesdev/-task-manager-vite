import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"

export const Dashboard = () => {
    return(
        <LayoutBase 
        titulo='Página Inicial' 
        barraDeFerramentas={(
            <FerramentasDaListagem
            mostrarInputBusca
            textoBotaoNovo="Nova"
            />
        )}
        >
            Testando
        </LayoutBase>
    )
}