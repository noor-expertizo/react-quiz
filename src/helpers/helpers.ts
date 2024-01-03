export function decodeURIComponentForStringOrArray(data:any) {
    if (typeof data === 'string') {
      return decodeURIComponent(data.replace(/%\d+/g, ' '));
    } else if (Array.isArray(data)) {
      return data.map(str => decodeURIComponent( str && str.replace(/%\d+/g, ' ')));
    } else {
      return data;
    }
  }