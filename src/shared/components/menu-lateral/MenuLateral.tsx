import React, { useCallback } from 'react'
import { DarkMode, LightMode } from "@mui/icons-material"
import { Avatar, Divider, Drawer, List, Box, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { useMediaQuery } from "@mui/system"
import { useAppThemeContext, useDrawerContext } from "../../contexts"
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

interface IDrawerOpenProviderProps {
    to: string
    label: string
    icon: React.ReactElement
    onClick: (() => void) | undefined
    children?: React.ReactNode
}

interface IMenuLateralProps {
    children: React.ReactNode
}

const ListItemLink: React.FC<IDrawerOpenProviderProps> = ({to, icon, label, onClick}) => {
    const navigate = useNavigate()

    const resolvePath = useResolvedPath(to)
    const match = useMatch({path: resolvePath.pathname, end: false})

    const handleClick = useCallback(() => {
        navigate(to)
        onClick?.()
    }, [])
    
    return (
        <ListItemButton onClick={handleClick} selected={!!match}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton> 
    )
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext()
    const {toggleTheme, themeName} = useAppThemeContext()

    return(
    <>
        <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
            <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                    <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}} src="https://play-lh.googleusercontent.com/hwqIBbPBOLGIxwciuns6_P8n3FSUPXmEyxwREou_AxK4q_lP6r825JWxG2l6X5OOgnV7" />
                </Box>
                <Divider />
                <Box flex={1}>
                    <List component='nav'>
                        {drawerOptions.map(drawerOption => (
                            <ListItemLink 
                                key={drawerOption.path}
                                icon={drawerOption.icon}
                                to={drawerOption.path}
                                label={drawerOption.label}
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        ))}
                    </List>
                </Box>
                <Box>
                    <List component='nav'>
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                {themeName === 'dark' ? <LightMode /> : <DarkMode/>}
                            </ListItemIcon>
                            <ListItemText primary={themeName === 'dark' ? "Tema claro" : 'Tema escuro'} />
                        </ListItemButton> 
                    </List>
                </Box>
            </Box>
        </Drawer>
        <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
            {children}
        </Box>
        
    </>
)
}