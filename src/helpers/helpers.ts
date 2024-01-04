export function decodeURIComponentForStringOrArray(data: any) {
  if (typeof data === "string") {
    return decodeURIComponent(data.replace(/%\d+/g, " "));
  } else if (Array.isArray(data)) {
    return data.map((str) =>
      decodeURIComponent(str && str.replace(/%\d+/g, " "))
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
