import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

export type OptionContextState = {
  showCamera: boolean;
  showDetectResult: boolean;
};

export type OptionContextValue = [
  state: OptionContextState,
  setState: SetStoreFunction<OptionContextState>
];

const defaultState: OptionContextState = {
  showCamera: true,
  showDetectResult: true,
};

const OptionContext = createContext<OptionContextValue>([
  defaultState,
  () => {},
]);

export const OptionProvider: ParentComponent = (props) => {
  const [state, setState] = createStore(defaultState);

  return (
    <OptionContext.Provider value={[state, setState]}>
      {props.children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => useContext(OptionContext);
