import { StorageKey, StorageValues } from "./types";

export function storeItem<K extends StorageKey>(
  key: K,
  value: StorageValues[K]
) {
  localStorage.setItem(key, JSON.stringify(value));
}
