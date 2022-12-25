import { NativeEventEmitter } from "react-native";
import { HyperPaySDK } from "../utils";

export const eventEmitter = new NativeEventEmitter(HyperPaySDK);
