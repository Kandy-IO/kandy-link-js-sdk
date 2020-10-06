---
layout: page
categories: quickstarts-javascript
title: User Connect
permalink: /quickstarts/javascript/link/User%20Connect
---

# Connecting and Disconnecting

In this quickstart we will cover how to connect and disconnect to the Kandy Platform using Kandy.js. We will provide snippets of code below, which together will form a working demo application.

The first step with Kandy.js is always to initialize it. You will need to know the server information for the Kandy platform that you are using for initialization. Depending on your platform, the only required configuration is the server address, as the others have generic defaults.

```javascript 
import { create } from kandy
const kandy = create({
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
})
```

To learn more about initializing Kandy, see our [Configuration Quickstart](Configurations).

Since we're going to be making a working demo, we also need some HTML. The HTML for this demo is quite simple.

```html
<div id="auth-state">Subscribed: false</div>

<input type="submit" id="loginBtn" value="Login" onclick="login();" />
<input type="submit" id="subscribeBtn" disabled value="Subscribe" onclick="subscribe();" />
<input type="submit" id="unsubscribeBtn" disabled value="Unsubscribe" onclick="unsubscribe();" />

<div id="messages"></div>
```

What we have is a simple div containing the subscribed state of our app, two buttons, and an element for logging messages to.

## Step 1: Setting credentials

To connect using Kandy, you will need two things:

1. A username. This is the full username of a user on your domain. (Example: your-user@your-domain.kandy.io)
1. A password. Don't worry, its safe with us.

With these two things, you can set your credentials and subscribe to services on Kandy.

```javascript
function login () {
  kandy.setCredentials({
    username: username,
    password: password
  })
}
```

## Step 2: Subscribe for services

To subscribe for services on Kandy, you need to have first set your credentials (see previous step). To subscribe for services you will call the `kandy.services.subscribe()` API function. This function takes two parameters, an array of service names and an options parameter. The only supported option is `forceLogOut`. When set to true this will ensure that this user is logged out of Kandy before attempting to connect and subscribe again.

```javascript
function subscribe () {
  kandy.services.subscribe(['call', 'Presence', 'IM'], { forceLogOut: true })
}
```

## Step 3: Connection Events

The `kandy.setCredentials()` and `kandy.services.subscribe()` functions do not return a value. Instead, Kandy.js uses events to tell you when something has changed. You can find a list of the authentication and subscription events associated with `connection` and `presence` API.

To subscribe to these events, you use `kandy.on()`. Here is the example for our demo app:

```javascript
kandy.on('auth:change', function () {
  const user = kandy.getUserInfo()
  document.getElementById('loginBtn').disabled = Boolean(user.username)
  document.getElementById('subscribeBtn').disabled = !Boolean(user.username)
  log('Credentials ' + (user.username ? 'set' : 'unset'))
})
```

If something goes wrong when we try to connect (invalid credentials maybe), we want to know. Kandy.js has an `auth:error` event to support this.

```javascript
// Listen for authentication errors.
kandy.on('auth:error', function (params) {
  log('Connect error: ' + params.error.message + ' (' + params.error.code + ')')
})
```

In the above piece of code we subscribe an anonymous function to the `auth:change` event. Now, whenever Kandy fires off an `auth:change` event, that function will be called. Inside this function we call `kandy.getConnection()`. This function returns an object that looks like so:

```javascript 
{ isConnected: true, isPending: false, error: undefined }
```

To learn more about the response, check the API documentation for `getConnection`.

We'll also want to subscribe for subscription events since we are subscribing for service notifications.

```javascript
kandy.on('subscription:change', function (params) {
  const services = kandy.services.getSubscriptions()
  const isSubscribed = services.subscribed.length > 0
  document.getElementById('auth-state').innerHTML = 'Subscribed: ' + isSubscribed
  document.getElementById('subscribeBtn').disabled = isSubscribed
  document.getElementById('unsubscribeBtn').disabled = !isSubscribed
  log('Subscription state changed.')
  log('Subscribed services: ' + services.subscribed)
})

kandy.on('subscription:resub', function (params) {
  log('Subscribed services: ' + params.isFailure ? 'Failed to resubscribe to services' : 'Resubscribed to services')
})

kandy.on('subscription:error', function (params) {
  log('Subscription error: ' + params.error.message + ' (' + params.error.code + ')')
})
```

## Step 4: Disconnecting

To disconnect and unsubscribe from services, you simply call unsubscribe and pass an array
of services you want to unsubscribe from.

```javascript
function unsubscribe () {
  kandy.services.unsubscribe(['call', 'Presence', 'IM'])
}
```

Calling this function will trigger a change in the subscription state, which in turn will trigger any listeners to the `subscription:change` event. You can therefore use your `subscription:change` listener to detect if the unsubscribe was successful.

In situations where the application is going to be used by another user and you want to protect their data privacy, the destroy function will tear down the SDK and render it unusable. Afterwards the SDK can be created again so no data is passed between users who shouldn't have access.

```javascript
function unsubscribe () {
  kandy.on('subscription:change', params => {
    const services = kandy.services.getSubscriptions()
    const isSubscribed = services.subscribed.length > 0
    if (isSubscribed === false) {
      // If user is not subscribed to services, then the user disconnected.
      kandy.destroy()
      document.getElementById('loginBtn').disabled = true
      document.getElementById('subscribeBtn').disabled = true
      document.getElementById('unsubscribeBtn').disabled = true
      log('Kandy SDK has been uninitialized, reload the page to reset tutorial.')
    }
  })
  kandy.services.unsubscribe(['call', 'Presence', 'IM'])
}
```

### Live Demo

Want to play around with this example for yourself? Feel free to edit this code on Codepen.

<form action="https://codepen.io/pen/define" method="POST" target="_blank" class="codepen-form"><input type="hidden" name="data" value=' {&quot;js&quot;:&quot;/**\n * Kandy.io Authentication Demo\n */\n\nconst { create } = Kandy\nconst kandy = create({\n  authentication: {\n    server: {\n      base: &apos;$SUBSCRIPTIONFQDN$&apos;\n    }\n  },\n  subscription: {\n    websocket: {\n      server: &apos;$WEBSOCKETFQDN$&apos;\n    }\n  },\n  call: {\n    serverTurnCredentials: true,\n    iceServers: [\n      {\n        url: &apos;$KANDYTURN1$&apos;,\n        credentials: &apos;&apos;\n      },\n      {\n        url: &apos;$KANDYTURN2$&apos;,\n        credentials: &apos;&apos;\n      },\n      {\n        url: &apos;$KANDYSTUN1$&apos;,\n        credentials: &apos;&apos;\n      },\n      {\n        url: &apos;$KANDYSTUN2$&apos;,\n        credentials: &apos;&apos;\n      }\n    ]\n  }\n})\n\nvar username = &apos;UsernameHere&apos;\nvar password = &apos;PasswordHere&apos;\n\nfunction login () {\n  kandy.setCredentials({\n    username: username,\n    password: password\n  })\n}\n\nfunction subscribe () {\n  kandy.services.subscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;], { forceLogOut: true })\n}\n\nkandy.on(&apos;auth:change&apos;, function () {\n  const user = kandy.getUserInfo()\n  document.getElementById(&apos;loginBtn&apos;).disabled = Boolean(user.username)\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = !Boolean(user.username)\n  log(&apos;Credentials &apos; + (user.username ? &apos;set&apos; : &apos;unset&apos;))\n})\n\n// Listen for authentication errors.\nkandy.on(&apos;auth:error&apos;, function (params) {\n  log(&apos;Connect error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\nkandy.on(&apos;subscription:change&apos;, function (params) {\n  const services = kandy.services.getSubscriptions()\n  const isSubscribed = services.subscribed.length > 0\n  document.getElementById(&apos;auth-state&apos;).innerHTML = &apos;Subscribed: &apos; + isSubscribed\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = isSubscribed\n  document.getElementById(&apos;unsubscribeBtn&apos;).disabled = !isSubscribed\n  log(&apos;Subscription state changed.&apos;)\n  log(&apos;Subscribed services: &apos; + services.subscribed)\n})\n\nkandy.on(&apos;subscription:resub&apos;, function (params) {\n  log(&apos;Subscribed services: &apos; + params.isFailure ? &apos;Failed to resubscribe to services&apos; : &apos;Resubscribed to services&apos;)\n})\n\nkandy.on(&apos;subscription:error&apos;, function (params) {\n  log(&apos;Subscription error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\nfunction unsubscribe () {\n  kandy.services.unsubscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;])\n}\n\nfunction unsubscribe () {\n  kandy.on(&apos;subscription:change&apos;, params => {\n    const services = kandy.services.getSubscriptions()\n    const isSubscribed = services.subscribed.length > 0\n    if (isSubscribed === false) {\n      // If user is not subscribed to services, then the user disconnected.\n      kandy.destroy()\n      document.getElementById(&apos;loginBtn&apos;).disabled = true\n      document.getElementById(&apos;subscribeBtn&apos;).disabled = true\n      document.getElementById(&apos;unsubscribeBtn&apos;).disabled = true\n      log(&apos;Kandy SDK has been uninitialized, reload the page to reset tutorial.&apos;)\n    }\n  })\n  kandy.services.unsubscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;])\n}\n\n// Utility function for appending messages to the message div.\nfunction log (message) {\n  document.getElementById(&apos;messages&apos;).innerHTML += &apos;<div>&apos; + message + &apos;</div>&apos;\n}\n\n&quot;,&quot;html&quot;:&quot;<div id=\&quot;auth-state\&quot;>Subscribed: false</div>\n\n<input type=\&quot;submit\&quot; id=\&quot;loginBtn\&quot; value=\&quot;Login\&quot; onclick=\&quot;login();\&quot; />\n<input type=\&quot;submit\&quot; id=\&quot;subscribeBtn\&quot; disabled value=\&quot;Subscribe\&quot; onclick=\&quot;subscribe();\&quot; />\n<input type=\&quot;submit\&quot; id=\&quot;unsubscribeBtn\&quot; disabled value=\&quot;Unsubscribe\&quot; onclick=\&quot;unsubscribe();\&quot; />\n\n<div id=\&quot;messages\&quot;></div>\n\n&quot;,&quot;css&quot;:&quot;&quot;,&quot;title&quot;:&quot;Kandy.io Authentication Demo&quot;,&quot;editors&quot;:&quot;101&quot;,&quot;js_external&quot;:&quot;https://cdn.jsdelivr.net/gh/Kandy-IO/kandy-link-js-sdk@550/dist/kandy.js&quot;} '><input type="image" src="./TryItOn-CodePen.png"></form>

