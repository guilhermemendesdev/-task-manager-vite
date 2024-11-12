import {Route, Routes, Navigate} from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'
import { Home, People } from '@mui/icons-material'
import { Dashboard, ListagemDeDevelopers } from '../pages'

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
            }
        ])
    }, [])

    return (
        <Routes>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/developers' element={<ListagemDeDevelopers/>}/>
            <Route path='*'  element={<Navigate to='/home'/>}/>
        </Routes>
    )
}