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

When initializing Kandy.js, we provide the URLs for the ICE servers we want to use, as part of call configurations.

To learn more about call configs, refer to the [Configurations Quickstart](Configurations).

```javascript 
// Setup Kandy with default configuration.
import { config } from '$DEFAULTCONFIGNAME$'
import { create } from '@kandy-io/link-sdk'

const client = create(config)
```

After that, the user will need to connect to Kandy. We won't cover authentication in this quickstart, so we'll take a shortcut and steal the connect code from the [User Connection Quickstart](User%20Connect), except for the button part. So the user will automatically login after initialization.

## User Interface

To interact with our demo application, we will have a basic UI that allows us to make outgoing calls and respond to incoming calls. The UI will be kept very simple, as it is not the focus of this quickstart, so it will be a straightforward set of elements for user input.

```html
<div>
  <fieldset>
    <legend>Set Credentials using your account information</legend>
    User Email: <input type="text" id="username" /> Password:<input type="password" id="password" />
    <input type="submit" id="setCredentials" value="setCredentials" onclick="setCredentials(username, password);" />
  </fieldset>
  <fieldset>
    <legend>Subscribe</legend>
    <input type="submit" id="subscribeBtn" disabled value="Subscribe" onclick="subscribe();" />
    <input type="submit" id="unsubscribeBtn" disabled value="Unsubscribe" onclick="unsubscribe();" />
  </fieldset>
  <div class="call-control">
    <fieldset>
      <legend>Make a Call</legend>
      <!-- User input for making a call. -->
      <input disabled type="button" value="Make Call" onclick="makeCall();" />
      to <input disabled type="text" id="callee" /> with video
      <input disabled type="checkbox" id="make-with-video" />
    </fieldset>

    <fieldset>
      <legend>Respond to a Call</legend>
      <!-- User input for responding to an incoming call. -->
      <input disabled type="button" value="Answer Call" onclick="answerCall();" />
      with video <input disabled type="checkbox" id="answer-with-video" />
      <input disabled type="button" value="Reject Call" onclick="rejectCall();" />
    </fieldset>

    <fieldset>
      <legend>End a Call</legend>
      <!-- User input for ending an ongoing call. -->
      <input disabled type="button" value="End Call" onclick="endCall();" />
    </fieldset>

    <fieldset>
      <!-- Message output container. -->
      <legend>Messages</legend>
      <div id="messages"></div>
    </fieldset>
  </div>
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

If the call is made with video, to make it easier differentiating the local video stream versus remote video stream, we'll use different container sizes for local & remote video capturing. Thus, the user answering the call will thus provide a larger video capture then the user making the call.

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

  callId = client.call.make(callee, mediaConstraints)
}
```

Kandy's `makeCall` will return a unique ID that is used to keep track of the call. This ID will be used to perform operations involving the call.

## Step 2: Responding to a Call

If our user receives an incoming call, they will be able to either answer or reject it with our demo application. Our demo's `answerCall` and `rejectCall` functions will invoke Kandy's functions of the same names.

Before answering the call, the application will have access to what media types have been offered by caller (as part of `call:receive` event's `mediaOffered` property). Currently two media types are supported: `audio` & `video`.

For simplicity, this tutorial application chooses to automatically disable 'with video' checkbox (for answering the call), if caller did not offer `video`.
However, a more elaborate application should present this information to user, in such a way that user can clearly understand what media are available for him/her to answer with.

```javascript
// Answer an incoming call.
function answerCall () {
  // Gather call options.
  let withVideo = document.getElementById('answer-with-video').checked

  // Retrieve call state.
  let call = client.call.getById(callId)
  log('Answering call from ' + call.from)

  let mediaConstraints = {
    audio: true,
    video: withVideo
  }

  if (withVideo) {
    // user answering a call will send a larger video stream (400 x 400 pixels)
    mediaConstraints.videoOptions = { width: 400, height: 400 }
  }

  client.call.answer(callId, mediaConstraints)
}

// Reject an incoming call.
function rejectCall () {
  // Retrieve call state.
  let call = client.call.getById(callId)
  log('Rejecting call from ' + call.from)

  client.call.reject(callId)
}
```

Note that `callId` has not been defined above when receiving a call. The user will receive the `callId` from an event, which will be covered in Step 4.

## Step 3: Ending a Call

If our user has an ongoing call, they can end it by providing the call's ID to Kandy's `call.end` function, which is what our demo application will do.

```javascript
// End an ongoing call.
function endCall () {
  // Retrieve call state.
  let call = client.call.getById(callId)
  log('Ending call with ' + call.from)

  client.call.end(callId)

  // Always re-enable this checkbox when call ends.
  document.getElementById('answer-with-video').disabled = false
}
```

## Step 4: Call Events

As we use Kandy's call functions, Kandy will emit events that provide feedback about the changes in call state. We will set listeners for these events to keep our demo application informed about Kandy state.

### `call:start`

The `call:start` event informs us that an outgoing call that we made has successfully been initialized, and the callee should receive a notification about the incoming call.

```javascript
// Set listener for successful call starts.
client.on('call:start', function (params) {
  log('Call successfully started. Waiting for response.')
})
```

### `call:error` and `media:error`

The `call:error` event informs us that a problem was encountered with the call. The `media:error` event is more specialized in that it indicates that the call could not be made because webRTC media could not be initialized. Both events provide information about the error that occurred.

```javascript
// Set listener for generic call errors.
client.on('call:error', function (params) {
  log('Error: Encountered error on call: ' + params.error.message)
})

// Set listener for call media errors.
client.on('media:error', function (params) {
  log('Error: Call encountered media error: ' + params.error.message)
})
```

### `call:stateChange`

As the call is acted upon (such as answered or rejected), its state will change. We can react to changes in the call by listening for the `call:stateChange` event. For our demo application, we will only act if the call was ended.
To see all possible call states supported in this SDK, see `api.call.states` in API documentation.

```javascript
// Set listener for changes in a call's state.
client.on('call:stateChange', function (params) {
  // Retrieve call state.
  const call = client.call.getById(params.callId)

  if (params.error && params.error.message) {
    log('Error: ' + params.error.message)
  }
  log('Call state changed from ' + params.previous.state + ' to ' + call.state)

  // If the call ended, stop tracking the callId.
  if (call.state === 'Ended') {
    callId = null

    // Always re-enable this checkbox when call ends.
    document.getElementById('answer-with-video').disabled = false
  }
})
```

### `call:receive`

The `call:receive` event informs us that we have received an incoming call. The event provides the ID of the call, then we can get more information about it from Kandy state.

```javascript
// Set listener for incoming calls.
client.on('call:receive', function (params) {
  // Keep track of the callId.
  callId = params.callId

  // Retrieve call information.
  call = client.call.getById(params.callId)

  // Find out what media types have been offered by caller
  // We'll make the assumtion here that audio media is always offered
  // while video is optional.
  const videoOffered = call.mediaOffered && call.mediaOffered.video
  const element = document.getElementById('answer-with-video')
  element.disabled = !videoOffered
  if (element.checked && !videoOffered) {
    // If caller did not offer video
    // .. then automatically uncheck the checkbox if it is checked
    element.checked = false
  }

  log('Received incoming call from ' + call.from)
})
```

### `call:newTrack`

The `call:newTrack` event informs us that a new Track has been added to the call. The Track may have been added by either the local user or remote user. More information on the track can be retrieved by using the `media.getTrackById` API.

We will use this event to render local visual media and remote audio/visual media into the respective containers whenever a new track is added to the call.

```javascript
// Set listener for new tracks.
client.on('call:newTrack', function (params) {
  // Check whether the new track was a local track or not.
  if (params.local) {
    // Only render local visual media into the local container.
    const localTrack = client.media.getTrackById(params.trackId)
    if (localTrack.kind === 'video') {
      client.media.renderTracks([params.trackId], '#local-container')
    }
  } else {
    // Render the remote media into the remote container.
    client.media.renderTracks([params.trackId], '#remote-container')
  }
})
```

### `call:trackEnded`

The `call:trackEnded` event informs us that a Track has been removed from a Call. The Track may have been removed by either the local user or remote user using the {@link call.removeMedia} API. Tracks are also removed from Calls
automatically while the Call is on hold.

```javascript
// Set listener for ended tracks.
client.on('call:trackEnded', function (params) {
  // Check whether the ended track was a local track or not.
  if (params.local) {
    // Remove the track from the local container.
    client.media.removeTracks([params.trackId], '#local-container')
  } else {
    // Remove the track from the remote container.
    client.media.removeTracks([params.trackId], '#remote-container')
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
client.on('media:sourceUnmuted', function (params) {
  // Retrieve call and track state.
  let call = client.call.getById(callId)
  let track = client.media.getTrackById(params.trackId)

  // Re-render the media into the correct container.
  if (call.remoteTracks.includes(params.trackId)) {
    client.media.renderTracks([params.trackId], '#remote-container')
  } else if (call.localTracks.includes(params.trackId) && track.kind === 'video') {
    // We only want to render local video because local audio would cause an echo.
    client.media.renderTracks([params.trackId], '#local-container')
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
client.on('media:sourceMuted', function (params) {
  // Retrieve call state.
  let call = client.call.getById(callId)

  // Unrender the media from the correct container.
  if (call.remoteTracks.includes(params.trackId)) {
    client.media.removeTracks([params.trackId], '#remote-container')
  } else if (call.localTracks.includes(params.trackId)) {
    client.media.removeTracks([params.trackId], '#local-container')
  }
})
```

We can now call the demo application done. We've covered the basics of what is needed to allow a user to use call functionality.

## Live Demo

Want to play around with this example for yourself? Feel free to edit this code on Codepen.

<form action="https://codepen.io/pen/define" method="POST" target="_blank" class="codepen-form"><input type="hidden" name="data" value=' {&quot;js&quot;:&quot;/**\n * Kandy.io Voice and Video Call Demo\n */\n\nconst defaultConfig = $DEFAULTCONFIGACCESS$\n\nconst { create } = Kandy\n\n// Setup Kandy with default configuration.\n// As part of configuration, we&apos;ll further apply some customization for logging.\nconst config = {\n  ...defaultConfig,\n  logs: {\n    logLevel: &apos;debug&apos;,\n    logActions: {\n      actionOnly: false,\n      exposePayloads: true\n    },\n    enableFcsLogs: true\n  }\n}\n\nconst client = create(config)\n\n/*\n *  Authentication functionality.\n */\nfunction setCredentials () {\n  const username = document.getElementById(&apos;username&apos;).value\n  const password = document.getElementById(&apos;password&apos;).value\n\n  client.setCredentials({ username, password })\n}\n\nfunction subscribe () {\n  client.services.subscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;], { forceLogOut: true })\n}\n\nfunction unsubscribe () {\n  client.services.unsubscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;])\n}\n\n// Enable/disable all children of a given node\nfunction disableInput (elements, disable) {\n  for (let i = 0; i < elements.length; i++) {\n    let nodes = elements[i].getElementsByTagName(&apos;input&apos;)\n    for (let j = 0; j < nodes.length; j++) {\n      nodes[j].disabled = disable\n    }\n  }\n}\n\n// Setup a listener for changes in the connection state.\nclient.on(&apos;auth:change&apos;, function () {\n  const user = client.getUserInfo()\n\n  document.getElementById(&apos;setCredentials&apos;).disabled = Boolean(user.username)\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = !Boolean(user.username)\n\n  log(&apos;Credentials &apos; + (user.username ? &apos;set&apos; : &apos;unset&apos;))\n})\n\n// Setup a listener for authentication errors.\nclient.on(&apos;auth:error&apos;, function (params) {\n  log(&apos;Connect error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\n// Setup a listener for subscription changes\nclient.on(&apos;subscription:change&apos;, function (params) {\n  const services = client.services.getSubscriptions()\n  const isSubscribed = services.subscribed.length > 0\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = isSubscribed\n  document.getElementById(&apos;unsubscribeBtn&apos;).disabled = !isSubscribed\n  document.getElementById(&apos;auth-state&apos;).innerHTML = &apos;Subscribed: &apos; + isSubscribed\n  disableInput(document.getElementsByClassName(&apos;call-control&apos;), !isSubscribed)\n  log(&apos;Subscription state changed.&apos;)\n  log(&apos;Subscribed services: &apos; + services.subscribed)\n})\n\n// Setup a listener for resubscription events\nclient.on(&apos;subscription:resub&apos;, function (params) {\n  log(&apos;Subscribed services: &apos; + params.isFailure ? &apos;Failed to resubscribe to services&apos; : &apos;Resubscribed to services&apos;)\n})\n\n// Setup a listener for subscription errors\nclient.on(&apos;subscription:error&apos;, function (params) {\n  log(&apos;Subscription error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\n// Utility function for appending messages to the message div.\nfunction log (message) {\n  document.getElementById(&apos;messages&apos;).innerHTML += &apos;<div>&apos; + message + &apos;</div>&apos;\n}\n\n/*\n *  Voice and Video Call functionality.\n */\n\n// Variable to keep track of the call.\nlet callId\n\n// Get user input and make a call to the callee.\nfunction makeCall () {\n  // Gather call options.\n  let callee = document.getElementById(&apos;callee&apos;).value\n  let withVideo = document.getElementById(&apos;make-with-video&apos;).checked\n\n  log(&apos;Making call to &apos; + callee)\n\n  let mediaConstraints = {\n    audio: true,\n    video: withVideo\n  }\n\n  if (withVideo) {\n    // user making a call will send a smaller video stream 200 x 200 pixels\n    mediaConstraints.videoOptions = { width: 200, height: 200 }\n  }\n\n  callId = client.call.make(callee, mediaConstraints)\n}\n\n// Answer an incoming call.\nfunction answerCall () {\n  // Gather call options.\n  let withVideo = document.getElementById(&apos;answer-with-video&apos;).checked\n\n  // Retrieve call state.\n  let call = client.call.getById(callId)\n  log(&apos;Answering call from &apos; + call.from)\n\n  let mediaConstraints = {\n    audio: true,\n    video: withVideo\n  }\n\n  if (withVideo) {\n    // user answering a call will send a larger video stream (400 x 400 pixels)\n    mediaConstraints.videoOptions = { width: 400, height: 400 }\n  }\n\n  client.call.answer(callId, mediaConstraints)\n}\n\n// Reject an incoming call.\nfunction rejectCall () {\n  // Retrieve call state.\n  let call = client.call.getById(callId)\n  log(&apos;Rejecting call from &apos; + call.from)\n\n  client.call.reject(callId)\n}\n\n// End an ongoing call.\nfunction endCall () {\n  // Retrieve call state.\n  let call = client.call.getById(callId)\n  log(&apos;Ending call with &apos; + call.from)\n\n  client.call.end(callId)\n\n  // Always re-enable this checkbox when call ends.\n  document.getElementById(&apos;answer-with-video&apos;).disabled = false\n}\n\n// Set listener for successful call starts.\nclient.on(&apos;call:start&apos;, function (params) {\n  log(&apos;Call successfully started. Waiting for response.&apos;)\n})\n\n// Set listener for generic call errors.\nclient.on(&apos;call:error&apos;, function (params) {\n  log(&apos;Error: Encountered error on call: &apos; + params.error.message)\n})\n\n// Set listener for call media errors.\nclient.on(&apos;media:error&apos;, function (params) {\n  log(&apos;Error: Call encountered media error: &apos; + params.error.message)\n})\n\n// Set listener for changes in a call&apos;s state.\nclient.on(&apos;call:stateChange&apos;, function (params) {\n  // Retrieve call state.\n  const call = client.call.getById(params.callId)\n\n  if (params.error && params.error.message) {\n    log(&apos;Error: &apos; + params.error.message)\n  }\n  log(&apos;Call state changed from &apos; + params.previous.state + &apos; to &apos; + call.state)\n\n  // If the call ended, stop tracking the callId.\n  if (call.state === &apos;Ended&apos;) {\n    callId = null\n\n    // Always re-enable this checkbox when call ends.\n    document.getElementById(&apos;answer-with-video&apos;).disabled = false\n  }\n})\n\n// Set listener for incoming calls.\nclient.on(&apos;call:receive&apos;, function (params) {\n  // Keep track of the callId.\n  callId = params.callId\n\n  // Retrieve call information.\n  call = client.call.getById(params.callId)\n\n  // Find out what media types have been offered by caller\n  // We&apos;ll make the assumtion here that audio media is always offered\n  // while video is optional.\n  const videoOffered = call.mediaOffered && call.mediaOffered.video\n  const element = document.getElementById(&apos;answer-with-video&apos;)\n  element.disabled = !videoOffered\n  if (element.checked && !videoOffered) {\n    // If caller did not offer video\n    // .. then automatically uncheck the checkbox if it is checked\n    element.checked = false\n  }\n\n  log(&apos;Received incoming call from &apos; + call.from)\n})\n\n// Set listener for new tracks.\nclient.on(&apos;call:newTrack&apos;, function (params) {\n  // Check whether the new track was a local track or not.\n  if (params.local) {\n    // Only render local visual media into the local container.\n    const localTrack = client.media.getTrackById(params.trackId)\n    if (localTrack.kind === &apos;video&apos;) {\n      client.media.renderTracks([params.trackId], &apos;#local-container&apos;)\n    }\n  } else {\n    // Render the remote media into the remote container.\n    client.media.renderTracks([params.trackId], &apos;#remote-container&apos;)\n  }\n})\n\n// Set listener for ended tracks.\nclient.on(&apos;call:trackEnded&apos;, function (params) {\n  // Check whether the ended track was a local track or not.\n  if (params.local) {\n    // Remove the track from the local container.\n    client.media.removeTracks([params.trackId], &apos;#local-container&apos;)\n  } else {\n    // Remove the track from the remote container.\n    client.media.removeTracks([params.trackId], &apos;#remote-container&apos;)\n  }\n})\n\n// Set listener for new tracks.\nclient.on(&apos;media:sourceUnmuted&apos;, function (params) {\n  // Retrieve call and track state.\n  let call = client.call.getById(callId)\n  let track = client.media.getTrackById(params.trackId)\n\n  // Re-render the media into the correct container.\n  if (call.remoteTracks.includes(params.trackId)) {\n    client.media.renderTracks([params.trackId], &apos;#remote-container&apos;)\n  } else if (call.localTracks.includes(params.trackId) && track.kind === &apos;video&apos;) {\n    // We only want to render local video because local audio would cause an echo.\n    client.media.renderTracks([params.trackId], &apos;#local-container&apos;)\n  }\n})\n\n// Set listener for ended tracks.\nclient.on(&apos;media:sourceMuted&apos;, function (params) {\n  // Retrieve call state.\n  let call = client.call.getById(callId)\n\n  // Unrender the media from the correct container.\n  if (call.remoteTracks.includes(params.trackId)) {\n    client.media.removeTracks([params.trackId], &apos;#remote-container&apos;)\n  } else if (call.localTracks.includes(params.trackId)) {\n    client.media.removeTracks([params.trackId], &apos;#local-container&apos;)\n  }\n})\n\n&quot;,&quot;html&quot;:&quot;<script src=\&quot;https://cdn.jsdelivr.net/gh/Kandy-IO/kandy-link-js-sdk@879/dist/kandy.js\&quot;></script>\n<script src=\&quot;$DEFAULTCONFIGURL$\&quot;></script>\n<div id=\&quot;auth-state\&quot;>Connected: false</div>\n\n<div>\n  <fieldset>\n    <legend>Set Credentials using your account information</legend>\n    User Email: <input type=\&quot;text\&quot; id=\&quot;username\&quot; /> Password:<input type=\&quot;password\&quot; id=\&quot;password\&quot; />\n    <input type=\&quot;submit\&quot; id=\&quot;setCredentials\&quot; value=\&quot;setCredentials\&quot; onclick=\&quot;setCredentials(username, password);\&quot; />\n  </fieldset>\n  <fieldset>\n    <legend>Subscribe</legend>\n    <input type=\&quot;submit\&quot; id=\&quot;subscribeBtn\&quot; disabled value=\&quot;Subscribe\&quot; onclick=\&quot;subscribe();\&quot; />\n    <input type=\&quot;submit\&quot; id=\&quot;unsubscribeBtn\&quot; disabled value=\&quot;Unsubscribe\&quot; onclick=\&quot;unsubscribe();\&quot; />\n  </fieldset>\n  <div class=\&quot;call-control\&quot;>\n    <fieldset>\n      <legend>Make a Call</legend>\n      <!-- User input for making a call. -->\n      <input disabled type=\&quot;button\&quot; value=\&quot;Make Call\&quot; onclick=\&quot;makeCall();\&quot; />\n      to <input disabled type=\&quot;text\&quot; id=\&quot;callee\&quot; /> with video\n      <input disabled type=\&quot;checkbox\&quot; id=\&quot;make-with-video\&quot; />\n    </fieldset>\n\n    <fieldset>\n      <legend>Respond to a Call</legend>\n      <!-- User input for responding to an incoming call. -->\n      <input disabled type=\&quot;button\&quot; value=\&quot;Answer Call\&quot; onclick=\&quot;answerCall();\&quot; />\n      with video <input disabled type=\&quot;checkbox\&quot; id=\&quot;answer-with-video\&quot; />\n      <input disabled type=\&quot;button\&quot; value=\&quot;Reject Call\&quot; onclick=\&quot;rejectCall();\&quot; />\n    </fieldset>\n\n    <fieldset>\n      <legend>End a Call</legend>\n      <!-- User input for ending an ongoing call. -->\n      <input disabled type=\&quot;button\&quot; value=\&quot;End Call\&quot; onclick=\&quot;endCall();\&quot; />\n    </fieldset>\n\n    <fieldset>\n      <!-- Message output container. -->\n      <legend>Messages</legend>\n      <div id=\&quot;messages\&quot;></div>\n    </fieldset>\n  </div>\n</div>\n\n<!-- Media containers. -->\nRemote video:\n<div id=\&quot;remote-container\&quot;></div>\n\nLocal video:\n<div id=\&quot;local-container\&quot;></div>\n\n&quot;,&quot;css&quot;:&quot;&quot;,&quot;title&quot;:&quot;Kandy.io Voice and Video Call Demo&quot;,&quot;editors&quot;:101} '><input type="image" src="./TryItOn-CodePen.png"></form>

