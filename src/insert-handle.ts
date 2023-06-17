import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { Handle } from './handle';
import { MutationInputLink } from '@deep-foundation/deeplinks/imports/client_types';

export async function insertHandle(param: InsertHandleParam) {
  const { deep, handle, triggerTypeLinkId, containerLinkId } = param;

  const insertData: MutationInputLink = {
    type_id: await deep.id('@deep-foundation/core', `Handle${Handle[handle]}`),
    from_id: triggerTypeLinkId,
    to_id: await deep.id('@deep-foundation/logger', `${Handle[handle]}Handler`),
    in: {
      data:
        containerLinkId === null
          ? []
          : [
              {
                type_id: await deep.id('@deep-foundation/core', 'Contain'),
                from_id: containerLinkId ?? deep.linkId,
              },
            ],
    },
  };

  await deep.insert(insertData);
}

export interface InsertHandleParam {
  deep: DeepClient;
  handle: Handle;
  triggerTypeLinkId: number;
  containerLinkId?: number | null;
}
