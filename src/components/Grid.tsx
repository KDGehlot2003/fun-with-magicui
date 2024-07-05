"use client";

import { cn } from "../lib/utils";
import GridPattern from "../components/magicui/grid-pattern";

const GridPatternDemo = () => {
  return (
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [10, 5],
          [13, 3],
          [12, 8],
          [15, 7],
          [16, 10],
          [18, 9],
          [20, 11],
          [22, 12],
          [24, 14],
          [26, 13],
          [28, 15],
          [30, 16],
          [32, 18],
          [34, 17],
          [36, 19],
          [38, 20],
          [40, 22],
          [36, 10],
          [16, 20],
          [24, 12],
          [23, 11],
          [39, 10],
          [37, 20],
          [33, 10],
          [34, 15],
          [18, 12],
          [23, 17],
          [35, 9],
          [33, 12],
          [31, 14],
          [40, 18],
          [38, 16],
          [36, 14],
          [50, 20],
          [48, 18],
          [10, 30],
          [6, 26],
          [2, 22],
          [0, 20],
          [0, 16],
          [0, 12],
          [0, 8],
          [16, 36],
          [20, 40],


        ]}
        className={cn(
          "[mask-image:radial-gradient(,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -skew-y-12",
        )}
        width={40}
        height={40}
        x={-1}
        y={-1}
      />
  );
};

export {GridPatternDemo};
