import { useEffect } from "react";

type CB = () => void;

export const useOnMount = (cb: CB) => {
  useEffect(() => {
    cb();
  }, []);
};
