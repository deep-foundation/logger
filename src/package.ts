
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const logTreeTypeLinkId = await package["LogTree"].id();
const treeIncludeNodeAnyTypeLinkId = await package["TreeIncludeNodeAny"].id();
const logStringTypeLinkId = await package["LogString"].id();
const logStringValueTypeTypeLinkId = await package["LogStringValueType"].id();
const logTreeTreeIncludeFromCurrentLogStringTypeLinkId = await package["LogTreeTreeIncludeFromCurrentLogString"].id();
const logObjectTypeLinkId = await package["LogObject"].id();
const logObjectValueTypeTypeLinkId = await package["LogObjectValueType"].id();
const logTreeTreeIncludeDownLogObjectLinkTypeLinkId = await package["LogTreeTreeIncludeDownLogObjectLink"].id();
const logToTypeLinkId = await package["LogTo"].id();
const logTreeTreeIncludeDownLogToTypeLinkId = await package["LogTreeTreeIncludeDownLogTo"].id();
const logFromTypeLinkId = await package["LogFrom"].id();
const logTreeTreeIncludeDownLogFromTypeLinkId = await package["LogTreeTreeIncludeDownLogFrom"].id();
const logAuthorTypeLinkId = await package["LogAuthor"].id();
const logTreeTreeIncludeDownLogAuthorTypeLinkId = await package["LogTreeTreeIncludeDownLogAuthor"].id();
const logTypeTypeLinkId = await package["LogType"].id();
const logTreeTreeIncludeDownLogTypeTypeLinkId = await package["LogTreeTreeIncludeDownLogType"].id();
const logDeleteTypeLinkId = await package["LogDelete"].id();
const logTreeIncludeNodeLogDeleteTypeLinkId = await package["LogTreeIncludeNodeLogDelete"].id();
const logUpdateTypeLinkId = await package["LogUpdate"].id();
const logTreeIncludeNodeLogUpdateTypeLinkId = await package["LogTreeIncludeNodeLogUpdate"].id();
const logNumberTypeLinkId = await package["LogNumber"].id();
const logNumberValueTypeTypeLinkId = await package["LogNumberValueType"].id();
const logTreeTreeIncludeFromCurrentLogNumberTypeLinkId = await package["LogTreeTreeIncludeFromCurrentLogNumber"].id();
const logInsertTypeLinkId = await package["LogInsert"].id();
const logTreeIncludeNodeLogInsertTypeLinkId = await package["LogTreeIncludeNodeLogInsert"].id();
const logIdTypeLinkId = await package["LogId"].id();
const logTreeTreeIncludeDownLogIdTypeLinkId = await package["LogTreeTreeIncludeDownLogId"].id();
const insertHandlerCodeTypeLinkId = await package["InsertHandlerCode"].id();
const insertHandlerTypeLinkId = await package["InsertHandler"].id();
const deleteHandlerCodeTypeLinkId = await package["DeleteHandlerCode"].id();
const deleteHandlerTypeLinkId = await package["DeleteHandler"].id();
const updateHandlerCodeTypeLinkId = await package["UpdateHandlerCode"].id();
const updateHandlerTypeLinkId = await package["UpdateHandler"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const logTreeTypeLinkId = package["LogTree"].idLocal();
const treeIncludeNodeAnyTypeLinkId = package["TreeIncludeNodeAny"].idLocal();
const logStringTypeLinkId = package["LogString"].idLocal();
const logStringValueTypeTypeLinkId = package["LogStringValueType"].idLocal();
const logTreeTreeIncludeFromCurrentLogStringTypeLinkId = package["LogTreeTreeIncludeFromCurrentLogString"].idLocal();
const logObjectTypeLinkId = package["LogObject"].idLocal();
const logObjectValueTypeTypeLinkId = package["LogObjectValueType"].idLocal();
const logTreeTreeIncludeDownLogObjectLinkTypeLinkId = package["LogTreeTreeIncludeDownLogObjectLink"].idLocal();
const logToTypeLinkId = package["LogTo"].idLocal();
const logTreeTreeIncludeDownLogToTypeLinkId = package["LogTreeTreeIncludeDownLogTo"].idLocal();
const logFromTypeLinkId = package["LogFrom"].idLocal();
const logTreeTreeIncludeDownLogFromTypeLinkId = package["LogTreeTreeIncludeDownLogFrom"].idLocal();
const logAuthorTypeLinkId = package["LogAuthor"].idLocal();
const logTreeTreeIncludeDownLogAuthorTypeLinkId = package["LogTreeTreeIncludeDownLogAuthor"].idLocal();
const logTypeTypeLinkId = package["LogType"].idLocal();
const logTreeTreeIncludeDownLogTypeTypeLinkId = package["LogTreeTreeIncludeDownLogType"].idLocal();
const logDeleteTypeLinkId = package["LogDelete"].idLocal();
const logTreeIncludeNodeLogDeleteTypeLinkId = package["LogTreeIncludeNodeLogDelete"].idLocal();
const logUpdateTypeLinkId = package["LogUpdate"].idLocal();
const logTreeIncludeNodeLogUpdateTypeLinkId = package["LogTreeIncludeNodeLogUpdate"].idLocal();
const logNumberTypeLinkId = package["LogNumber"].idLocal();
const logNumberValueTypeTypeLinkId = package["LogNumberValueType"].idLocal();
const logTreeTreeIncludeFromCurrentLogNumberTypeLinkId = package["LogTreeTreeIncludeFromCurrentLogNumber"].idLocal();
const logInsertTypeLinkId = package["LogInsert"].idLocal();
const logTreeIncludeNodeLogInsertTypeLinkId = package["LogTreeIncludeNodeLogInsert"].idLocal();
const logIdTypeLinkId = package["LogId"].idLocal();
const logTreeTreeIncludeDownLogIdTypeLinkId = package["LogTreeTreeIncludeDownLogId"].idLocal();
const insertHandlerCodeTypeLinkId = package["InsertHandlerCode"].idLocal();
const insertHandlerTypeLinkId = package["InsertHandler"].idLocal();
const deleteHandlerCodeTypeLinkId = package["DeleteHandlerCode"].idLocal();
const deleteHandlerTypeLinkId = package["DeleteHandler"].idLocal();
const updateHandlerCodeTypeLinkId = package["UpdateHandlerCode"].idLocal();
const updateHandlerTypeLinkId = package["UpdateHandler"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const logTree = package["LogTree"].name;
const treeIncludeNodeAny = package["TreeIncludeNodeAny"].name;
const logString = package["LogString"].name;
const logStringValueType = package["LogStringValueType"].name;
const logTreeTreeIncludeFromCurrentLogString = package["LogTreeTreeIncludeFromCurrentLogString"].name;
const logObject = package["LogObject"].name;
const logObjectValueType = package["LogObjectValueType"].name;
const logTreeTreeIncludeDownLogObjectLink = package["LogTreeTreeIncludeDownLogObjectLink"].name;
const logTo = package["LogTo"].name;
const logTreeTreeIncludeDownLogTo = package["LogTreeTreeIncludeDownLogTo"].name;
const logFrom = package["LogFrom"].name;
const logTreeTreeIncludeDownLogFrom = package["LogTreeTreeIncludeDownLogFrom"].name;
const logAuthor = package["LogAuthor"].name;
const logTreeTreeIncludeDownLogAuthor = package["LogTreeTreeIncludeDownLogAuthor"].name;
const logType = package["LogType"].name;
const logTreeTreeIncludeDownLogType = package["LogTreeTreeIncludeDownLogType"].name;
const logDelete = package["LogDelete"].name;
const logTreeIncludeNodeLogDelete = package["LogTreeIncludeNodeLogDelete"].name;
const logUpdate = package["LogUpdate"].name;
const logTreeIncludeNodeLogUpdate = package["LogTreeIncludeNodeLogUpdate"].name;
const logNumber = package["LogNumber"].name;
const logNumberValueType = package["LogNumberValueType"].name;
const logTreeTreeIncludeFromCurrentLogNumber = package["LogTreeTreeIncludeFromCurrentLogNumber"].name;
const logInsert = package["LogInsert"].name;
const logTreeIncludeNodeLogInsert = package["LogTreeIncludeNodeLogInsert"].name;
const logId = package["LogId"].name;
const logTreeTreeIncludeDownLogId = package["LogTreeTreeIncludeDownLogId"].name;
const insertHandlerCode = package["InsertHandlerCode"].name;
const insertHandler = package["InsertHandler"].name;
const deleteHandlerCode = package["DeleteHandlerCode"].name;
const deleteHandler = package["DeleteHandler"].name;
const updateHandlerCode = package["UpdateHandlerCode"].name;
const updateHandler = package["UpdateHandler"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/logger',
    });
  }


      /**
      @example
      #### Use id method to get the id of the LogTree link
      ```ts
      const package = new Package({deep});
      const logTreeTypeLinkId = await package["LogTree"].id();
      ```
      #### Use localId method to get the local id of the LogTree link
      ```ts
      const package = new Package({deep});
      const logTreeTypeLinkId = await package["LogTree"].localId();
      ```
      #### Use name field to get the name of the LogTree link
      ```ts
      const package = new Package({deep});
      const logTree = await package["LogTree"].name;
      ```
      */
      public "LogTree" = this.createEntity("LogTree");
      /**
      @example
      #### Use id method to get the id of the TreeIncludeNodeAny link
      ```ts
      const package = new Package({deep});
      const treeIncludeNodeAnyTypeLinkId = await package["TreeIncludeNodeAny"].id();
      ```
      #### Use localId method to get the local id of the TreeIncludeNodeAny link
      ```ts
      const package = new Package({deep});
      const treeIncludeNodeAnyTypeLinkId = await package["TreeIncludeNodeAny"].localId();
      ```
      #### Use name field to get the name of the TreeIncludeNodeAny link
      ```ts
      const package = new Package({deep});
      const treeIncludeNodeAny = await package["TreeIncludeNodeAny"].name;
      ```
      */
      public "TreeIncludeNodeAny" = this.createEntity("TreeIncludeNodeAny");
      /**
      @example
      #### Use id method to get the id of the LogString link
      ```ts
      const package = new Package({deep});
      const logStringTypeLinkId = await package["LogString"].id();
      ```
      #### Use localId method to get the local id of the LogString link
      ```ts
      const package = new Package({deep});
      const logStringTypeLinkId = await package["LogString"].localId();
      ```
      #### Use name field to get the name of the LogString link
      ```ts
      const package = new Package({deep});
      const logString = await package["LogString"].name;
      ```
      */
      public "LogString" = this.createEntity("LogString");
      /**
      @example
      #### Use id method to get the id of the LogStringValueType link
      ```ts
      const package = new Package({deep});
      const logStringValueTypeTypeLinkId = await package["LogStringValueType"].id();
      ```
      #### Use localId method to get the local id of the LogStringValueType link
      ```ts
      const package = new Package({deep});
      const logStringValueTypeTypeLinkId = await package["LogStringValueType"].localId();
      ```
      #### Use name field to get the name of the LogStringValueType link
      ```ts
      const package = new Package({deep});
      const logStringValueType = await package["LogStringValueType"].name;
      ```
      */
      public "LogStringValueType" = this.createEntity("LogStringValueType");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeFromCurrentLogString link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeFromCurrentLogStringTypeLinkId = await package["LogTreeTreeIncludeFromCurrentLogString"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeFromCurrentLogString link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeFromCurrentLogStringTypeLinkId = await package["LogTreeTreeIncludeFromCurrentLogString"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeFromCurrentLogString link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeFromCurrentLogString = await package["LogTreeTreeIncludeFromCurrentLogString"].name;
      ```
      */
      public "LogTreeTreeIncludeFromCurrentLogString" = this.createEntity("LogTreeTreeIncludeFromCurrentLogString");
      /**
      @example
      #### Use id method to get the id of the LogObject link
      ```ts
      const package = new Package({deep});
      const logObjectTypeLinkId = await package["LogObject"].id();
      ```
      #### Use localId method to get the local id of the LogObject link
      ```ts
      const package = new Package({deep});
      const logObjectTypeLinkId = await package["LogObject"].localId();
      ```
      #### Use name field to get the name of the LogObject link
      ```ts
      const package = new Package({deep});
      const logObject = await package["LogObject"].name;
      ```
      */
      public "LogObject" = this.createEntity("LogObject");
      /**
      @example
      #### Use id method to get the id of the LogObjectValueType link
      ```ts
      const package = new Package({deep});
      const logObjectValueTypeTypeLinkId = await package["LogObjectValueType"].id();
      ```
      #### Use localId method to get the local id of the LogObjectValueType link
      ```ts
      const package = new Package({deep});
      const logObjectValueTypeTypeLinkId = await package["LogObjectValueType"].localId();
      ```
      #### Use name field to get the name of the LogObjectValueType link
      ```ts
      const package = new Package({deep});
      const logObjectValueType = await package["LogObjectValueType"].name;
      ```
      */
      public "LogObjectValueType" = this.createEntity("LogObjectValueType");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeDownLogObjectLink link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogObjectLinkTypeLinkId = await package["LogTreeTreeIncludeDownLogObjectLink"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeDownLogObjectLink link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogObjectLinkTypeLinkId = await package["LogTreeTreeIncludeDownLogObjectLink"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeDownLogObjectLink link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogObjectLink = await package["LogTreeTreeIncludeDownLogObjectLink"].name;
      ```
      */
      public "LogTreeTreeIncludeDownLogObjectLink" = this.createEntity("LogTreeTreeIncludeDownLogObjectLink");
      /**
      @example
      #### Use id method to get the id of the LogTo link
      ```ts
      const package = new Package({deep});
      const logToTypeLinkId = await package["LogTo"].id();
      ```
      #### Use localId method to get the local id of the LogTo link
      ```ts
      const package = new Package({deep});
      const logToTypeLinkId = await package["LogTo"].localId();
      ```
      #### Use name field to get the name of the LogTo link
      ```ts
      const package = new Package({deep});
      const logTo = await package["LogTo"].name;
      ```
      */
      public "LogTo" = this.createEntity("LogTo");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeDownLogTo link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogToTypeLinkId = await package["LogTreeTreeIncludeDownLogTo"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeDownLogTo link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogToTypeLinkId = await package["LogTreeTreeIncludeDownLogTo"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeDownLogTo link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogTo = await package["LogTreeTreeIncludeDownLogTo"].name;
      ```
      */
      public "LogTreeTreeIncludeDownLogTo" = this.createEntity("LogTreeTreeIncludeDownLogTo");
      /**
      @example
      #### Use id method to get the id of the LogFrom link
      ```ts
      const package = new Package({deep});
      const logFromTypeLinkId = await package["LogFrom"].id();
      ```
      #### Use localId method to get the local id of the LogFrom link
      ```ts
      const package = new Package({deep});
      const logFromTypeLinkId = await package["LogFrom"].localId();
      ```
      #### Use name field to get the name of the LogFrom link
      ```ts
      const package = new Package({deep});
      const logFrom = await package["LogFrom"].name;
      ```
      */
      public "LogFrom" = this.createEntity("LogFrom");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeDownLogFrom link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogFromTypeLinkId = await package["LogTreeTreeIncludeDownLogFrom"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeDownLogFrom link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogFromTypeLinkId = await package["LogTreeTreeIncludeDownLogFrom"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeDownLogFrom link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogFrom = await package["LogTreeTreeIncludeDownLogFrom"].name;
      ```
      */
      public "LogTreeTreeIncludeDownLogFrom" = this.createEntity("LogTreeTreeIncludeDownLogFrom");
      /**
      @example
      #### Use id method to get the id of the LogAuthor link
      ```ts
      const package = new Package({deep});
      const logAuthorTypeLinkId = await package["LogAuthor"].id();
      ```
      #### Use localId method to get the local id of the LogAuthor link
      ```ts
      const package = new Package({deep});
      const logAuthorTypeLinkId = await package["LogAuthor"].localId();
      ```
      #### Use name field to get the name of the LogAuthor link
      ```ts
      const package = new Package({deep});
      const logAuthor = await package["LogAuthor"].name;
      ```
      */
      public "LogAuthor" = this.createEntity("LogAuthor");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeDownLogAuthor link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogAuthorTypeLinkId = await package["LogTreeTreeIncludeDownLogAuthor"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeDownLogAuthor link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogAuthorTypeLinkId = await package["LogTreeTreeIncludeDownLogAuthor"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeDownLogAuthor link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogAuthor = await package["LogTreeTreeIncludeDownLogAuthor"].name;
      ```
      */
      public "LogTreeTreeIncludeDownLogAuthor" = this.createEntity("LogTreeTreeIncludeDownLogAuthor");
      /**
      @example
      #### Use id method to get the id of the LogType link
      ```ts
      const package = new Package({deep});
      const logTypeTypeLinkId = await package["LogType"].id();
      ```
      #### Use localId method to get the local id of the LogType link
      ```ts
      const package = new Package({deep});
      const logTypeTypeLinkId = await package["LogType"].localId();
      ```
      #### Use name field to get the name of the LogType link
      ```ts
      const package = new Package({deep});
      const logType = await package["LogType"].name;
      ```
      */
      public "LogType" = this.createEntity("LogType");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeDownLogType link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogTypeTypeLinkId = await package["LogTreeTreeIncludeDownLogType"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeDownLogType link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogTypeTypeLinkId = await package["LogTreeTreeIncludeDownLogType"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeDownLogType link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogType = await package["LogTreeTreeIncludeDownLogType"].name;
      ```
      */
      public "LogTreeTreeIncludeDownLogType" = this.createEntity("LogTreeTreeIncludeDownLogType");
      /**
      @example
      #### Use id method to get the id of the LogDelete link
      ```ts
      const package = new Package({deep});
      const logDeleteTypeLinkId = await package["LogDelete"].id();
      ```
      #### Use localId method to get the local id of the LogDelete link
      ```ts
      const package = new Package({deep});
      const logDeleteTypeLinkId = await package["LogDelete"].localId();
      ```
      #### Use name field to get the name of the LogDelete link
      ```ts
      const package = new Package({deep});
      const logDelete = await package["LogDelete"].name;
      ```
      */
      public "LogDelete" = this.createEntity("LogDelete");
      /**
      @example
      #### Use id method to get the id of the LogTreeIncludeNodeLogDelete link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogDeleteTypeLinkId = await package["LogTreeIncludeNodeLogDelete"].id();
      ```
      #### Use localId method to get the local id of the LogTreeIncludeNodeLogDelete link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogDeleteTypeLinkId = await package["LogTreeIncludeNodeLogDelete"].localId();
      ```
      #### Use name field to get the name of the LogTreeIncludeNodeLogDelete link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogDelete = await package["LogTreeIncludeNodeLogDelete"].name;
      ```
      */
      public "LogTreeIncludeNodeLogDelete" = this.createEntity("LogTreeIncludeNodeLogDelete");
      /**
      @example
      #### Use id method to get the id of the LogUpdate link
      ```ts
      const package = new Package({deep});
      const logUpdateTypeLinkId = await package["LogUpdate"].id();
      ```
      #### Use localId method to get the local id of the LogUpdate link
      ```ts
      const package = new Package({deep});
      const logUpdateTypeLinkId = await package["LogUpdate"].localId();
      ```
      #### Use name field to get the name of the LogUpdate link
      ```ts
      const package = new Package({deep});
      const logUpdate = await package["LogUpdate"].name;
      ```
      */
      public "LogUpdate" = this.createEntity("LogUpdate");
      /**
      @example
      #### Use id method to get the id of the LogTreeIncludeNodeLogUpdate link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogUpdateTypeLinkId = await package["LogTreeIncludeNodeLogUpdate"].id();
      ```
      #### Use localId method to get the local id of the LogTreeIncludeNodeLogUpdate link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogUpdateTypeLinkId = await package["LogTreeIncludeNodeLogUpdate"].localId();
      ```
      #### Use name field to get the name of the LogTreeIncludeNodeLogUpdate link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogUpdate = await package["LogTreeIncludeNodeLogUpdate"].name;
      ```
      */
      public "LogTreeIncludeNodeLogUpdate" = this.createEntity("LogTreeIncludeNodeLogUpdate");
      /**
      @example
      #### Use id method to get the id of the LogNumber link
      ```ts
      const package = new Package({deep});
      const logNumberTypeLinkId = await package["LogNumber"].id();
      ```
      #### Use localId method to get the local id of the LogNumber link
      ```ts
      const package = new Package({deep});
      const logNumberTypeLinkId = await package["LogNumber"].localId();
      ```
      #### Use name field to get the name of the LogNumber link
      ```ts
      const package = new Package({deep});
      const logNumber = await package["LogNumber"].name;
      ```
      */
      public "LogNumber" = this.createEntity("LogNumber");
      /**
      @example
      #### Use id method to get the id of the LogNumberValueType link
      ```ts
      const package = new Package({deep});
      const logNumberValueTypeTypeLinkId = await package["LogNumberValueType"].id();
      ```
      #### Use localId method to get the local id of the LogNumberValueType link
      ```ts
      const package = new Package({deep});
      const logNumberValueTypeTypeLinkId = await package["LogNumberValueType"].localId();
      ```
      #### Use name field to get the name of the LogNumberValueType link
      ```ts
      const package = new Package({deep});
      const logNumberValueType = await package["LogNumberValueType"].name;
      ```
      */
      public "LogNumberValueType" = this.createEntity("LogNumberValueType");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeFromCurrentLogNumber link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeFromCurrentLogNumberTypeLinkId = await package["LogTreeTreeIncludeFromCurrentLogNumber"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeFromCurrentLogNumber link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeFromCurrentLogNumberTypeLinkId = await package["LogTreeTreeIncludeFromCurrentLogNumber"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeFromCurrentLogNumber link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeFromCurrentLogNumber = await package["LogTreeTreeIncludeFromCurrentLogNumber"].name;
      ```
      */
      public "LogTreeTreeIncludeFromCurrentLogNumber" = this.createEntity("LogTreeTreeIncludeFromCurrentLogNumber");
      /**
      @example
      #### Use id method to get the id of the LogInsert link
      ```ts
      const package = new Package({deep});
      const logInsertTypeLinkId = await package["LogInsert"].id();
      ```
      #### Use localId method to get the local id of the LogInsert link
      ```ts
      const package = new Package({deep});
      const logInsertTypeLinkId = await package["LogInsert"].localId();
      ```
      #### Use name field to get the name of the LogInsert link
      ```ts
      const package = new Package({deep});
      const logInsert = await package["LogInsert"].name;
      ```
      */
      public "LogInsert" = this.createEntity("LogInsert");
      /**
      @example
      #### Use id method to get the id of the LogTreeIncludeNodeLogInsert link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogInsertTypeLinkId = await package["LogTreeIncludeNodeLogInsert"].id();
      ```
      #### Use localId method to get the local id of the LogTreeIncludeNodeLogInsert link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogInsertTypeLinkId = await package["LogTreeIncludeNodeLogInsert"].localId();
      ```
      #### Use name field to get the name of the LogTreeIncludeNodeLogInsert link
      ```ts
      const package = new Package({deep});
      const logTreeIncludeNodeLogInsert = await package["LogTreeIncludeNodeLogInsert"].name;
      ```
      */
      public "LogTreeIncludeNodeLogInsert" = this.createEntity("LogTreeIncludeNodeLogInsert");
      /**
      @example
      #### Use id method to get the id of the LogId link
      ```ts
      const package = new Package({deep});
      const logIdTypeLinkId = await package["LogId"].id();
      ```
      #### Use localId method to get the local id of the LogId link
      ```ts
      const package = new Package({deep});
      const logIdTypeLinkId = await package["LogId"].localId();
      ```
      #### Use name field to get the name of the LogId link
      ```ts
      const package = new Package({deep});
      const logId = await package["LogId"].name;
      ```
      */
      public "LogId" = this.createEntity("LogId");
      /**
      @example
      #### Use id method to get the id of the LogTreeTreeIncludeDownLogId link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogIdTypeLinkId = await package["LogTreeTreeIncludeDownLogId"].id();
      ```
      #### Use localId method to get the local id of the LogTreeTreeIncludeDownLogId link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogIdTypeLinkId = await package["LogTreeTreeIncludeDownLogId"].localId();
      ```
      #### Use name field to get the name of the LogTreeTreeIncludeDownLogId link
      ```ts
      const package = new Package({deep});
      const logTreeTreeIncludeDownLogId = await package["LogTreeTreeIncludeDownLogId"].name;
      ```
      */
      public "LogTreeTreeIncludeDownLogId" = this.createEntity("LogTreeTreeIncludeDownLogId");
      /**
      @example
      #### Use id method to get the id of the InsertHandlerCode link
      ```ts
      const package = new Package({deep});
      const insertHandlerCodeTypeLinkId = await package["InsertHandlerCode"].id();
      ```
      #### Use localId method to get the local id of the InsertHandlerCode link
      ```ts
      const package = new Package({deep});
      const insertHandlerCodeTypeLinkId = await package["InsertHandlerCode"].localId();
      ```
      #### Use name field to get the name of the InsertHandlerCode link
      ```ts
      const package = new Package({deep});
      const insertHandlerCode = await package["InsertHandlerCode"].name;
      ```
      */
      public "InsertHandlerCode" = this.createEntity("InsertHandlerCode");
      /**
      @example
      #### Use id method to get the id of the InsertHandler link
      ```ts
      const package = new Package({deep});
      const insertHandlerTypeLinkId = await package["InsertHandler"].id();
      ```
      #### Use localId method to get the local id of the InsertHandler link
      ```ts
      const package = new Package({deep});
      const insertHandlerTypeLinkId = await package["InsertHandler"].localId();
      ```
      #### Use name field to get the name of the InsertHandler link
      ```ts
      const package = new Package({deep});
      const insertHandler = await package["InsertHandler"].name;
      ```
      */
      public "InsertHandler" = this.createEntity("InsertHandler");
      /**
      @example
      #### Use id method to get the id of the DeleteHandlerCode link
      ```ts
      const package = new Package({deep});
      const deleteHandlerCodeTypeLinkId = await package["DeleteHandlerCode"].id();
      ```
      #### Use localId method to get the local id of the DeleteHandlerCode link
      ```ts
      const package = new Package({deep});
      const deleteHandlerCodeTypeLinkId = await package["DeleteHandlerCode"].localId();
      ```
      #### Use name field to get the name of the DeleteHandlerCode link
      ```ts
      const package = new Package({deep});
      const deleteHandlerCode = await package["DeleteHandlerCode"].name;
      ```
      */
      public "DeleteHandlerCode" = this.createEntity("DeleteHandlerCode");
      /**
      @example
      #### Use id method to get the id of the DeleteHandler link
      ```ts
      const package = new Package({deep});
      const deleteHandlerTypeLinkId = await package["DeleteHandler"].id();
      ```
      #### Use localId method to get the local id of the DeleteHandler link
      ```ts
      const package = new Package({deep});
      const deleteHandlerTypeLinkId = await package["DeleteHandler"].localId();
      ```
      #### Use name field to get the name of the DeleteHandler link
      ```ts
      const package = new Package({deep});
      const deleteHandler = await package["DeleteHandler"].name;
      ```
      */
      public "DeleteHandler" = this.createEntity("DeleteHandler");
      /**
      @example
      #### Use id method to get the id of the UpdateHandlerCode link
      ```ts
      const package = new Package({deep});
      const updateHandlerCodeTypeLinkId = await package["UpdateHandlerCode"].id();
      ```
      #### Use localId method to get the local id of the UpdateHandlerCode link
      ```ts
      const package = new Package({deep});
      const updateHandlerCodeTypeLinkId = await package["UpdateHandlerCode"].localId();
      ```
      #### Use name field to get the name of the UpdateHandlerCode link
      ```ts
      const package = new Package({deep});
      const updateHandlerCode = await package["UpdateHandlerCode"].name;
      ```
      */
      public "UpdateHandlerCode" = this.createEntity("UpdateHandlerCode");
      /**
      @example
      #### Use id method to get the id of the UpdateHandler link
      ```ts
      const package = new Package({deep});
      const updateHandlerTypeLinkId = await package["UpdateHandler"].id();
      ```
      #### Use localId method to get the local id of the UpdateHandler link
      ```ts
      const package = new Package({deep});
      const updateHandlerTypeLinkId = await package["UpdateHandler"].localId();
      ```
      #### Use name field to get the name of the UpdateHandler link
      ```ts
      const package = new Package({deep});
      const updateHandler = await package["UpdateHandler"].name;
      ```
      */
      public "UpdateHandler" = this.createEntity("UpdateHandler");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
