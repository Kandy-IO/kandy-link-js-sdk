---
layout: page
categories: quickstarts-javascript
title: Configurations
permalink: /quickstarts/javascript/link/Configurations
---

# Kandy Configurations

The first step for any application is to initialize Kandy.js. When doing this, you can customize certain features by providing a configurations object.

Kandy's configuration object is separated by feature, and is provided to the Kandy Factory as seen in the example below, as a sample.
To use an alternative configuration (e.g. a default one), or to further modify any of its properties, see the 'Example Configurations' section, below.

```javascript 
// Initialize an instance of Kandy.js.
import { create } from kandy

// Sample configuration object.
const configuration = {
    authentication: {
      server: {
        base: '$SUBSCRIPTIONFQDN$'
      }
    },
    subscription: {
      websocket: {
        server: '$WEBSOCKETFQDN$',
      },
    },
    call: {
        serverTurnCredentials: true,
        iceServers:[
            {
                url: '$KANDYTURN1$'
            },
            {
                url: '$KANDYTURN2$'
            },
            {
                url: '$KANDYSTUN1$'
            },
            {
                url: '$KANDYSTUN2$'
            }
        ]
    },
    logs: {
        // Log output configs.
    },
    // Other feature configs.
    ...
}

// Invoke the factory create to instantiate Kandy.js by providing the configuration object.
const client = create(configuration)
```

In most cases, the default values will suffice for an application, but specifying your own configurations allows you to customize certain behaviours. The exception is the authentication configurations, which are always required. This quickstart will showcase a few samples of why you may want to use certain configurations. For a full list of the possible configurations, see the documentation for `configuration` API.

## Example Configurations

### Default configurations

To get you started more quickly, we provide some default configurations which can be used as a starting point and make configuration easier. See [Kandy.js Support Libraries](https://github.com/Kandy-IO/kandy-js-support).

Note that each default configuration is based on a targeted geographical area.
See [this config]($DEFAULTCONFIGURL$) which applies for this particular tutorial.

To use a default configuration, the first step is install the configuration library as a project dependency.

via npm:

```bash
npm install '$DEFAULTCONFIGNAME$'
```

via yarn:

```bash
yarn add '$DEFAULTCONFIGNAME$'
```

And then use it:

```javascript
import { config } from '$DEFAULTCONFIGNAME$'
import { create } from '@kandy-io/link-sdk'

const client = create(config)

// Use the SDK.
```

Furthermore, this default configuration object can also be used as a base for further
customization, by modifying its content.

```javascript
import { config as defaultConfig } from '$DEFAULTCONFIGNAME$'
import { create } from '@kandy-io/link-sdk'

const config = {
  ...defaultConfig,
  // Now override some of the default configs properties, such as the 'logs'.
  logs: {
    logLevel: 'debug'
  }
}

const client = create(config)

// Use the SDK.
```

The following sections describe various properties within the configuration object in more detail.

Each section refers to a specific Kandy.js feature that in general maps to that configuration property.
For example, modifying the value of `config.logs` property in your configuration object, will affect how the Kandy.js 'Logs' feature will behave at runtime.

### Logs

The Logs configs are used to change the SDK's internal logging behaviour. The SDK will generate logs that provide information about what it is doing, such as info and debug messages, warnings, and errors. These configurations allow an application to select which levels they would like to see logs for, and how those logs should be handled.

By default, the SDK will include logs for all levels (the default `logLevel` is 'debug') and will print the logs to the browser's console (via the default `handler` function) at their appropriate level (for example, 'info' logs will use `console.info` and 'debug' logs will use `console.debug`).

These defaults work well for development purposes, but may conflict with browser or other behaviours. For example, since the default Log Handler uses the browser's console, the browser may also filter logs based on its own settings. Many browsers do not show the 'debug' level by default, so it would be an extra step for a user to enable those logs in their browser. A custom Log Handler can be used to avoid this behaviour conflict, by always using the same level for the browser's console. For this reason, it is recommended that all applications actively set the `logLevel` and `handler` configurations for logs, to ensure the SDK's logging behaviour is well suited for your application and its users.

```javascript
logs: {
  // Set the log level to 'debug' to output more detailed logs.
  logLevel: 'debug',
  // Provide a custom Log Handler function.
  handler: function yourLogHandler (logEntry) { ... }
}
```

### Call

The Call configs are used to initialize call/network settings. This can customize how the library interacts with the network or provide the library with resources for low-level network operations.

```javascript
call: {
  // Specify the TURN/STUN servers that should be used.
  iceServers: [
    {
      urls: 'turns:...',
      // ...
    },
    // ...
  ],
  // Specify that credentials should be fetched from the server.
  serverTurnCredentials: true
}
```

### Authentication

The Authentication configs are used to specify the backend service that Kandy.js should connect to. The value provided is the host for the Kandy Link that the application is targeting.
Also if the Kandy Link is deployed on-prem, it will be up to the user to define the host.
Note: It is important to always include these configurations.

```javascript
authentication: {
  server: {
    base: '$SUBSCRIPTIONFQDN$'
  }
}
```

### Subscription

The Subscription config is used to specify websocket that Kandy.js should connect to. The value provided is the host for the Kandy Link that the application is targeting.
Also if the Kandy Link is deployed on-prem, it will be up to the user to define the host.
Note: It is important to always include these configurations.

```javascript
subscription: {
  websocket: {
    server: '$WEBSOCKETFQDN$',
  },
}
```

Examples of the Kandy Link Systems include:

NA:

- RESTURL: webrtc-na.kandy.io port 443
- WebSocketURL: webrtc-na.kandy.io port 443
- iceServers:
  - turn-na-1.kandy.io port 3478 for STUN and 443 for TURNS
  - turn-na-2.kandy.io port 3478 for STUN and 443 for TURNS

EMEA:

- RESTURL: webrtc-em.kandy.io port 443
- WebSocketURL: webrtc-em.kandy.io port 443
- iceServers:
  - turn-em-1.kandy.io port 3478 for STUN and 443 for TURNS
  - turn-em-2.kandy.io port 3478 for STUN and 443 for TURNS

APAC:

- RESTURL: webrtc-ap.kandy.io port 443
- WebSocketURL: webrtc-ap.kandy.io port 443
- iceServers:
  - turn-ap-1.kandy.io port 3478 for STUN and 443 for TURNS
  - turn-ap-2.kandy.io port 3478 for STUN and 443 for TURNS

### Connectivity

The Connectivity configs are used to customize the behaviour of the websocket and connectivity checks. These settings should only be needed if the default configs are not sufficient, and you want to tweak the behaviour for your application's scenario.

```javascript
connectivity: {
    // Specify that a keepAlive ping should be sent every 30 seconds,
    // and an error should be reported after 3 missed pong responses.
    pingInterval: 30000, // milliseconds
    maxMissedPings: 3
}
```

```javascript
connectivity: {
    // Specify that a keepAlive ping should be sent every 60 seconds,
    // and if unable to connect should try to reconnect 3 times before
    // throwing an error. Specify to wait 10 seconds before attempting
    // to connect, and double that time every connection attempt, while
    // keeping maximum wait time under 300 seconds.
    pingInterval: 60000, // milliseconds
    reconnectLimit: 3,
    reconnectDelay: 10000, // milliseconds
    reconnectTimeMultiplier: 2,
    reconnectTimeLimit: 300000, // milliseconds
    autoReconnect: true,
    maxMissedPings: 3,
    checkConnectivity: true
}
```

