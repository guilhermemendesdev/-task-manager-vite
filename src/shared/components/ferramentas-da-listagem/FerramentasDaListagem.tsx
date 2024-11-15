/* eslint-disable react/prop-types */
import { Add } from "@mui/icons-material"
import { Box, Button, Paper, TextField, useTheme } from "@mui/material"
import { Enviroment } from "../../environment"

interface IFerramentasDaListagemProps {
    textoDaBusca?: string
    mostrarInputBusca?: boolean
    aoMudarTextoDeBusca?: (novoTexto: string) => void
    textoBotaoNovo?: string
    mostrarBotaoNovo?: boolean
    aoClicarEmNovo?: () => void
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca = '', 
    mostrarInputBusca = false, 
    aoMudarTextoDeBusca,
    aoClicarEmNovo,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true
}) => {
    const theme = useTheme()
    return (
        <Box 
            height={theme.spacing(5)} 
            marginX={1} 
            padding={1} 
            paddingX={2} 
            display='flex' 
            gap={1} 
            alignItems='center' 
            component={Paper}
        >
        {mostrarInputBusca && (    <TextField 
            size="small" 
            value={textoDaBusca} 
            onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)} 
            placeholder={Enviroment.INPUT_DE_BUSCA}
            />)}

        <Box flex={1} display='flex' justifyContent='end'>
            {mostrarBotaoNovo && (
                <Button 
                variant="contained" 
                color="primary" 
                disableElevation 
                onClick={aoClicarEmNovo} 
                endIcon={<Add/>}
                >
                    {textoBotaoNovo}
                </Button>)}
        </Box>
            
        </Box>
    )
}