# Survser NPM Wrapper

This is the official NPM wrapper for integrating Survser with your application.

The Survser NPM package seamlessly integrates the Survser JavaScript client into your application. It provides a wrapper object that encapsulates all client methods. Method calls are queued and executed once the Survser JavaScript client is fully ready to go. Make sure you use this package on the client side.

## Installation

`npm install survser-js`

## Usage

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
