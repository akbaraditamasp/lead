import axios from "axios";
import { Edge } from "edge.js";

function edge() {
  let edge: Edge | null = null;

  const boot = () => {
    if (edge) return;

    edge = Edge.create();
    edge.global("axios", axios);
    edge.global("error", (code: number) => {
      throw new Error(`${code}`);
    });
  };

  return { boot, get: () => edge! };
}

export default edge();
