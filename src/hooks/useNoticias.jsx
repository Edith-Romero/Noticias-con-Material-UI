import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvaider";

const useNoticias = () => {
  return useContext(NoticiasContext);
}

export default useNoticias;
