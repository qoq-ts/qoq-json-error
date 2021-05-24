# qoq-json-error

JSON error support for qoq based on [koa-json-error](https://github.com/koajs/json-error)

# Installation

```bash
yarn add qoq-json-error
```

# Usage

```typescript
import { WebSlotManager } from 'qoq';
import { JsonError } from 'qoq-json-error';

export webSlots = WebSlotManager
  .use(new JsonError((err) => {
    return {
        // Copy some attributes from
        // the original error
        status: err.status,
        message: err.message,

        // ...or add some custom ones
        success: false,
        reason: 'Unexpected'
    }
  }));
```

# Options

@see [koa-json-error](https://github.com/koajs/json-error#koa-json-error)
