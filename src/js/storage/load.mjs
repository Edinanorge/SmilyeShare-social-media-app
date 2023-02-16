export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return undefined;
  }
}
