import React, { createContext, useContext, useState } from 'react';

interface AutomatonContextData {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const AutomatonContext = createContext<AutomatonContextData>(
  {} as AutomatonContextData,
);

const AutomatonProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<string>('');

  return (
    <AutomatonContext.Provider value={{ state, setState }}>
      {children}
    </AutomatonContext.Provider>
  );
};

function useAutomaton(): AutomatonContextData {
  const context = useContext(AutomatonContext);

  return context;
}

export { AutomatonProvider, useAutomaton };
