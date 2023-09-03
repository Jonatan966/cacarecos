import { StorageKey } from "./types";

export function removeItem<K extends StorageKey>(key: K) {
  sessionStorage.removeItem(key);
}
