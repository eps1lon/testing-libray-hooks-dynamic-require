import { renderHook as renderHookV4 } from "@testing-library/react-hooks-v4/pure";
// Remove this import and everything is fine
import { renderHook as renderHookV5 } from "@testing-library/react-hooks-v5/pure";
import { useState } from "react";

function useHook() {
  return useState(false);
}

console.log(renderHookV4(() => useHook()));
console.log(renderHookV5(() => useHook()));
