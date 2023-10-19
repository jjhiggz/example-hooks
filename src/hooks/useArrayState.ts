import { useState } from "react";

export const useArrayState = <T>(initialState: T[]) => {
  const [arr, setArr] = useState<T[]>(initialState);

  const push = (newItem: T) => setArr([...arr, newItem]);

  const deleteBy = (cb: (item: T) => unknown) =>
    setArr(arr.filter((i) => !cb(i)));

  return {
    push,
    deleteBy,
    arr,
    setArr,
  };
};
