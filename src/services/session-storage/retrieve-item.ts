import { StorageKey, StorageValues } from "./types";

export function retrieveItem<K extends StorageKey>(key: K) {
  const item = sessionStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item) as StorageValues[K];
}
