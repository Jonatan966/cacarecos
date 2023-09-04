import { StorageKey, StorageValues } from "./types";

export function retrieveItem<K extends StorageKey>(key: K) {
  if (typeof window === "undefined") {
    return;
  }

  const item = localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item) as StorageValues[K];
}
