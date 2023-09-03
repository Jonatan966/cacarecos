import { StorageKey } from "./types";

export function removeItem<K extends StorageKey>(key: K) {
  localStorage.removeItem(key);
}
