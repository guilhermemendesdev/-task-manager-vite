import React, { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption {
    icon: React.ReactElement
    path: string
    label: string
}

interface IDrawerContextData {
    isDrawerOpen: boolean
    drawerOptions: IDrawerOption[]
    toggleDrawerOpen: () => void
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

interface IDrawerProviderProps {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])
    
    return (
        <DrawerContext.Provider value={{drawerOptions, isDrawerOpen, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
            {children}          
        </DrawerContext.Provider>
    )
}

