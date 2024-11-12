import { useNavigate, useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"
import { useEffect, useMemo, useState } from "react"
import { DevelopersService, IDeveloper } from "../../shared/services/api/developers/DevelopersService"
import { useDebounce } from "../../shared/hooks"
import { IconButton, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"
import { Enviroment } from "../../shared/environment"
import { Delete} from "@mui/icons-material"

export const ListagemDeDevelopers: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const {debounce} = useDebounce()

    const [rows, setRows] = useState<IDeveloper[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const search = useMemo(() => {
        return searchParams.get('search') || ''
    }, [searchParams])
    useEffect(() => {
        setIsLoading(true)
        debounce(() => {
            DevelopersService.getAll(search)
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

    const handleDelete = (id: string) => {
        if(confirm('Realmente deseja apagar?')){
            DevelopersService.inactiveById(id)
            .then(result => {
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    setRows(oldRows => {
                        return [
                            ...oldRows.filter(oldRow => oldRow._id !== id)
                        ]
                    })
                    alert('Registro apagado com sucesso!')
                }
            })
        }
    }

return (
    <LayoutBase 
    titulo="Listagem de desenvolvedores"
    barraDeFerramentas={
        <FerramentasDaListagem
            textoBotaoNovo="Novo"
            mostrarInputBusca
            textoDaBusca={search}
            aoClicarEmNovo={() => navigate('/developers/novo')}
            aoMudarTextoDeBusca={texto => setSearchParams({search: texto}, {replace: true})}
        />
    }
    >
        <TableContainer sx={{m: 1, width: 'auto'}} component={Paper} variant="outlined">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ações</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                        <TableRow key={row._id}>
                        <TableCell>
                            <IconButton size="small" onClick={() => handleDelete(row._id)}>
                                <Delete />
                            </IconButton>
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
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