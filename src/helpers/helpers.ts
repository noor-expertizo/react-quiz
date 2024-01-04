// export function decodeURIComponentForStringOrArray(data: any) {
//   if (typeof data === "string") {
//     return decodeURIComponent(data.replace(/%\d+/g, " "));
//   } else if (Array.isArray(data)) {
//     return data.map((str) =>
//       decodeURIComponent(str && str.replace(/%\d+/g, " "))
//     );
//   } else {
//     return data;
//   }
// }

export function decodeURIComponentForStringOrArray(data: any) {
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
          str.replace(/%(\d{2})/g, (_: any, digits: string) =>
            String.fromCharCode(parseInt(digits, 16))
          )
      )
    );
  } else {
    return data;
  }
}

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// the user has currently answered 15 of 20 questions, they have answered 10 correct and 5 incorrect. therefore their score is 10/50 or 60%
// if the user gets every remaining question correct they will have a score of 15/20 or 75% therefore their maximum score is 75%.
// if the user gets every remaining question wrong , they will have a score of 10/20 or 50%. therefore their lowest possible score is 50%.
