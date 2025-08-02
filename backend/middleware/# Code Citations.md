# Code Citations

## License: unknown

https://github.com/dubeymnthn/sandhara/blob/86d05540ad86fcf530c0235959bb4e5221303863/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(
```

## License: unknown

https://github.com/ChristonCardoza/My-Projects/blob/892284c4e5e4ff5876a69103acc068a91a722120/MERN-CHAT-APP/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(
```

## License: unknown

https://github.com/gavin-crowley/React/blob/1d6d6b9d4b01d18768a04530baf8da28544bdea4/Piyush/decouple-notezipper/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(
```

## License: unknown

https://github.com/piyush-eon/mern-chat-app/blob/ae4103fcf692d8d4b5e5f8563aff29d1768634f0/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(
```

## License: unknown

https://github.com/dubeymnthn/sandhara/blob/86d05540ad86fcf530c0235959bb4e5221303863/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];


```

## License: unknown

https://github.com/ChristonCardoza/My-Projects/blob/892284c4e5e4ff5876a69103acc068a91a722120/MERN-CHAT-APP/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];


```

## License: unknown

https://github.com/gavin-crowley/React/blob/1d6d6b9d4b01d18768a04530baf8da28544bdea4/Piyush/decouple-notezipper/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];


```

## License: unknown

https://github.com/Sagarsim/simply-chat/blob/355d8293b9f0e4aa3586d32c7c6d0d6ad82665e5/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];


```

## License: unknown

https://github.com/piyush-eon/mern-chat-app/blob/ae4103fcf692d8d4b5e5f8563aff29d1768634f0/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];


```

## License: unknown

https://github.com/dubeymnthn/sandhara/blob/86d05540ad86fcf530c0235959bb4e5221303863/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401
```

## License: unknown

https://github.com/ChristonCardoza/My-Projects/blob/892284c4e5e4ff5876a69103acc068a91a722120/MERN-CHAT-APP/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401
```

## License: unknown

https://github.com/gavin-crowley/React/blob/1d6d6b9d4b01d18768a04530baf8da28544bdea4/Piyush/decouple-notezipper/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401
```

## License: unknown

https://github.com/Sagarsim/simply-chat/blob/355d8293b9f0e4aa3586d32c7c6d0d6ad82665e5/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401
```

## License: unknown

https://github.com/piyush-eon/mern-chat-app/blob/ae4103fcf692d8d4b5e5f8563aff29d1768634f0/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401
```

## License: unknown

https://github.com/dubeymnthn/sandhara/blob/86d05540ad86fcf530c0235959bb4e5221303863/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module
```

## License: unknown

https://github.com/ChristonCardoza/My-Projects/blob/892284c4e5e4ff5876a69103acc068a91a722120/MERN-CHAT-APP/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module
```

## License: unknown

https://github.com/gavin-crowley/React/blob/1d6d6b9d4b01d18768a04530baf8da28544bdea4/Piyush/decouple-notezipper/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module
```

## License: unknown

https://github.com/Sagarsim/simply-chat/blob/355d8293b9f0e4aa3586d32c7c6d0d6ad82665e5/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module
```

## License: unknown

https://github.com/piyush-eon/mern-chat-app/blob/ae4103fcf692d8d4b5e5f8563aff29d1768634f0/backend/middleware/authMiddleware.js

```
);
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module
```
