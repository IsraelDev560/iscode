import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";

export const useLanguage = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const handleChangeLanguage = useCallback((language) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    }, [i18n])

    return {
        i18n, t, handleChangeLanguage, isOpen, setIsOpen
    }
}