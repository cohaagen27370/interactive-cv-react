import { createContext, useContext, useState, type ReactNode } from 'react';

export type ContextValue = {
  page: string;
  changePage: (page: string) => void;
};

// 1. Créez un Contexte
const PageContext = createContext<ContextValue | null>(null);

// 2. Créez un Fournisseur (Provider) pour le Contexte
export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState('presentation'); // 'light' ou 'dark'

  const changePage = (page: string) => {
    setPage(page);
  };

  // La valeur passée au Contexte sera disponible pour tous les consommateurs
  const contextValue = { page, changePage } as ContextValue;

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};

// 3. Créez un hook personnalisé pour consommer le Contexte plus facilement
export const usePage = () => {
  const context = useContext(PageContext) as ContextValue;
  if (context === null) {
    throw new Error(
      "usePage doit être utilisé à l'intérieur d'un PageProvider",
    );
  }
  return context;
};
