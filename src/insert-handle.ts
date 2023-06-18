import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { Handle } from './handle';
import { MutationInputLink } from '@deep-foundation/deeplinks/imports/client_types';

/**
 * Inserts a handle and contain it if {@link InsertHandleParam.containerLinkId} is not null 
 * 
 * @example
 * #### Insert a handle link
```ts
await insertHandle({
   deep,
   handle: Handle.Insert \/\* Handle.Update, Handle.Delete \*\/,
   triggerTypeLinkId: await deep.id(deep.linkId, "MyType"),
   containerLinkId: deep.linkId
})
```
 */
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

  return await deep.insert(insertData);
}

export interface InsertHandleParam {
  /**
   * DeepClient instance
   */
  deep: DeepClient;
  /**
   * Type of Handle
   */
  handle: Handle;
  /**
   * Link id that will be handled
   */
  triggerTypeLinkId: number;
  /**
   * Link id of container
   * 
   * @defaultValue {@link InsertHandleParam.deep.linkId} if undefined
   */
  containerLinkId?: number | null;
}
