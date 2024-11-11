import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import { Box, Button, Divider, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDeDetalhe {
    textoBotaoNovo?: string

    mostrarBotaoSalvar?: boolean
    mostrarBotaoNovo?: boolean
    mostrarBotaoVoltar?: boolean
    mostrarBotaoApagar?: boolean   
    mostrarBotaoSalvarEVoltar?: boolean

    mostrarBotaoSalvarCarregando?: boolean
    mostrarBotaoNovoCarregando?: boolean
    mostrarBotaoVoltarCarregando?: boolean
    mostrarBotaoApagarCarregando?: boolean   
    mostrarBotaoSalvarEVoltarCarregando?: boolean

    aoClicarEmNovo?: () => void
    aoClicarEmVoltar?: () => void
    aoClicarEmApagar?: () => void
    aoClicarEmSalvar?: () => void
    aoClicarEmSalvarEFechar?: () => void
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhe> = ({
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = false,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = false,
    mostrarBotaoSalvar = false,
    mostrarBotaoSalvarEVoltar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEVoltarCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar: aoClicarEmSalvarEVoltar
    
}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button 
                variant="contained" 
                color="primary" 
                disableElevation 
                startIcon={<Save/>}
                onClick={aoClicarEmSalvar}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>Salvar</Typography>                    
            </Button>)}
            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60}/>)}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<Add/>}
                onClick={aoClicarEmNovo}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>{textoBotaoNovo}</Typography>                    
            </Button>)}
            {(mostrarBotaoNovoCarregando && !smDown) && (<Skeleton width={110} height={60}/>)}

            {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown) && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<Save/>}
                onClick={aoClicarEmSalvarEVoltar}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>Salvar e voltar</Typography>                    
            </Button>)}
            {(mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown) && (<Skeleton width={180} height={60}/>)}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<Delete/>}
                onClick={aoClicarEmApagar}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>Apagar</Typography>                    
            </Button>)}
            {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60}/>)}

            {(mostrarBotaoVoltar && 
                (mostrarBotaoNovo || 
                mostrarBotaoApagar || 
                mostrarBotaoSalvar || 
                mostrarBotaoSalvarEVoltar)
            ) && (
                <Divider 
                    variant="middle" 
                    orientation="vertical"
                />
            )}

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button 
                variant="outlined" 
                color="primary" 
                disableElevation 
                startIcon={<ArrowBack/>}
                onClick={aoClicarEmVoltar}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>Voltar</Typography>                    
            </Button>)}
            {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60}/>)}
        </Box>
    )
}