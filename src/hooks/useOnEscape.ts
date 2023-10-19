import { KeyboardEventHandler, useEffect } from "react";

type CB = () => void;

export const useOnEscape = (cb: CB) => {
  useEffect(() => {
    const handler: KeyboardEventHandler = (e) =>
      e.key === "ESC" ? cb() : null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener("keydown", handler as any);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return () => document.removeEventListener("keydown", handler as any);
  });
};
