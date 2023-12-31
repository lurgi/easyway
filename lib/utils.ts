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
  // const elevations: any = [];
  // await Promise.all(
  //   directions.map(([x, y]: number[]) => axios.post("/api/elevation", { x, y }))
  // ).then((result) => {
  //   for (let {
  //     data: { results },
  //   } of result) {
  //     console.log(results[0]);
  //     elevations.push([results[0].elevation, results[0].location]);
  //   }
  // });
  // console.log(elevations);
  const elevations = [
    [
      43.38108825683594,
      {
        lat: 37.6084004,
        lng: 127.106072,
      },
    ],
    [
      43.08070373535156,
      {
        lat: 37.6084273,
        lng: 127.106022,
      },
    ],
    [
      42.68740844726562,
      {
        lat: 37.6084708,
        lng: 127.1058201,
      },
    ],
    [
      42.77379989624023,
      {
        lat: 37.6084796,
        lng: 127.105777,
      },
    ],
    [
      42.35558700561523,
      {
        lat: 37.608569,
        lng: 127.1058116,
      },
    ],
    [
      42.18642044067383,
      {
        lat: 37.6085997,
        lng: 127.1058228,
      },
    ],
    [
      41.51821517944336,
      {
        lat: 37.6087586,
        lng: 127.1059126,
      },
    ],
    [
      40.67992782592773,
      {
        lat: 37.6089934,
        lng: 127.1060598,
      },
    ],
    [
      40.52256774902344,
      {
        lat: 37.6090296,
        lng: 127.1060845,
      },
    ],
    [
      40.13998413085938,
      {
        lat: 37.6090946,
        lng: 127.1061261,
      },
    ],
    [
      40.22850036621094,
      {
        lat: 37.6090804,
        lng: 127.1061862,
      },
    ],
    [
      40.19034957885742,
      {
        lat: 37.6090878,
        lng: 127.1062462,
      },
    ],
    [
      39.9356575012207,
      {
        lat: 37.6091204,
        lng: 127.106288,
      },
    ],
    [
      39.74291610717773,
      {
        lat: 37.6091502,
        lng: 127.1063003,
      },
    ],
    [
      39.37368011474609,
      {
        lat: 37.6092087,
        lng: 127.1062943,
      },
    ],
    [
      39.05268096923828,
      {
        lat: 37.6092411,
        lng: 127.106259,
      },
    ],
    [
      38.8918571472168,
      {
        lat: 37.6093134,
        lng: 127.1063232,
      },
    ],
    [
      37.20433044433594,
      {
        lat: 37.6098314,
        lng: 127.1067794,
      },
    ],
    [
      36.9324951171875,
      {
        lat: 37.6098531,
        lng: 127.1067985,
      },
    ],
    [
      36.30009078979492,
      {
        lat: 37.6099001,
        lng: 127.106839,
      },
    ],
    [
      36.10597229003906,
      {
        lat: 37.6099814,
        lng: 127.1069077,
      },
    ],
    [
      36.49420928955078,
      {
        lat: 37.6101089,
        lng: 127.107017,
      },
    ],
    [
      37.03513336181641,
      {
        lat: 37.6102445,
        lng: 127.1071363,
      },
    ],
    [
      36.77049255371094,
      {
        lat: 37.6105916,
        lng: 127.1074416,
      },
    ],
    [
      36.00611877441406,
      {
        lat: 37.6107091,
        lng: 127.1075452,
      },
    ],
    [
      36.16683197021484,
      {
        lat: 37.6107593,
        lng: 127.1074396,
      },
    ],
    [
      36.00160217285156,
      {
        lat: 37.610779,
        lng: 127.1073987,
      },
    ],
    [
      35.50246047973633,
      {
        lat: 37.6110953,
        lng: 127.1068452,
      },
    ],
    [
      35.24766159057617,
      {
        lat: 37.6113579,
        lng: 127.1064121,
      },
    ],
    [
      35.28003692626953,
      {
        lat: 37.6114991,
        lng: 127.10605,
      },
    ],
    [
      35.91213607788086,
      {
        lat: 37.6116026,
        lng: 127.1057084,
      },
    ],
    [
      35.65498733520508,
      {
        lat: 37.6116159,
        lng: 127.1056619,
      },
    ],
    [
      35.10163879394531,
      {
        lat: 37.6117246,
        lng: 127.1052862,
      },
    ],
    [
      35.06291580200195,
      {
        lat: 37.6117389,
        lng: 127.1052352,
      },
    ],
    [
      35.00313949584961,
      {
        lat: 37.6117825,
        lng: 127.1050741,
      },
    ],
    [
      34.56034469604492,
      {
        lat: 37.6121804,
        lng: 127.1038426,
      },
    ],
    [
      34.70517730712891,
      {
        lat: 37.6122187,
        lng: 127.1037223,
      },
    ],
    [
      34.735595703125,
      {
        lat: 37.612233,
        lng: 127.1036792,
      },
    ],
    [
      34.74727249145508,
      {
        lat: 37.612283,
        lng: 127.1035294,
      },
    ],
    [
      34.85023880004883,
      {
        lat: 37.6123481,
        lng: 127.1033228,
      },
    ],
    [
      34.56014633178711,
      {
        lat: 37.6124292,
        lng: 127.1030572,
      },
    ],
    [
      33.00290298461914,
      {
        lat: 37.6126103,
        lng: 127.1024977,
      },
    ],
    [
      29.71704864501953,
      {
        lat: 37.6128984,
        lng: 127.101609,
      },
    ],
    [
      29.39128112792969,
      {
        lat: 37.6129341,
        lng: 127.1014875,
      },
    ],
    [
      29.24023056030273,
      {
        lat: 37.6129733,
        lng: 127.1013559,
      },
    ],
    [
      29.03823280334473,
      {
        lat: 37.6129844,
        lng: 127.1011643,
      },
    ],
    [
      28.96761322021484,
      {
        lat: 37.6129877,
        lng: 127.1010873,
      },
    ],
    [
      29.16793251037598,
      {
        lat: 37.6129772,
        lng: 127.1003758,
      },
    ],
    [
      29.53513145446777,
      {
        lat: 37.6130213,
        lng: 127.1001036,
      },
    ],
    [
      29.53516006469727,
      {
        lat: 37.613032,
        lng: 127.1000684,
      },
    ],
    [
      29.57060623168945,
      {
        lat: 37.613049,
        lng: 127.100014,
      },
    ],
    [
      29.51922416687012,
      {
        lat: 37.6130883,
        lng: 127.099922,
      },
    ],
    [
      29.34195327758789,
      {
        lat: 37.6131303,
        lng: 127.099822,
      },
    ],
    [
      29.31987953186035,
      {
        lat: 37.6131518,
        lng: 127.0997687,
      },
    ],
    [
      27.72139549255371,
      {
        lat: 37.6136354,
        lng: 127.0983067,
      },
    ],
    [
      27.7883472442627,
      {
        lat: 37.6137138,
        lng: 127.0980513,
      },
    ],
    [
      28.16879653930664,
      {
        lat: 37.6137906,
        lng: 127.0978379,
      },
    ],
    [
      28.03906440734863,
      {
        lat: 37.6138352,
        lng: 127.0977051,
      },
    ],
    [
      30.09213447570801,
      {
        lat: 37.614194,
        lng: 127.0966664,
      },
    ],
    [
      30.2601375579834,
      {
        lat: 37.6143557,
        lng: 127.0962361,
      },
    ],
    [
      30.19991874694824,
      {
        lat: 37.6144414,
        lng: 127.0959875,
      },
    ],
    [
      29.39042663574219,
      {
        lat: 37.6146448,
        lng: 127.095915,
      },
    ],
    [
      29.1906852722168,
      {
        lat: 37.6147996,
        lng: 127.0958496,
      },
    ],
    [
      29.05767059326172,
      {
        lat: 37.6148689,
        lng: 127.0958197,
      },
    ],
    [
      28.77982521057129,
      {
        lat: 37.614976,
        lng: 127.095767,
      },
    ],
    [
      28.76818656921387,
      {
        lat: 37.6149904,
        lng: 127.0957602,
      },
    ],
    [
      28.63109970092773,
      {
        lat: 37.615075,
        lng: 127.0957189,
      },
    ],
    [
      28.26286888122559,
      {
        lat: 37.61527,
        lng: 127.0955558,
      },
    ],
    [
      28.196044921875,
      {
        lat: 37.6153617,
        lng: 127.0954806,
      },
    ],
    [
      28.06366729736328,
      {
        lat: 37.6154021,
        lng: 127.0954395,
      },
    ],
    [
      27.72416114807129,
      {
        lat: 37.6154991,
        lng: 127.0953495,
      },
    ],
    [
      27.57028388977051,
      {
        lat: 37.6155656,
        lng: 127.0952778,
      },
    ],
    [
      27.4200611114502,
      {
        lat: 37.6156284,
        lng: 127.0951924,
      },
    ],
    [
      26.72070121765137,
      {
        lat: 37.6157852,
        lng: 127.0949185,
      },
    ],
    [
      26.71768760681152,
      {
        lat: 37.615787,
        lng: 127.0949151,
      },
    ],
    [
      26.30734252929688,
      {
        lat: 37.6158514,
        lng: 127.0947776,
      },
    ],
    [
      26.27164268493652,
      {
        lat: 37.6159265,
        lng: 127.094605,
      },
    ],
    [
      26.22053909301758,
      {
        lat: 37.6159686,
        lng: 127.0945062,
      },
    ],
    [
      25.54228973388672,
      {
        lat: 37.6161367,
        lng: 127.0941257,
      },
    ],
    [
      25.25109481811523,
      {
        lat: 37.6162261,
        lng: 127.0939111,
      },
    ],
    [
      25.24435615539551,
      {
        lat: 37.6163012,
        lng: 127.0937441,
      },
    ],
    [
      25.27622604370117,
      {
        lat: 37.6163397,
        lng: 127.0936578,
      },
    ],
    [
      25.24666976928711,
      {
        lat: 37.6163835,
        lng: 127.0935612,
      },
    ],
    [
      25.16358947753906,
      {
        lat: 37.6164381,
        lng: 127.0934397,
      },
    ],
    [
      25.14765739440918,
      {
        lat: 37.6165096,
        lng: 127.0932716,
      },
    ],
    [
      25.14497947692871,
      {
        lat: 37.6165096,
        lng: 127.0932704,
      },
    ],
    [
      24.66415023803711,
      {
        lat: 37.6166571,
        lng: 127.0929161,
      },
    ],
    [
      24.32479286193848,
      {
        lat: 37.6169119,
        lng: 127.092304,
      },
    ],
    [
      23.60782432556152,
      {
        lat: 37.6175779,
        lng: 127.0907253,
      },
    ],
    [
      23.59101867675781,
      {
        lat: 37.617586,
        lng: 127.0907071,
      },
    ],
  ];
  let upDirections: DirectionLine[] = [];
  let downDirction: DirectionLine[] = [];
  elevations.forEach(
    (
      [curValue, { lat: curlat, lng: curlng }]: any,
      index: number,
      arr: any
    ) => {
      const next = arr[index + 1];
      if (!next) return;
      const [nextValue, { lat: nextlat, lng: nextlng }] = next;
      const elevationGap = nextValue - curValue;
      if (elevationGap > 0)
        upDirections.push({
          str: [curlng, curlat],
          end: [nextlng, nextlat],
          inclination: elevationGap,
        });
      if (elevationGap <= 0)
        downDirction.push({
          str: [curlng, curlat],
          end: [nextlng, nextlat],
          inclination: elevationGap,
        });
    }
  );

  return [upDirections, downDirction];
}
