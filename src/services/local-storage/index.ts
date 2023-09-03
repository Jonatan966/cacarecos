import { removeItem } from "./remove-item";
import { retrieveItem } from "./retrieve-item";
import { storeItem } from "./store-item";

export const localStorageService = { storeItem, retrieveItem, removeItem };
