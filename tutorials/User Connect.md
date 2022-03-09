---
layout: page
categories: quickstarts-javascript
title: User Connect
permalink: /quickstarts/javascript/link/User%20Connect
---

# Connecting and Disconnecting

In this quickstart we will cover how to connect and disconnect to the Kandy Platform using Kandy.js. We will provide snippets of code below, which together will form a working demo application.

The first step with Kandy.js is always to initialize it. You will need to know the server information for the Kandy platform that you are using for initialization. However, for convenience, we'll use the default configuration which can be used as a starting point.

```javascript 
import { config } from '$DEFAULTCONFIGNAME$'
import { create } from '@kandy-io/link-sdk'

const client = create(config)
```

To learn more about initializing Kandy, see our [Configuration Quickstart](Configurations).

Since we're going to be making a working demo, we also need some HTML. The HTML for this demo is quite simple.

```html
<div>
  <fieldset>
    <legend>Set Credentials using your account information</legend>
    User Email: <input type="text" id="username" /> Password:<input type="password" id="password" />
    <input type="submit" id="setCredentials" value="setCredentials" onclick="setCredentials();" />
    Current user: <span id="current-user">None.</span>
  </fieldset>
  <fieldset>
    <legend>Subscribe</legend>
    <input type="submit" id="subscribeBtn" disabled value="Subscribe" onclick="subscribe();" />
    <input type="submit" id="unsubscribeBtn" disabled value="Unsubscribe" onclick="unsubscribe();" />
  </fieldset>
  <div id="messages"></div>
</div>
```

What we have is a simple div containing the subscribed state of our app, two buttons, and an element for logging messages to.

## Step 1: Setting credentials

To connect using Kandy, you will need two things:

1. A username. This is the full username of a user on your domain. (Example: your-user@your-domain.kandy.io)
1. A password. Don't worry, its safe with us.

With these two things, you can set your credentials and subscribe to services on Kandy. This is performed with the following code. Note, the `client.setCredentials` function does not return a value.

```javascript
function setCredentials () {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  client.setCredentials({ username, password })
}
```

## Step 2: Subscribe for services

To subscribe for services on Kandy, you need to have first set your credentials (see previous step). To subscribe for services you will call the `client.services.subscribe()` API function. This function takes two parameters, an array of service names and an options parameter. The only supported option is `forceLogOut`. When set to true this will ensure that this user is logged out of Kandy before attempting to connect and subscribe again.

```javascript
function subscribe () {
  client.services.subscribe(['call', 'Presence', 'IM'], { forceLogOut: true })
}
```

## Step 3: Connection Events

The `client.setCredentials()` and `client.services.subscribe()` functions do not return a value. Instead, Kandy.js uses events to tell you when something has changed. To subscribe to these events, you use the `client.on()` API.

For credentials and authentication, the `auth:change` and `request:error` events are used for feedback. The `auth:change` event will be emitted when the credentials provided to the SDK have changed. The `request:error` event will be emitted when the SDK encounters an authorization issue using the credentials, which may mean the credentials are invalid or expired. In the below snippet, we set listeners for these two events.

```javascript
client.on('auth:change', function () {
  const user = client.getUserInfo()
  document.getElementById('current-user').innerHTML = user.username || 'None.'
  document.getElementById('setCredentials').disabled = Boolean(user.username)
  document.getElementById('subscribeBtn').disabled = !Boolean(user.username)
  log('Credentials ' + (user.username ? 'set' : 'unset'))
})

// Listen for server authorization errors.
client.on('request:error', function (params) {
  log(params.error.message)
})
```

Note: The `request:error` event is not only used during User Connect; it may be emitted for authorization issues when communicating with the server for any feature. This event will be emitted _in addition_ to any regular error event for a feature.)

For service subscription, the `subscription:change`, `subscription:resub`, and `subscription:error` events are used. The `subscription:change` event is emitted when the state of a service subscription has changed. The `subscription:resub` event is emitted when a subscription has been refreshed. The `subscription:error` event is emitted when an issue has occurred with the subscription process.

```javascript
// Listen for subscription changes.
client.on('subscription:change', params => {
  const services = client.services.getSubscriptions()
  const isSubscribed = services.subscribed.length > 0
  document.getElementById('subscribeBtn').disabled = isSubscribed
  document.getElementById('unsubscribeBtn').disabled = !isSubscribed
  document.getElementById('setCredentials').disabled = isSubscribed
  log('Subscription state changed.')
})

client.on('subscription:resub', function (params) {
  log('Subscribed services: ' + params.isFailure ? 'Failed to resubscribe to services' : 'Resubscribed to services')
})

client.on('subscription:error', function (params) {
  log('Subscription error: ' + params.error.message + ' (' + params.error.code + ')')

  document.getElementById('setCredentials').disabled = false
})
```

## Step 4: Disconnecting

To disconnect and unsubscribe from services, you simply call unsubscribe and pass an array
of services you want to unsubscribe from.

```javascript 
function unsubscribe () {
  client.services.unsubscribe(['call', 'Presence', 'IM'])
}
```

Calling this function will trigger a change in the subscription state, which in turn will trigger any listeners to the `subscription:change` event. You can therefore use your `subscription:change` listener to detect if the unsubscribe was successful.

In situations where the application is going to be used by another user and you want to protect their data privacy, the destroy function will tear down the SDK and render it unusable. Afterwards the SDK can be created again so no data is passed between users who shouldn't have access.

```javascript
function unsubscribe () {
  client.on('subscription:change', params => {
    const services = client.services.getSubscriptions()
    const isSubscribed = services.subscribed.length > 0
    if (isSubscribed === false) {
      document.getElementById('subscribeBtn').disabled = true
      document.getElementById('unsubscribeBtn').disabled = true
      document.getElementById('setCredentials').disabled = true
      // If user is not subscribed to services, then the user disconnected.
      client.destroy()
      log('Kandy SDK has been uninitialized, reload the page to reset tutorial.')
    }
    log('Subscription state changed.')
  })
  client.services.unsubscribe(['call', 'Presence', 'IM'])
}
```

### Live Demo

Want to play around with this example for yourself? Feel free to edit this code on Codepen.

<form action="https://codepen.io/pen/define" method="POST" target="_blank" class="codepen-form"><input type="hidden" name="data" value=' {&quot;js&quot;:&quot;/**\n * Kandy.io Authentication Demo\n */\n\nconst defaultConfig = $DEFAULTCONFIGACCESS$\nconst { create } = Kandy\n\nconst client = create(defaultConfig)\n\nfunction setCredentials () {\n  const username = document.getElementById(&apos;username&apos;).value\n  const password = document.getElementById(&apos;password&apos;).value\n\n  client.setCredentials({ username, password })\n}\n\nfunction subscribe () {\n  client.services.subscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;], { forceLogOut: true })\n}\n\nclient.on(&apos;auth:change&apos;, function () {\n  const user = client.getUserInfo()\n  document.getElementById(&apos;current-user&apos;).innerHTML = user.username || &apos;None.&apos;\n  document.getElementById(&apos;setCredentials&apos;).disabled = Boolean(user.username)\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = !Boolean(user.username)\n  log(&apos;Credentials &apos; + (user.username ? &apos;set&apos; : &apos;unset&apos;))\n})\n\n// Listen for server authorization errors.\nclient.on(&apos;request:error&apos;, function (params) {\n  log(params.error.message)\n})\n\n// Listen for subscription changes.\nclient.on(&apos;subscription:change&apos;, params => {\n  const services = client.services.getSubscriptions()\n  const isSubscribed = services.subscribed.length > 0\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = isSubscribed\n  document.getElementById(&apos;unsubscribeBtn&apos;).disabled = !isSubscribed\n  document.getElementById(&apos;setCredentials&apos;).disabled = isSubscribed\n  log(&apos;Subscription state changed.&apos;)\n})\n\nclient.on(&apos;subscription:resub&apos;, function (params) {\n  log(&apos;Subscribed services: &apos; + params.isFailure ? &apos;Failed to resubscribe to services&apos; : &apos;Resubscribed to services&apos;)\n})\n\nclient.on(&apos;subscription:error&apos;, function (params) {\n  log(&apos;Subscription error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n\n  document.getElementById(&apos;setCredentials&apos;).disabled = false\n})\n\nfunction unsubscribe () {\n  client.on(&apos;subscription:change&apos;, params => {\n    const services = client.services.getSubscriptions()\n    const isSubscribed = services.subscribed.length > 0\n    if (isSubscribed === false) {\n      document.getElementById(&apos;subscribeBtn&apos;).disabled = true\n      document.getElementById(&apos;unsubscribeBtn&apos;).disabled = true\n      document.getElementById(&apos;setCredentials&apos;).disabled = true\n      // If user is not subscribed to services, then the user disconnected.\n      client.destroy()\n      log(&apos;Kandy SDK has been uninitialized, reload the page to reset tutorial.&apos;)\n    }\n    log(&apos;Subscription state changed.&apos;)\n  })\n  client.services.unsubscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;])\n}\n\n// Utility function for appending messages to the message div.\nfunction log (message) {\n  document.getElementById(&apos;messages&apos;).innerHTML += &apos;<div>&apos; + message + &apos;</div>&apos;\n}\n\n&quot;,&quot;html&quot;:&quot;<script src=\&quot;https://cdn.jsdelivr.net/gh/Kandy-IO/kandy-link-js-sdk@844/dist/kandy.js\&quot;></script>\n<script src=\&quot;$DEFAULTCONFIGURL$\&quot;></script>\n\n<div>\n  <fieldset>\n    <legend>Set Credentials using your account information</legend>\n    User Email: <input type=\&quot;text\&quot; id=\&quot;username\&quot; /> Password:<input type=\&quot;password\&quot; id=\&quot;password\&quot; />\n    <input type=\&quot;submit\&quot; id=\&quot;setCredentials\&quot; value=\&quot;setCredentials\&quot; onclick=\&quot;setCredentials();\&quot; />\n    Current user: <span id=\&quot;current-user\&quot;>None.</span>\n  </fieldset>\n  <fieldset>\n    <legend>Subscribe</legend>\n    <input type=\&quot;submit\&quot; id=\&quot;subscribeBtn\&quot; disabled value=\&quot;Subscribe\&quot; onclick=\&quot;subscribe();\&quot; />\n    <input type=\&quot;submit\&quot; id=\&quot;unsubscribeBtn\&quot; disabled value=\&quot;Unsubscribe\&quot; onclick=\&quot;unsubscribe();\&quot; />\n  </fieldset>\n  <div id=\&quot;messages\&quot;></div>\n</div>\n\n&quot;,&quot;css&quot;:&quot;&quot;,&quot;title&quot;:&quot;Kandy.io Authentication Demo&quot;,&quot;editors&quot;:&quot;101&quot;} '><input type="image" src="./TryItOn-CodePen.png"></form>

