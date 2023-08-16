[![npm](https://img.shields.io/npm/v/@deep-foundation/logger.svg)](https://www.npmjs.com/package/@deep-foundation/logger) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/logger) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

A deep package that provides handlers to log insert/update/delete operations

[**Documentation**](https://deep-foundation.github.io/logger/index.html)

# Prerequisitions
- Give permissions

# Usage
Insert a link of type `Handle(Insert|Update|Delete)` from your type that should be handled to the accroding handler `(Insert|Update|Delete)Handler` from this package

- ## [By using library of this package](https://deep-foundation.github.io/logger/functions/insertHandle.html#md:insert-a-handle-link)


- ## Manually
  ```ts
  const containTypeLinkId = await deep.id("@deep-foundation/core", "Contain");
  
  const handleInsertTypeLinkId = await deep.id(
    "@deep-foundation/core",
    "HandleInsert"
  );
  const handleUpdateTypeLinkId = await deep.id(
    "@deep-foundation/core",
    "HandleUpdate"
  );
  const handleDeleteTypeLinkId = await deep.id(
    "@deep-foundation/core",
    "HandleDelete"
  );
  
  const insertHandlerLinkId = await deep.id(
    "@deep-foundation/logger",
    "InsertHandler"
  );
  const updateHandlerLinkId = await deep.id(
    "@deep-foundation/logger",
    "UpdateHandler"
  );
  const deleteHandlerLinkId = await deep.id(
    "@deep-foundation/logger",
    "DeleteHandler"
  );
  
  const myTypeLinkId = await deep.id(deep.linkId, "MyType");
  const containerLinkId = deep.linkId;
  
  const reservedLinkIds = await deep.reserve(1);
  
  const handleLinkId = reservedLinkIds.pop();
  
  await deep.serial({
    operations: [
      {
        type: "insert",
        table: "links",
        objects: {
          id: handleLinkId,
          type_id:
            handleInsertTypeLinkId /* handleUpdateTypeLinkId, handleDeleteTypeLinkId */,
          from_id: myTypeLinkId,
          to_id:
            insertHandlerLinkId /* updateHandlerLinkId, deleteHandlerLinkId */,
        },
      },
      {
        type: "insert",
        table: "links",
        objects: {
          type_id: containTypeLinkId,
          from_id: containerLinkId,
          to_id: handleLinkId,
        },
      },
    ],
  });
  
  ```

## Result
### Insert
- LogInsert with string value that contains timestamp in milliseconds
- LogId from LogInsert to newLink.link
- LogType from LogINsert to newLink.type
- LogFrom from LogInsert to newLink.from
- LogTo from LogInsert to newLink.to

### Update
- LogInsert with string value that contains timestamp in milliseconds
- LogId from LogInsert to newLink.link
- LogType from LogINsert to newLink.type
- LogFrom from LogInsert to newLink.from
- LogTo from LogInsert to newLink.to
- Log(String|Number|Object) from LogUpdate to LogUpdate with string|number|object

### Delete
- LogInsert with string value that contains timestamp in milliseconds
- LogId from LogInsert to newLink.link
- LogType from LogINsert to newLink.type
- LogFrom from LogInsert to newLink.from
- LogTo from LogInsert to newLink.to
- Log(String|Number|Object) from LogUpdate to LogUpdate with string|number|object
