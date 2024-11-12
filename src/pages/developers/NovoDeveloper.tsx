import { useNavigate, useSearchParams } from "react-router-dom"
import { FerramentasDaListagem, FerramentasDeDetalhe } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"
import { useEffect, useMemo, useState } from "react"
import { DevelopersService, IDeveloper } from "../../shared/services/api/developers/DevelopersService"
import { useDebounce } from "../../shared/hooks"
import { Box, IconButton, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField } from "@mui/material"
import { Enviroment } from "../../shared/environment"
import { Delete} from "@mui/icons-material"

export const NovoDeveloper: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const {debounce} = useDebounce()

    const [rows, setRows] = useState<IDeveloper[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const handleSave = () => {
        setIsLoading(true)
        DevelopersService.create({
            name: name,
            email: email,
            cpf: cpf
        })
        .then((result) => {
                setIsLoading(false)
                if(result instanceof Error){
                    console.log(result.message)
                    alert(result.message)
                }else{
                navigate('/developers')
                }
            })
    }
   
return (
    <LayoutBase 
    titulo="Novo Desenvolvedor"
    barraDeFerramentas={
        <FerramentasDeDetalhe 
        mostrarBotaoSalvar 
        mostrarBotaoVoltar
        aoClicarEmVoltar={() => navigate('/developers')}
        aoClicarEmSalvar={handleSave}
        />
    }
    >
        <Box sx={{m: 1, width: 'auto'}} component={Paper}>
            <TextField id="standard-basic" label="Nome completo" variant="standard" onChange={(e) => setName(e.target.value)}/>
            <TextField id="standard-basic" label="email" variant="standard" onChange={(e) => setEmail(e.target.value)}/>
            <TextField id="standard-basic" label="CPF" variant="standard" onChange={(e) => setCpf(e.target.value)}/>
        </Box>
    </LayoutBase>
)
}