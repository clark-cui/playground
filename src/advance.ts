let advanceArr: Array<number> = [123];
function printName(obj: { first: string; last?: string }): string {
  return obj.first + obj.last;
}

type Point = {
  x: number;
  y: number;
};

interface Point2 {
  x: number;
  y: number;
}

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
