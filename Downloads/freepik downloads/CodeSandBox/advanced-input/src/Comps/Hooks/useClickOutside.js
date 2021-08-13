import { useEffect } from "react";

const useClickOutside = (node, callback) => {
  const onMouseDown = e => {
    console.log(e.target);

    if (!node.current.contains(e.target)) callback();
  };
  useEffect(() => {
    const mouseDown = document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", mouseDown);
  }, []);
};
export default useClickOutside;
