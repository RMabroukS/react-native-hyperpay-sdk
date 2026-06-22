import { NativeEventEmitter } from "react-native";
import { HyperPaySDK } from "../utils/NativeModules";

export const eventEmitter = new NativeEventEmitter(HyperPaySDK);
