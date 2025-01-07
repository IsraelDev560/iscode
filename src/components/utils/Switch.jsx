import { useEffect, useState } from "react";
import { Switch } from "@material-tailwind/react";

export function SwitchDefault() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode)document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

  return <Switch defaultChecked ripple={true} onClick={toggleTheme} />;
}