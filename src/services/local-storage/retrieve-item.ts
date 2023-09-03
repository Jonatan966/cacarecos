import { StorageKey, StorageValues } from "./types";

export function retrieveItem<K extends StorageKey>(key: K) {
  const item = localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item) as StorageValues[K];
}
