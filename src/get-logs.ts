import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { BoolExpLink } from "@deep-foundation/deeplinks/imports/client_types";
import { Package } from "./package";

export async function getLogs(options: GetLogsOptions) {
  const { linkId, deep } = options;
  const _package = new Package({ deep });
  const typeLinkIds = await getTypeLinkIds({_package,typeLinkIds: options.typeLinkIds});
  const { logTreeTypeLinkId,logIdTypeLinkId } = typeLinkIds;
  const selectData: BoolExpLink = {
    down: {
      tree_id: logTreeTypeLinkId,
      parent: {
        out: {
          type_id: logIdTypeLinkId,
          to_id: linkId,
        },
      },
    },
  };
  return await deep.select(selectData)
}

export interface GetLogsOptions {
  deep: DeepClient;
  linkId: number;
  typeLinkIds?: {
    logTreeTypeLinkId?: number;
    logIdTypeLinkId?: number;
  };
}

interface GetTypeLinkIdsOptions {
  typeLinkIds: GetLogsOptions['typeLinkIds'];
  _package: Package;
}

type GetTypeLinkIdsResult = Required<Exclude<GetLogsOptions['typeLinkIds'], undefined>>;

async function getTypeLinkIds(options: GetTypeLinkIdsOptions): Promise<GetTypeLinkIdsResult> {
  return {
    logTreeTypeLinkId: options.typeLinkIds?.logTreeTypeLinkId ?? await options._package.LogTree.id(),
    logIdTypeLinkId: options.typeLinkIds?.logIdTypeLinkId ?? await options._package.LogId.id(),
  }
}