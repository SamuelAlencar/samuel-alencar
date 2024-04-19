import { SetStateAction, useState } from "react";

export const useFormStatus = () => {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [method, setMethod] = useState("");

  // Funções para definir o estado dos campos
  const setPendingStatus = (status: boolean | ((prevState: boolean) => boolean)) => {
    setPending(status);
  };

  const setDataValue = (value: SetStateAction<null>) => {
    setData(value);
  };

  const setMethodValue = (value: SetStateAction<string>) => {
    setMethod(value);
  };

  // Retornando os estados e funções para definir os estados
  return {
    pending,
    data,
    method,
    setPendingStatus,
    setDataValue,
    setMethodValue,
  };
};
