import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  useEffect(() => {
    const xc = ref1.current;
    const boxes = xc.children;
    const dragbox = ref2.current;
    dragbox.addEventListener("dragstart", (e) => {
      console.log("drag started");
    });
    dragbox.addEventListener("dragend", (e) => {
      console.log("drag ended");
    });
    for (let i = 0; i < boxes.length; i++) {
      let box = boxes[i];
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      box.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log(e.target);
        box.append(ref2.current);
        console.log(box);
      });
    }

    return () => {
      dragbox.removeEventListener("dragstart", (e) => {
        console.log("drag started");
      });
      dragbox.removeEventListener("dragend", (e) => {
        console.log("drag ended");
      });
      for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        box.removeEventListener("dragover", (e) => {
          e.preventDefault();
        });
        box.removeEventListener("drop", (e) => {
          e.preventDefault();
          console.log(e.target);
          e.target.append(ref2.current);
          console.log(e.target);
        });
      }
    };
  }, []);
  return (
    <div>
      <div ref={ref1} className="App">
        <div className="box">
          <div ref={ref2} className="item" draggable="true"></div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <div />
    </div>
  );
}
