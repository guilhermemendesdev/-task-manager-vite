import {Route, Routes, Navigate} from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'
import { Home, People, Task } from '@mui/icons-material'
import { Dashboard, ListagemDeDevelopers } from '../pages'
import { NovoDeveloper } from '../pages/developers/NovoDeveloper'
import { ListagemDeTasks } from '../pages/tasks/ListagemDeTasks'
import { NovaTask } from '../pages/tasks/NovaTask'

export const AppRoutes = () => {
    const {setDrawerOptions} = useDrawerContext()

    useEffect(() => {
        setDrawerOptions([
            {
                path: 'home',
                icon: <Home/>,
                label: 'Página Inicial'
            },
            {
                path: 'developers',
                icon: <People/>,
                label: 'Developers'
            },
            {
                path: 'tasks',
                icon: <Task/>,
                label: 'Tarefas'
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/developers' element={<ListagemDeDevelopers/>}/>
            <Route path='/developers/novo' element={<NovoDeveloper/>}/>

            <Route path='/tasks' element={<ListagemDeTasks/>}/>
            <Route path='/tasks/nova' element={<NovaTask/>}/>
            <Route path='*'  element={<Navigate to='/home'/>}/>
        </Routes>
    )
}