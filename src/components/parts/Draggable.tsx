import { createEffect, onMount, ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";

const Draggable: ParentComponent = (props) => {
  const [position, setPosition] = createStore<{
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
    clicked: boolean;
  }>({
    x: 16,
    y: 16,
    offsetX: 0,
    offsetY: 0,
    clicked: false,
  });

  let draggableWrapper: HTMLDivElement;

  const handleMouseDown = (e: MouseEvent) => {
    setPosition("offsetX", e.offsetX);
    setPosition("offsetY", e.offsetY);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.pageX - position.offsetX,
      y: e.pageY - position.offsetY,
    });
  };

  onMount(() => {
    draggableWrapper.addEventListener("mousedown", handleMouseDown);
  });

  createEffect(() => {
    draggableWrapper.style.left = position.x + "px";
    draggableWrapper.style.top = position.y + "px";
  });

  return (
    <div
      ref={draggableWrapper!}
      style={{ position: "absolute", cursor: "move" }}
    >
      {props.children}
    </div>
  );
};

export default Draggable;
