import { DeepClient, SerialOperation } from '@deep-foundation/deeplinks/imports/client';
import { getHandlerLinkId } from './get-handler-link-id';
import { Handle } from './handle';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';


/**
 * Gets insert serial operations for handle
 * 
 * @example
```ts

```
 */
export async function getHandleInsertSerialOperations(
  param: GetHandleInsertSerialOperations
) {
  const {
    deep,
    triggerTypeLinkId,
    containerLinkId = deep.linkId,
    containTypeLinkId = await deep.id('@deep-foundation/core', 'Contain'),
    containValue,
  } = param;

  let linkIds = param.linkIds;
  if (!linkIds) {
    const reservedLinkIds = await deep.reserve(2);
    linkIds = {
      handleLinkId: reservedLinkIds[0],
      containLinkId: reservedLinkIds[1],
    };
  }

  const serialOperations = [];

  const handleInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'links',
    objects: {
      id: linkIds.handleLinkId,
      type_id: param.handleTypeLinkId,
      from_id: triggerTypeLinkId,
      to_id: param.handlerLinkId,
    },
  });
  serialOperations.push(handleInsertSerialOperation);

  const containInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'links',
    objects: {
      type_id: containTypeLinkId,
      from_id: containerLinkId,
      to_id: linkIds.handleLinkId,
    },
  });
  serialOperations.push(containInsertSerialOperation);

  if (containValue) {
    const valueOfContainInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'strings',
      objects: {
        link_id: linkIds.containLinkId,
        value: containValue,
      },
    });
    serialOperations.push(valueOfContainInsertSerialOperation);
  }

  return serialOperations;
}

export type GetHandleInsertSerialOperations = {
  /**
   * DeepClient instance
   */
  deep: DeepClient;
  linkIds?: {
    /**
     * Link id of the handle that will be inserted
     */
    handleLinkId?: number;
    /**
     * Link id of the contain that will be inserted
     */
    containLinkId?: number;
  };
  /**
   * Id of link that will be handled
   */
  triggerTypeLinkId: number;
  /**
   * Link where handle will be contained
   */
  containerLinkId?: number;
  /**
   * Contain type link id
   */
  containTypeLinkId?: number;
  /**
   * Value of contain link that will be inserted
   */
  containValue?: string;
  /**
   * Handle type link id
   */
  handleTypeLinkId: number;
  /**
   * Link id of the handler
   */
  handlerLinkId: number;
};


