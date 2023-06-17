import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { Handle } from "./handle";

export async function getHandleLinkId(param: GetHandleLinkIdParam) {
   const {deep, handler} = param;
   
   if(!deep) {
      throw new Error(`DeepClient is required`)
   }

   if(!handler) {
      throw new Error(`Handler is required`)
   }

   return await deep.id("@deep-foundation/core", `Handle${Handle[handler]}`)
}

export interface GetHandleLinkIdParam {
   deep: DeepClient;
   handler: Handle
}