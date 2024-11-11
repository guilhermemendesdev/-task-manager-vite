import { Button } from '@mui/material'
import {Route, Routes, Navigate} from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'
import { Home, Task } from '@mui/icons-material'

export const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext()

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
            <Route path='/home' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer Open</Button>}/>
            <Route path='/tasks' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer Open</Button>}/>
            <Route path='*'  element={<Navigate to='/home'/>}/>
        </Routes>
    )
}