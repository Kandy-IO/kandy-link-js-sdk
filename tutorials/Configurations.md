---
layout: page
categories: quickstarts-javascript
title: Configurations
permalink: /quickstarts/javascript/link/Configurations
---

# Kandy Configurations

The first step for any application is to initialize Kandy.js. When doing this, you can customize certain features by providing a configurations object. Kandy's configuration object is separated by feature, and is provided to the Kandy Factory as seen in the example below.

```javascript 
// Initialize an instance of Kandy.js.
import { create } from kandy
const kandy = create({
    authentication: {
        subscription: {
            server: '$SUBSCRIPTIONFQDN$'
        },
        websocket: {
            server: '$WEBSOCKETFQDN$'
        }
    },
    call: {
        serverTurnCredentials: true,
        iceServers:[
            {
                url: '$KANDYTURN1$',
                credentials: ''
            },
            {
                url: '$KANDYTURN2$',
                credentials: ''
            },
            {
                url: '$KANDYSTUN1$',
                credentials: ''
            },
            {
                url: '$KANDYSTUN2$',
                credentials: ''
            }
        ]
    },
    logs: {
        // Log output configs.
    },
    // Other feature configs.
    ...
});
```

In most cases, the default values will suffice for an application, but specifying your own configurations allows you to customize certain behaviours. The exception is the authentication configurations, which are always required. This quickstart will showcase a few samples of why you may want to use certain configurations. For a full list of the possible configurations, see the [Configuration Documentation](../../references/newLink#configurations).

## Example Configurations

### Logs

The Logs configs are used to change the severity of logging output from Kandy.js. This allows for more logged messages, such as debug information, warnings, and errors, which can help to explain what Kandy is doing.

```javascript
logs: {
  // Set the log level to 'debug' to output more detailed logs. Default is 'warn'.
  logLevel: 'debug'
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

The Authentication configs are used to specify the backend service that Kandy.js should connect to.The value provided is the host for the Kandy Link that the application is targeting.
Also if the Kandy Link is deployed on-prem, it will be up to the user to define the host.
Note: It is important to always include these configurations.

```javascript
authentication: {
    subscription: {
        server: '$SUBSCRIPTIONFQDN$'
    },
    websocket: {
        server: '$WEBSOCKETFQDN$'
    }
},
call: {
    serverTurnCredentials: true,
    iceServers:[
        {
            url: '$KANDYTURN1$',
            credentials: ''
        },
        {
            url: '$KANDYTURN2$',
            credentials: ''
        },
        {
            url: '$KANDYSTUN1$',
            credentials: ''
        },
        {
            url: '$KANDYSTUN2$',
            credentials: ''
        }
    ]
}
```

Examples of the Kandy Link Systems include:

NA:

- RESTURL: spidr-ucc.genband.com port 443
- WebSocketURL: spidr-ucc.genband.com port 443
- iceServers:
  - turn-ucc-1.genband.com port 3478 for STUN and 443 for TURNS
  - turn-ucc-2.genband.com port 3478 for STUN and 443 for TURNS

EMEA:

- RESTURL: spidr-em.genband.com port 443
- WebSocketURL: spidr-em.genband.com port 443
- iceServers:
  - turn-em-1.genband.com port 3478 for STUN and 443 for TURNS
  - turn-em-2.genband.com port 3478 for STUN and 443 for TURNS

APAC:

- RESTURL: spidr-ap.genband.com port 443
- WebSocketURL: spidr-ap.genband.com port 443
- iceServers:
  - turn-ap-1.genband.com port 3478 for STUN and 443 for TURNS
  - turn-ap-2.genband.com port 3478 for STUN and 443 for TURNS

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

