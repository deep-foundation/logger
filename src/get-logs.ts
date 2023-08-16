import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { Package } from "./package";

export async function getLogs(options: GetLogsOptions) {
  const { linkId, deep } = options;
  const _package = new Package({ deep });
  const typeLinkIds = await getTypeLinkIds({_package,typeLinkIds: options.typeLinkIds});
  const { logTreeTypeLinkId } = typeLinkIds;
  return await deep.select({
    down: {
      tree_id: logTreeTypeLinkId,
      link_id: linkId
    }
  })
}

export interface GetLogsOptions {
  deep: DeepClient;
  linkId: number;
  typeLinkIds?: {
    logTreeTypeLinkId?: number;
  };
}

interface GetTypeLinkIdsOptions {
  typeLinkIds: GetLogsOptions['typeLinkIds'];
  _package: Package;
}

type GetTypeLinkIdsResult = Exclude<GetLogsOptions['typeLinkIds'], undefined>;

async function getTypeLinkIds(options: GetTypeLinkIdsOptions): Promise<GetTypeLinkIdsResult> {
  return {
    logTreeTypeLinkId: options.typeLinkIds?.logTreeTypeLinkId ?? await options._package.LogTree.id()
  }
}