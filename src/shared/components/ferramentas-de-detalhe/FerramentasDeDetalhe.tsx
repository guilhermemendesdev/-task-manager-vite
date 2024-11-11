import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDeDetalhe {
    textoBotaoNovo?: string

    mostrarBotaoNovo?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoApagar?: boolean
    mostrarBotaoSalvar?: boolean
    mostrarBotaoSalvarEVoltar?: boolean

    aoClicarEmNovo?: () => void
    aoClicarEmVoltar?: () => void
    aoClicarEmApagar?: () => void
    aoClicarEmSalvar?: () => void
    aoClicarEmSalvarEFechar?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhe> = ({
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEVoltar: mostrarBotaoSalvarEVoltar = false,
    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar: aoClicarEmSalvarEVoltar
    
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
           {mostrarBotaoNovo && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<Add/>}
                onClick={aoClicarEmNovo}
                >
                    {textoBotaoNovo}
            </Button>)}
            {mostrarBotaoSalvar && (<Button 
                variant="contained" 
                color="primary" 
                disableElevation 
                startIcon={<Save/>}
                onClick={aoClicarEmSalvar}
                >
                    Salvar
            </Button>)}
            {mostrarBotaoSalvarEVoltar && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<Save/>}
                onClick={aoClicarEmSalvarEVoltar}
                >
                    Salvar e Voltar
            </Button>)}
            {mostrarBotaoApagar && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<Delete/>}
                onClick={aoClicarEmApagar}
                >
                    Apagar
            </Button>)}

            <Divider variant="middle" orientation="vertical"/>
            {mostrarBotaoVoltar && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<ArrowBack/>}
                onClick={aoClicarEmVoltar}
                >
                    Voltar
            </Button>)}
        </Box>
    )
}