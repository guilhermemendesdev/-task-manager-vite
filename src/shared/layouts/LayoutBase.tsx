import { Menu } from "@mui/icons-material";
import { IconButton, Box, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import React, { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseProps {
    titulo: string
    barraDeFerramentas?: ReactNode
    children?: ReactNode
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({children, titulo, barraDeFerramentas}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    const {toggleDrawerOpen} = useDrawerContext()
    
    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems='center'  gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Menu/>
                    </IconButton>
                )}
                <Typography 
                variant={smDown ? "h5" : mdDown ? 'h4' : 'h3'}
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
                >
                    {titulo}
                </Typography>
            </Box>
            {barraDeFerramentas && (
            <Box>
                {barraDeFerramentas}
            </Box>
            )}          
            <Box flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    )
}