import {Route, Routes, Navigate} from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'
import { Home, Task } from '@mui/icons-material'
import { Dashboard } from '../pages'

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
                path: 'tasks',
                icon: <Task/>,
                label: 'Tarefas'
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/tasks'/>
            <Route path='*'  element={<Navigate to='/home'/>}/>
        </Routes>
    )
}