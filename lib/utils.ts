import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DirectionLine } from "./directionSotre";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Location {
  lat: number;
  lng: number;
}

export async function upDownDivid(directions: any) {
  const elevations: any = [];
  await Promise.all(
    directions.map(([x, y]: number[]) => axios.post("/api/elevation", { x, y }))
  ).then((result) => {
    for (let {
      data: { results },
    } of result) {
      console.log(results[0]);
      elevations.push([results[0].elevation, results[0].location]);
    }
  });
  console.log(elevations);
  let upDirections: DirectionLine[] = [];
  let downDirction: DirectionLine[] = [];
  elevations.forEach(
    (
      [curValue, { lat: curlat, lng: curlng }]: [number, Location],
      index: number,
      arr: any
    ) => {
      const [nextValue, { lat: nextlat, lng: nextlng }] = arr[index + 1];
      if (!nextValue) return;
      const elevationGap = nextValue - curValue;
      if (elevationGap > 0)
        upDirections.push([
          [curlng, curlat],
          [nextlng, nextlat],
        ]);
      if (elevationGap <= 0)
        downDirction.push([
          [curlng, curlat],
          [nextlng, nextlat],
        ]);
    }
  );

  return [upDirections, downDirction];
}
