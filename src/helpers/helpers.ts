export function decodeURIComponentForStringOrArray(data: string | string[] | null | undefined): string | string[] | null | undefined {
  if (typeof data === "string") {
    return decodeURIComponent(
      data.replace(/%(\d{2})/g, (_, digits) =>
        String.fromCharCode(parseInt(digits, 16))
      )
    );
  } else if (Array.isArray(data)) {
    return data.map((str) =>
      decodeURIComponent(
        str &&
          str.replace(/%(\d{2})/g, (_: string, digits: string) =>
            String.fromCharCode(parseInt(digits, 16))
          )
      )
    );
  } else {
    return data;
  }
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// export function decodeURIComponentForStringOrArray(data: any) {
//   if (typeof data === "string") {
//     return decodeURIComponent(
//       data.replace(/%(\d{2})/g, (_, digits) =>
//         String.fromCharCode(parseInt(digits, 16))
//       )
//     );
//   } else if (Array.isArray(data)) {
//     return data.map((str) =>
//       decodeURIComponent(
//         str &&
//           str.replace(/%(\d{2})/g, (_: any, digits: string) =>
//             String.fromCharCode(parseInt(digits, 16))
//           )
//       )
//     );
//   } else {
//     return data;
//   }
// }

// export function shuffleArray(array: any[]) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
