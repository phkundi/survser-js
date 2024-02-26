# Survser NPM Wrapper

This is the official NPM wrapper for integrating Survser with your application.

The Survser NPM package seamlessly integrates the Survser JavaScript client into your application. It provides a wrapper object that encapsulates all client methods. Method calls are queued and executed once the Survser JavaScript client is fully ready to go. Make sure you use this package on the client side.

## Installation

```bash
npm install survser-js
```

## Usage

Exact implementation might depend on the specific framework you are using. Refer to our examples or our [documentation](https://docs.survser.com) for more information.

```js
import _survser from "survser-js";

if (typeof window !== "undefined") {
  _survser("setProject", "project_id");
  _survser("setAPIKey", "api_key");
}

export default function Example() {
  return <div></div>;
}
```

## Identifying Users

If you want to identify your users in order to attribute survey responses to them, you can do so. Make sure to include a unique user identifier in the `id` field.

```js
_survser("identifyUser", {
  id: "123456",
  email: "julia@celebrity.com",
  name: "Julia Roberts",
});
```
