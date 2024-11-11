import React from 'react'
import { Home } from "@mui/icons-material"
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box, useMediaQuery } from "@mui/system"
import { useDrawerContext } from "../../contexts"

interface IDrawerOpenProviderProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IDrawerOpenProviderProps> = ({children}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext()

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
                        <ListItemButton>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary='Página inicial' />
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