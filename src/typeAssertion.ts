interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish): boolean {
  if (typeof (animal as Fish).swim) {
    return true;
  }
  return false;
}

(window as any).foo = 1;

function getMouse(key: string): any {
  return (window as any).key;
}
interface Mouse {
  name: string;
  run(): void;
}
const mouse = getMouse("mouse") as Mouse;
mouse.run();

function getRuler<T>(key: string): T {
  return (window as any).key;
}
interface Ruler {
  name: string;
  use(): void;
}
const ruler = getRuler<Ruler>("ruler");
