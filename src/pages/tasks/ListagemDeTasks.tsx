import { useNavigate, useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"
import { useEffect, useMemo, useState } from "react"
import { useDebounce } from "../../shared/hooks"
import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"
import { Enviroment } from "../../shared/environment"
import { ITasks, TasksService } from "../../shared/services/api/tasks/TasksService"

export const ListagemDeTasks: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const {debounce} = useDebounce()

    const [rows, setRows] = useState<ITasks[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const search = useMemo(() => {
        return searchParams.get('search') || ''
    }, [searchParams])
    useEffect(() => {
        setIsLoading(true)
        debounce(() => {
            TasksService.getAll(search)
            .then((result) => {
                setIsLoading(false)
                if(result instanceof Error){
                    alert(result.message)
                }else{
                setRows(result)
                }
            })
        })
    }, [search])

return (
    <LayoutBase 
    titulo="Listagem de Tarefas"
    barraDeFerramentas={
        <FerramentasDaListagem
            textoBotaoNovo="Nova"
            mostrarInputBusca
            textoDaBusca={search}
            aoClicarEmNovo={() => navigate('/tasks/nova')}
            aoMudarTextoDeBusca={texto => setSearchParams({search: texto}, {replace: true})}
        />
    }
    >
        <TableContainer sx={{m: 1, width: 'auto'}} component={Paper} variant="outlined">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>Descrição</TableCell>
                        <TableCell>Responsável</TableCell>
                        <TableCell>Máquina</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                        <TableRow key={row._id}>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>{row.responsable}</TableCell>
                        <TableCell>{row.computer}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
                {(rows.length == 0 && !isLoading) &&(
                    <caption>{Enviroment.LISTAGEM_VAZIA}</caption>
                )}
                <TableFooter>
                    {isLoading && (
                    <TableRow>
                        <TableCell colSpan={3}>
                                <LinearProgress variant="indeterminate"/>
                        </TableCell>
                    </TableRow>
                    )}
                </TableFooter>
            </Table>
        </TableContainer>
    </LayoutBase>
)
}