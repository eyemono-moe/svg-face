import {
  Component,
  createSignal,
  createUniqueId,
  JSXElement,
  Show,
} from "solid-js";

const ControlToggleButton: Component<{
  active: boolean;
  activeContent: JSXElement;
  inactiveContent: JSXElement;
  onActivate: (e: Event) => void;
  onDeactivate: (e: Event) => void;
}> = (props) => {
  const [active, setActive] = createSignal(props.active);
  const id = createUniqueId();

  const handleClick = (e: Event) => {
    setActive(!active());
    if (active()) {
      props.onActivate(e);
    } else {
      props.onDeactivate(e);
    }
  };

  return (
    <div class="optionCheckBox">
      <input
        type="checkbox"
        id={id}
        onClick={handleClick}
      />
      <label for={id}>
        <Show when={active()} fallback={props.inactiveContent}>
          {props.activeContent}
        </Show>
      </label>
    </div>
  );
};

export default ControlToggleButton;
