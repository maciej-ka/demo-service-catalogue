import { createContext, useContext, PropsWithChildren } from "react";
import { Service, services } from "../data/data";

const DataContext = createContext<Service[]>([]);

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }: PropsWithChildren) => (
  <DataContext.Provider value={services}>
    {children}
  </DataContext.Provider>
)
export default DataProvider;