import { useNavigate } from "react-router-dom"
import { FerramentasDeDetalhe } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"
import { useState } from "react"
import { Box, Paper, TextField, useTheme, useMediaQuery, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

import { TasksService } from "../../shared/services/api/tasks/TasksService"

export const NovaTask: React.FC = () => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const navigate = useNavigate();
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [responsable, setResponsable] = useState('')

    const handleSave = () => {
        TasksService.create({
            description,
            status,
            responsable
        })
        .then((result) => {
                if(result instanceof Error){
                    console.log(result.message)
                    alert(result.message)
                }else{
                navigate('/tasks')
                }
            })
    }
   
return (
    <LayoutBase 
    titulo="Nova Tarefa"
    barraDeFerramentas={
        <FerramentasDeDetalhe 
        mostrarBotaoSalvar 
        mostrarBotaoVoltar
        aoClicarEmVoltar={() => navigate('/developers')}
        aoClicarEmSalvar={handleSave}
        />
    }
    >
        <Box sx={{m: 1, width: 'auto'}} display='flex' flexDirection={smDown ? 'column' : 'row'} component={Paper}>
            <Box margin={2}>
                <TextField sx={{width: theme.spacing(30)}} id="standard-basic" label="Descrição" variant="standard" onChange={(e) => setDescription(e.target.value)}/>
            </Box>
            <Box margin={2}>
                <TextField sx={{width: theme.spacing(30)}} id="standard-basic" label="Responsável" variant="standard" onChange={(e) => setResponsable(e.target.value)}/>
            </Box>  
            <Box margin={2}>
            <FormControl variant="standard" sx={{width: theme.spacing(30)}}>
                <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Done'}>Done</MenuItem>
                <MenuItem value={'Doing'}>Doing</MenuItem>
                <MenuItem value={'Todo'}>Todo</MenuItem>
                </Select>
            </FormControl>
            </Box>          
        </Box>
    </LayoutBase>
)
}