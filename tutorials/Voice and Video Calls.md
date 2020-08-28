---
layout: page
categories: quickstarts-javascript
title: Voice and Video Calls
permalink: /quickstarts/javascript/link/Voice%20%26%20Video%20Calls
---

# Voice and Video Calls

In this quickstart, we will cover the basics of making IP calls with Kandy. Code snippets will be used to demonstrate call usage of Kandy.js, and together these snippets will form a working demo application that can be viewed at the end.

For information about other call features, such as mid-call operations or screensharing, please refer to their respective quickstarts.

## Call Configs

When initalizing Kandy.js, we provide the URLs for the ICE servers we want to use, as part of call configurations.

To learn more about call configs, refer to the [Configurations Quickstart](Configurations).

```javascript 
// Setup Kandy with "audio call by default" and server configurations.
import { create } from kandy
const kandy = create({
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
});
```

After that, the user will need to connect to Kandy. We won't cover authentication in this quickstart, so we'll take a shortcut and steal the connect code from the [User Connection Quickstart](User%20Connect), except for the button part. So the user will automatically login after initialization.

## User Interface

To interact with our demo application, we will have a basic UI that allows us to make outgoing calls and respond to incoming calls. The UI will be kept very simple, as it is not the focus of this quickstart, so it will be a straightforward set of elements for user input.

```html
<div>
  <fieldset>
    <legend>Make a Call</legend>
    <!-- User input for making a call. -->
    <input type="button" value="Make Call" onclick="makeCall();" />
    to <input type="text" id="callee" /> with video
    <input type="checkbox" id="make-with-video" />
  </fieldset>

  <fieldset>
    <legend>Respond to a Call</legend>
    <!-- User input for responding to an incoming call. -->
    <input type="button" value="Answer Call" onclick="answerCall();" />
    with video <input type="checkbox" id="answer-with-video" />
    <input type="button" value="Reject Call" onclick="rejectCall();" />
  </fieldset>

  <fieldset>
    <legend>End a Call</legend>
    <!-- User input for ending an ongoing call. -->
    <input type="button" value="End Call" onclick="endCall();" />
  </fieldset>

  <fieldset>
    <!-- Message output container. -->
    <legend>Messages</legend>
    <div id="messages"></div>
  </fieldset>
</div>
```

To display information to the user, a `log` function will be used to append new messages to the "messages" element shown above.

In this tutorial, we'll use media containers. These containers will be used to hold the media from both sides of the call. A remote media container will _always_ be needed for a call (both voice and video), and a local media container will be needed if you would like to display the local video of the call. The HTML elements that Kandy.js will use as media containers are empty `<div>`s.

```html
<!-- Media containers. -->
Remote video:
<div id="remote-container"></div>

Local video:
<div id="local-container"></div>
```

With that, there is nothing more needed for the user interface.

## Step 1: Making a Call

When the user clicks on the 'Make Call' button, we want our `makeCall` function to retrieve the information needed for the call, then make the call. Since we did not specify default media containers on initialization, we will specify them as we make the call.

If the call is made with video, to make it easier differentiating the local video stream versus remote video stream, we'll use diferent container sizes for local & remote video capturing. Thus, the user answering the call will thus provide a larger video capture then the user making the call.

For this tutorial, calls are made with audio-only by default.

```javascript
/*
 *  Voice and Video Call functionality.
 */

// Variable to keep track of the call.
let callId

// Get user input and make a call to the callee.
function makeCall () {
  // Gather call options.
  let callee = document.getElementById('callee').value
  let withVideo = document.getElementById('make-with-video').checked

  log('Making call to ' + callee)

  let mediaConstraints = {
    audio: true,
    video: withVideo
  }

  if (withVideo) {
    // user making a call will send a smaller video stream 200 x 200 pixels
    mediaConstraints.videoOptions = { width: 200, height: 200 }
  }

  callId = kandy.call.make(callee, mediaConstraints)
}
```

Kandy's `makeCall` will return a unique ID that is used to keep track of the call. This ID will be used to perform operations involving the call.

## Step 2: Responding to a Call

If our user receives an incoming call, they will be able to either answer or reject it with our demo application. Our demo's `answerCall` and `rejectCall` functions will invoke Kandy's functions of the same names.

```javascript
// Answer an incoming call.
function answerCall () {
  // Gather call options.
  let withVideo = document.getElementById('answer-with-video').checked

  // Retrieve call state.
  let call = kandy.call.getById(callId)
  log('Answering call from ' + call.from)

  let mediaConstraints = {
    audio: true,
    video: withVideo
  }

  if (withVideo) {
    // user answering a call will send a larger video stream (400 x 400 pixels)
    mediaConstraints.videoOptions = { width: 400, height: 400 }
  }

  kandy.call.answer(callId, mediaConstraints)
}

// Reject an incoming call.
function rejectCall () {
  // Retrieve call state.
  let call = kandy.call.getById(callId)
  log('Rejecting call from ' + call.from)

  kandy.call.reject(callId)
}
```

Note that `callId` has not been defined above when receiving a call. The user will receive the `callId` from an event, which will be covered in Step 4.

## Step 3: Ending a Call

If our user has an ongoing call, they can end it by providing the call's ID to Kandy's `call.end` function, which is what our demo application will do.

```javascript
// End an ongoing call.
function endCall () {
  // Retrieve call state.
  let call = kandy.call.getById(callId)
  log('Ending call with ' + call.from)

  kandy.call.end(callId)
}
```

## Step 4: Call Events

As we use Kandy's call functions, Kandy will emit events that provide feedback about the changes in call state. We will set listeners for these events to keep our demo application informed about Kandy state.

### `call:start`

The `call:start` event informs us that an outgoing call that we made has successfully been initialized, and the callee should receive a notification about the incoming call.

```javascript
// Set listener for successful call starts.
kandy.on('call:start', function (params) {
  log('Call successfully started. Waiting for response.')
})
```

### `call:error` and `media:error`

The `call:error` event informs us that a problem was encountered with the call. The `media:error` event is more specialized in that it indicates that the call could not be made because webRTC media could not be initialized. Both events provide information about the error that occured.

```javascript
// Set listener for generic call errors.
kandy.on('call:error', function (params) {
  log('Error: Encountered error on call: ' + params.error.message)
})

// Set listener for call media errors.
kandy.on('media:error', function (params) {
  log('Error: Call encountered media error: ' + params.error.message)
})
```

### `call:stateChange`

As the call is acted upon (such as answered or rejected), its state will change. We can react to changes in the call by listening for the `call:stateChange` event. For our demo application, we will only act if the call was ended.
To see all possible call states supported in this SDK, see `api.call.states` in API documentation.

```javascript
// Set listener for changes in a call's state.
kandy.on('call:stateChange', function (params) {
  // Retrieve call state.
  const call = kandy.call.getById(params.callId)

  if (params.error && params.error.message) {
    log('Error: ' + params.error.message)
  }
  log('Call state changed from ' + params.previous.state + ' to ' + call.state)

  // If the call ended, stop tracking the callId.
  if (params.state === 'ENDED') {
    callId = null
  }
})
```

### `call:receive`

The `call:receive` event informs us that we have received an incoming call. The event provides the ID of the call, then we can get more information about it from Kandy state.

```javascript
// Set listener for incoming calls.
kandy.on('call:receive', function (params) {
  // Keep track of the callId.
  callId = params.callId

  // Retrieve call information.
  call = kandy.call.getById(params.callId)
  log('Received incoming call from ' + call.from)
})
```

### `call:newTrack`

The `call:newTrack` event informs us that a new Track has been added to the call. The Track may have been added by either the local user or remote user. More information on the track can be retrieved by using the `media.getTrackById` API.

We will use this event to render local visual media and remote audio/visual media into the respective containers whenever a new track is added to the call.

```javascript
// Set listener for new tracks.
kandy.on('call:newTrack', function (params) {
  // Check whether the new track was a local track or not.
  if (params.local) {
    // Only render local visual media into the local container.
    const localTrack = kandy.media.getTrackById(params.trackId)
    if (localTrack.kind === 'video') {
      kandy.media.renderTracks([params.trackId], '#local-container')
    }
  } else {
    // Render the remote media into the remote container.
    kandy.media.renderTracks([params.trackId], '#remote-container')
  }
})
```

### `call:trackEnded`

The `call:trackEnded` event informs us that a Track has been removed from a Call. The Track may have been removed by either the local user or remote user using the {@link call.removeMedia} API. Tracks are also removed from Calls
automatically while the Call is on hold.

```javascript
// Set listener for ended tracks.
kandy.on('call:trackEnded', function (params) {
  // Check whether the ended track was a local track or not.
  if (params.local) {
    // Remove the track from the local container.
    kandy.media.removeTracks([params.trackId], '#local-container')
  } else {
    // Remove the track from the remote container.
    kandy.media.removeTracks([params.trackId], '#remote-container')
  }
})
```

### `media:sourceUnmuted`

**Note**

This event is only required if you are using the `unified-plan` as the `sdpSemantics` setting in your configuration. This setting describes the formatting for the SDP to use for call control. This setting will become the default in an upcoming release.

The `media:sourceUnmuted` event informs us that a Track has resumed receiving media from it's source. Remote Tracks also resume receiving media from Calls automatically when the Call is taken off hold. It's recommended that you render the tracks in your rendering containers when you receive this event.

We will use this event to render remote audio/visual media and local audio from the media containers whenever a track is resumes receiving media on the call.

```javascript
// Set listener for new tracks.
kandy.on('media:sourceUnmuted', function (params) {
  // Retrieve call and track state.
  let call = kandy.call.getById(callId)
  let track = kandy.media.getTrackById(params.trackId)

  // Re-render the media into the correct container.
  if (call.remoteTracks.includes(params.trackId)) {
    kandy.media.renderTracks([params.trackId], '#remote-container')
  } else if (call.localTracks.includes(params.trackId) && track.kind === 'video') {
    // We only want to render local video because local audio would cause an echo.
    kandy.media.renderTracks([params.trackId], '#local-container')
  }
})
```

### `media:sourceMuted`

**Note**

This event is only required if you are using the `unified-plan` as the `sdpSemantics` setting in your configuration. This setting describes the formatting for the SDP to use for call control. This setting will become the default in an upcoming release.

The `media:sourceMuted` event informs us that a Track has temporarily stopped receiving media from it's source. Remote Tracks also stop receiving media from Calls automatically while the Call is on hold. You don't need to remove these tracks when you get this event, however, you won't hear any audio and video will only show a black screen. It's recommended that you remove the tracks from your rendering container.

We will use this event to remove remote audio/visual media and local audio from the media containers whenever a track is muted on the call.

```javascript
// Set listener for ended tracks.
kandy.on('media:sourceMuted', function (params) {
  // Retrieve call state.
  let call = kandy.call.getById(callId)

  // Unrender the media from the correct container.
  if (call.remoteTracks.includes(params.trackId)) {
    kandy.media.removeTracks([params.trackId], '#remote-container')
  } else if (call.localTracks.includes(params.trackId)) {
    kandy.media.removeTracks([params.trackId], '#local-container')
  }
})
```

We can now call the demo application done. We've covered the basics of what is needed to allow a user to use call functionality.

## Live Demo

Want to play around with this example for yourself? Feel free to edit this code on Codepen.

<form action="https://codepen.io/pen/define" method="POST" target="_blank" class="codepen-form"><input type="hidden" name="data" value=' {&quot;js&quot;:&quot;/**\n * Kandy.io Voice and Video Call Demo\n */\n\n// Variables for connecting.\nvar username = &apos;UsernameHere&apos;\nvar password = &apos;PasswordHere&apos;\n\n// Setup Kandy with \&quot;audio call by default\&quot; and server configurations.\nconst { create } = Kandy\nconst kandy = create({\n  call: {\n    serverTurnCredentials: true,\n    iceServers: [\n      {\n        url: &apos;$KANDYTURN1$&apos;,\n        credentials: &apos;&apos;\n      },\n      {\n        url: &apos;$KANDYTURN2$&apos;,\n        credentials: &apos;&apos;\n      },\n      {\n        url: &apos;$KANDYSTUN1$&apos;,\n        credentials: &apos;&apos;\n      },\n      {\n        url: &apos;$KANDYSTUN2$&apos;,\n        credentials: &apos;&apos;\n      }\n    ]\n  },\n  authentication: {\n    server: {\n      base: &apos;$SUBSCRIPTIONFQDN$&apos;\n    }\n  },\n  subscription: {\n    websocket: {\n      server: &apos;$WEBSOCKETFQDN$&apos;\n    }\n  },\n  logs: {\n    logLevel: &apos;debug&apos;,\n    logActions: {\n      flattenActions: false,\n      actionOnly: false,\n      exposePayloads: true\n    },\n    enableFcsLogs: true\n  }\n})\n\n/*\n *  Authentication functionality.\n */\n\n// Set credentials, and subscribe the user with Kandy services.\nkandy.setCredentials({\n  username: username,\n  password: password\n})\n\n// Subscribe for services\nkandy.services.subscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;], { forceLogOut: true })\n\n// Setup a listener for changes in the connection state.\nkandy.on(&apos;auth:change&apos;, function () {\n  const user = kandy.getUserInfo()\n  log(&apos;Credentials &apos; + (user.username ? &apos;set&apos; : &apos;unset&apos;))\n})\n\n// Setup a listener for authentication errors.\nkandy.on(&apos;auth:error&apos;, function (params) {\n  log(&apos;Connect error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\n// Setup a listener for subscription changes\nkandy.on(&apos;subscription:change&apos;, function (params) {\n  const services = kandy.services.getSubscriptions()\n  const isSubscribed = services.subscribed.length > 0\n  document.getElementById(&apos;auth-state&apos;).innerHTML = &apos;Subscribed: &apos; + isSubscribed\n  log(&apos;Subscription state changed.&apos;)\n  log(&apos;Subscribed services: &apos; + services.subscribed)\n})\n\n// Setup a listener for resubscription events\nkandy.on(&apos;subscription:resub&apos;, function (params) {\n  log(&apos;Subscribed services: &apos; + params.isFailure ? &apos;Failed to resubscribe to services&apos; : &apos;Resubscribed to services&apos;)\n})\n\n// Setup a listener for subscription errors\nkandy.on(&apos;subscription:error&apos;, function (params) {\n  log(&apos;Subscription error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\n// Utility function for appending messages to the message div.\nfunction log (message) {\n  document.getElementById(&apos;messages&apos;).innerHTML += &apos;<div>&apos; + message + &apos;</div>&apos;\n}\n\n/*\n *  Voice and Video Call functionality.\n */\n\n// Variable to keep track of the call.\nlet callId\n\n// Get user input and make a call to the callee.\nfunction makeCall () {\n  // Gather call options.\n  let callee = document.getElementById(&apos;callee&apos;).value\n  let withVideo = document.getElementById(&apos;make-with-video&apos;).checked\n\n  log(&apos;Making call to &apos; + callee)\n\n  let mediaConstraints = {\n    audio: true,\n    video: withVideo\n  }\n\n  if (withVideo) {\n    // user making a call will send a smaller video stream 200 x 200 pixels\n    mediaConstraints.videoOptions = { width: 200, height: 200 }\n  }\n\n  callId = kandy.call.make(callee, mediaConstraints)\n}\n\n// Answer an incoming call.\nfunction answerCall () {\n  // Gather call options.\n  let withVideo = document.getElementById(&apos;answer-with-video&apos;).checked\n\n  // Retrieve call state.\n  let call = kandy.call.getById(callId)\n  log(&apos;Answering call from &apos; + call.from)\n\n  let mediaConstraints = {\n    audio: true,\n    video: withVideo\n  }\n\n  if (withVideo) {\n    // user answering a call will send a larger video stream (400 x 400 pixels)\n    mediaConstraints.videoOptions = { width: 400, height: 400 }\n  }\n\n  kandy.call.answer(callId, mediaConstraints)\n}\n\n// Reject an incoming call.\nfunction rejectCall () {\n  // Retrieve call state.\n  let call = kandy.call.getById(callId)\n  log(&apos;Rejecting call from &apos; + call.from)\n\n  kandy.call.reject(callId)\n}\n\n// End an ongoing call.\nfunction endCall () {\n  // Retrieve call state.\n  let call = kandy.call.getById(callId)\n  log(&apos;Ending call with &apos; + call.from)\n\n  kandy.call.end(callId)\n}\n\n// Set listener for successful call starts.\nkandy.on(&apos;call:start&apos;, function (params) {\n  log(&apos;Call successfully started. Waiting for response.&apos;)\n})\n\n// Set listener for generic call errors.\nkandy.on(&apos;call:error&apos;, function (params) {\n  log(&apos;Error: Encountered error on call: &apos; + params.error.message)\n})\n\n// Set listener for call media errors.\nkandy.on(&apos;media:error&apos;, function (params) {\n  log(&apos;Error: Call encountered media error: &apos; + params.error.message)\n})\n\n// Set listener for changes in a call&apos;s state.\nkandy.on(&apos;call:stateChange&apos;, function (params) {\n  // Retrieve call state.\n  const call = kandy.call.getById(params.callId)\n\n  if (params.error && params.error.message) {\n    log(&apos;Error: &apos; + params.error.message)\n  }\n  log(&apos;Call state changed from &apos; + params.previous.state + &apos; to &apos; + call.state)\n\n  // If the call ended, stop tracking the callId.\n  if (params.state === &apos;ENDED&apos;) {\n    callId = null\n  }\n})\n\n// Set listener for incoming calls.\nkandy.on(&apos;call:receive&apos;, function (params) {\n  // Keep track of the callId.\n  callId = params.callId\n\n  // Retrieve call information.\n  call = kandy.call.getById(params.callId)\n  log(&apos;Received incoming call from &apos; + call.from)\n})\n\n// Set listener for new tracks.\nkandy.on(&apos;call:newTrack&apos;, function (params) {\n  // Check whether the new track was a local track or not.\n  if (params.local) {\n    // Only render local visual media into the local container.\n    const localTrack = kandy.media.getTrackById(params.trackId)\n    if (localTrack.kind === &apos;video&apos;) {\n      kandy.media.renderTracks([params.trackId], &apos;#local-container&apos;)\n    }\n  } else {\n    // Render the remote media into the remote container.\n    kandy.media.renderTracks([params.trackId], &apos;#remote-container&apos;)\n  }\n})\n\n// Set listener for ended tracks.\nkandy.on(&apos;call:trackEnded&apos;, function (params) {\n  // Check whether the ended track was a local track or not.\n  if (params.local) {\n    // Remove the track from the local container.\n    kandy.media.removeTracks([params.trackId], &apos;#local-container&apos;)\n  } else {\n    // Remove the track from the remote container.\n    kandy.media.removeTracks([params.trackId], &apos;#remote-container&apos;)\n  }\n})\n\n// Set listener for new tracks.\nkandy.on(&apos;media:sourceUnmuted&apos;, function (params) {\n  // Retrieve call and track state.\n  let call = kandy.call.getById(callId)\n  let track = kandy.media.getTrackById(params.trackId)\n\n  // Re-render the media into the correct container.\n  if (call.remoteTracks.includes(params.trackId)) {\n    kandy.media.renderTracks([params.trackId], &apos;#remote-container&apos;)\n  } else if (call.localTracks.includes(params.trackId) && track.kind === &apos;video&apos;) {\n    // We only want to render local video because local audio would cause an echo.\n    kandy.media.renderTracks([params.trackId], &apos;#local-container&apos;)\n  }\n})\n\n// Set listener for ended tracks.\nkandy.on(&apos;media:sourceMuted&apos;, function (params) {\n  // Retrieve call state.\n  let call = kandy.call.getById(callId)\n\n  // Unrender the media from the correct container.\n  if (call.remoteTracks.includes(params.trackId)) {\n    kandy.media.removeTracks([params.trackId], &apos;#remote-container&apos;)\n  } else if (call.localTracks.includes(params.trackId)) {\n    kandy.media.removeTracks([params.trackId], &apos;#local-container&apos;)\n  }\n})\n\n&quot;,&quot;html&quot;:&quot;<div id=\&quot;auth-state\&quot;>Connected: false</div>\n\n<div>\n  <fieldset>\n    <legend>Make a Call</legend>\n    <!-- User input for making a call. -->\n    <input type=\&quot;button\&quot; value=\&quot;Make Call\&quot; onclick=\&quot;makeCall();\&quot; />\n    to <input type=\&quot;text\&quot; id=\&quot;callee\&quot; /> with video\n    <input type=\&quot;checkbox\&quot; id=\&quot;make-with-video\&quot; />\n  </fieldset>\n\n  <fieldset>\n    <legend>Respond to a Call</legend>\n    <!-- User input for responding to an incoming call. -->\n    <input type=\&quot;button\&quot; value=\&quot;Answer Call\&quot; onclick=\&quot;answerCall();\&quot; />\n    with video <input type=\&quot;checkbox\&quot; id=\&quot;answer-with-video\&quot; />\n    <input type=\&quot;button\&quot; value=\&quot;Reject Call\&quot; onclick=\&quot;rejectCall();\&quot; />\n  </fieldset>\n\n  <fieldset>\n    <legend>End a Call</legend>\n    <!-- User input for ending an ongoing call. -->\n    <input type=\&quot;button\&quot; value=\&quot;End Call\&quot; onclick=\&quot;endCall();\&quot; />\n  </fieldset>\n\n  <fieldset>\n    <!-- Message output container. -->\n    <legend>Messages</legend>\n    <div id=\&quot;messages\&quot;></div>\n  </fieldset>\n</div>\n\n<!-- Media containers. -->\nRemote video:\n<div id=\&quot;remote-container\&quot;></div>\n\nLocal video:\n<div id=\&quot;local-container\&quot;></div>\n\n&quot;,&quot;css&quot;:&quot;&quot;,&quot;title&quot;:&quot;Kandy.io Voice and Video Call Demo&quot;,&quot;editors&quot;:101,&quot;js_external&quot;:&quot;https://cdn.jsdelivr.net/gh/Kandy-IO/kandy-link-js-sdk@513/dist/kandy.js&quot;} '><input type="image" src="./TryItOn-CodePen.png"></form>

