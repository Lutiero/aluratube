import React, { createContext, useState } from "react";

export const ColorModeContext = createContext({
    mode: '',
    setMode: () => { alert('Configure primeiro') },
    toggleMode: () => { alert('Configure primeiro') }
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = useState(props.initialMode);

    function toggleMode() {
        if(mode === 'dark') setMode('light');
        if(mode === 'light') setMode('dark');
    }
    
    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}