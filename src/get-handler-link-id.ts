import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { Handle } from "./handle";
import { LOGGER_PACKAGE_NAME } from "./package-name";

export async function getHandlerLinkId(param: GetHandlerLinkParam) {
   const {deep, handler} = param;
   
   return deep.id(LOGGER_PACKAGE_NAME, `${Handle[handler]}Handler`)
}

export interface GetHandlerLinkParam {
   deep: DeepClient;
   handler: Handle;
}