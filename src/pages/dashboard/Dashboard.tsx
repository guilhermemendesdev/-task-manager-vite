import { FerramentasDeDetalhe } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"

export const Dashboard = () => {
    return(
        <LayoutBase 
        titulo='Página Inicial' 
        barraDeFerramentas={(
            <FerramentasDeDetalhe mostrarBotaoSalvarEVoltar/>
        )}
        >
            Testando
        </LayoutBase>
    )
}