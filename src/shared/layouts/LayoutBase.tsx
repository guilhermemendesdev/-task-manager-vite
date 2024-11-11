import { Menu } from "@mui/icons-material";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseProps {
    children: React.ReactNode
    titulo: string

}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({children, titulo}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const {toggleDrawerOpen} = useDrawerContext()
    
    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Menu/>
                    </IconButton>
                )}
                <Typography variant="h5">
                    {titulo}
                </Typography>
            </Box>
            <Box>
                Barra de Ferramentas
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    )
}