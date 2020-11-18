# Change Log

Kandy.js change log.

- This project adheres to [Semantic Versioning](http://semver.org/).
- This change log follows [keepachangelog.com](http://keepachangelog.com/) recommendations.

## 4.22.0 - beta

### Fixed

- Minor documentation fixes.
- Fixed issue where proxy doesn't explicitely serialize data being passed through it. Solves an issue with Electron 9+.
- Update the Call `MediaConstraint` format description to include the "direct value" approach. `KAA-2565`
- Fix the Voicemail `fetch` API description to mention the correct event emitted. `KAA-2569`
- Fixed an issue where we weren't retrieving the availables services from `Kandy.services.getSubscriptions()`. `KAA-2549`
- Fixed a Call issue where DSCP markings were not being applied on the media traffic while in proxy mode. `KAA-2568`
- Fixed issue where call is not successfully put on hold if only one side is sharing video. `KAA-2555`

### Changed

- Changed `call.getStats` Call API to return a Promise, so that caller can get the report of the call as part of invoking this API. `KAA-2558`
- Changed `call.getStats` Call API to return a Promise, so that caller can get the report of the call as part of invoking this API. `KAA-2558`

## 4.21.0 - 2020-10-30

### Added

- Added a documentation section in the tutorials referencing the newly introduced default configurations. See [Configuration libraries as part of Kandy.js Supporting Libraries](https://github.com/Kandy-IO/kandy-js-support/). `KAA-2542`
- Added a new FAQ section within our tutorials. `KAA-2551`

### Fixed

- Fixed a Call 4.X/3.X interop issue where a remote hold operation would be misinterpreted in some scenarios. `KAA-2463`

### Changed

- Action logs are now disabled by default. The client can provide either a boolean or an object with action log configuration details. If `logActions` is set to `true`, the default settings for action logs will be used. See [Config documentation](https://kandy-io.github.io/kandy-link-js-sdk/docs/#config). `KAA-2504`
- Deprecated old connect/disconnect api and config options. `KAA-2493`
- Updated the 'User Connect' tutorial to be clearer on how to implement the new Auth `setCredentials` and `subscribe` APIs. `KAA-2539`

## 4.20.0 - 2020-10-02

### Added

- Added a new media API `media.initializeDevices`to get the list of available media devices with permission from the users-end device. `KAA-2445`
- Improved debugging logs for network operations. `KAA-2503`
  - Added new debug level logs for REST request and response information.
  - Added new debug level logs for messages sent and received on the websocket.
  - Added new section to the Logging tutorial to better describe the log levels.
- Added the ability to name the redux store instance for debugging with redux devtools extension.

### Fixed

- Fixed issue where we weren't creating joined calls with the same media constraints
  and bandwidth as the original call. `KAA-2304`
- Fixed documentation for `renderTracks` function to correctly use `track.trackId` instead of the incorrect `track.id`. `KAA-2502`
- Fixed broken links in Call History and User Link docs. `KAA-2497`
- Fixed a Media issue for `Unified-Plan` calls where a remote track would incorrectly be marked as muted when created. `KAA-2519`

### Changed

- Updated tutorial codepens to be more robust around authentication and subscription operations. `KAA-2491`
- Removed `Creating LogManager` debug log since it was only in place to work around a bug in Chrome that has been fixed. `KAA-2494`

## 4.19.0 - 2020-08-28

### SDP Semantics Defaults

We've decided to wait to change the default SDP Semantics to `unified-plan`. We've identified some issues in some solutions that we would like to resolve before making the change. It's still a good idea to prepare and test your application with unified plan turned on in order to be ready when the change takes place.

### Added

- Added a new Logging tutorial. `KAA-2464`
  - Explains how the SDK's logging system works and how an application can customize its behaviour.

### Fixed

- Fixed backwards compatibility with authentication and subscription plugins. SDK will now respect old config `authentication.subscription.expires` and `authentication.websocket`. It is still recommended for clients to move to the new config and api for authentication and subscription. `KAA-2477` `KAA-2483` `KAA-2489`

## 4.18.1 - 2020-08-12

### Fixed

- Fixed an issue preventing the setting of TURN credentials when user subscribes for services. `KAA-2469`

## 4.18.0 - 2020-07-31

### Important update

With this release we're announcing the deprecation of `plan-b` SDP semantics and the intent
to change the default SDP semantics to the standard compliant `unified-plan` semantics in an upcoming release.

This change has been on the horizon since the WebRTC standard
committee chose `unified-plan` as the way forward. Since then, Chrome, has been on a path to
make this change and eventually remove `plan-b` as a supported option.
You can read about Chrome's transition plan here:
[https://webrtc.org/getting-started/unified-plan-transition-guide](https://webrtc.org/getting-started/unified-plan-transition-guide)

Browsers other than Chrome or Chrome-based browsers are unaffected by this change since they don't support `plan-b` and have supported `unified-plan` for a while.

#### What does this mean for developers

`unified-plan` support is available today and you can start testing your application today. In
order to do so you need to change the sdpSemantics option in your configuration when creating the
SDK like so:

```javascript
import { create } from '@kandy-io/link-sdk'
const client = create({
  call: {
    sdpSemantics: 'unified-plan'
    // ...
  }
})
```

The above configuration will become the default in an upcoming release.

Additionally, in order to have the same user experience when performing mid-call operations, your
application will need to make sure to handle 2 events that you may not have needed previously:

- `media:sourceMuted` - Triggered when a track is muted at the source.
- `media:sourceUnmuted` - Triggered when a track is unmuted at the source.

These events will indicate when tracks (especially video tracks) should be displayed/rendered or not.

To learn in detail how to use these events, please visit our tutorials.
Choose the configuration that applies to you:

- [Kandy-US](https://kandy-io.github.io/kandy-link-js-sdk/tutorials/?config=us#/Configurations)
- [Kandy-EMEA](https://kandy-io.github.io/kandy-link-js-sdk/tutorials/?config=emea#/Configurations)
- [Kandy-UAE](https://kandy-io.github.io/kandy-link-js-sdk/tutorials/?config=uae#/Configurations)

### Added

- Added new Call API `call.setSdpHandlers` for setting SDP Handlers after the SDK has been initialized. `KAA-2322`

### Fixed

- Fixed an issue preventing the playing of video tracks during a call on iOS Safari. `KAA-2382`
- Fixed an issue preventing the proper termination of an audio+video outgoing call when camera was already in use. `KAA-2426`
- Fixed error in tutorials that was pointing to the wrong server. `KAA-2458`
- Fixed issue where uncaught errors in `setLocalDescription` were crashing the saga. These events are now being properly handled. `KAA-2460`
- Fixed `media:sourceMuted` and `media:sourceUnmuted` events by adding `trackId` data instead of passing it in a single element array. `KAA-2455`

### Changed

- Removed the Call default values for BandwidthControls when adding media to a call. `KAA-2402`
  - This affects the `make`, `answer`, `addMedia`, and `startVideo` Call APIs.
  - If the `options.bandwidth` parameter is not provided, the SDK will now default to the browser's behaviour instead of setting its own bandwidth limits for audio and video (of 5000 each).
- Updated the `webrtc-adapter` package (6.4.4 -> 7.6.3). `KAA-2381`
- Added a small note to the documentation to inform that screensharing is not supported on iOS Safari. `KAA-2429`

## 4.17.0 - 2020-06-26

### Added

- Added new parameter validation to all configs used with the `create` function. Incorrect parameters will log a `VALIDATION` message. `KAA-2223`
- Added ability to add and remove services by updating a subscription using the subscription plugin. `KAA-2266`
- Added new session level bandwidth limit parameter to the call API. The parameter is `call` and should be passed in the same options object as `audio` and `video` bandwidth controls. `KAA-2108`
- Added documentation about `CodecSelectors` for `sdpHandlers.createCodecRemover`.
- Added callId parameter passed to SDP pipeline handlers `call.SdpHandlerFunction`. `KAA-2242`

### Fixed

- Added the 'auth:changed' event trigger on subscription GONE notification for backwards compatibility. `KAA-2360`
- Fixed an Authentication issue where the backwards-compatible `disconnect` API was resubscribing the connection instead of removing it. `KAA-2397`
- Fixed an Authentication issue where the backwards-compatible `auth:error` event did not contain any error information when a subscription failed. `KAA-2399`
  - Please see the Authentication `setCredentials` and Services `subscribe` and `unsubscribe` APIs for the new, recommended method for authenticating a user.
- Fixed a Call issue where the callee would not receive a `call:newTrack` event for the remote tracks when answering the call. `KAA-2380`
- Fixed a Call issue where SDP Handlers were not given the opportunity to act on a local SDP before it was sent to the remote endpoint. `KAA-2136`
- Fixed an issue where we were manipulating client provided subscription service strings before sending to Kandy Link in the subscribe/unsubscribe Link requests. `KAA-2393`
- Fixed issue in subscription plugin where updating service subscriptions was falsely reported in the SDK even if they weren't successfully updated on the server.
- Fixed the custom header (sent by any request to backend & used for analytics) so that its value reflects the actual platform (or service) used by SDK. `KAA-2395`
- Fixed an issue where replacing a track and then ending it wasn't emitting the proper `call:trackEnded` event. `KAA-2370` `KAA-2387`
- Normalized error data returned from all REST requests to internal components. Doesn't impact public API. `KAA-2348`
- Fixed an issue with `sdpHandlers.createCodecRemover` where it wasn't handling multiple codecs selectors with the same name. `KAA-2416`
- Fixed an issue where we weren't emitting the `auth:change` event on network connection loss. To maintain backwards compatibility, this was reintroduced. We will now emit `subscription:change` event on network connection loss as well.

### Changed

- Changed `call.getAvailableCodecs` Call API to return a Promise, so that caller can get the list of codecs as part of invoking this API, without the need to setup a separate event listener. This does not impact the existing use of API. `KAA-2423`

## 4.16.0 - 2020-05-29

### Added

- Added new call config option 'mediaBrokerOnly'. When set to true the SDK will not try to recreate a calls PeerConnection. This is intended for backends configured to disallow peer to peer connections. `KAA-2259`
- Added new Call API `call.getAvailableCodecs` which can be used to return a list of available codecs supported by the browser. `KAA-2275`
- Added support for bearerAccessToken based authentication. See `kandy.setCredentials` API for more info". `KAA-2190`
- Added a configuration parameter that allows the user to choose the authentication method for the WebSocket.`KAA-2279`
- Added new Call option for configuring DSCP markings on the media traffic. `KAA-2256`
  - DSCP controls can be configured with the `call.make`, `call.answer`, `call.addMedia`, and `call.startVideo` Call APIs.
- Added `removeBundling` flag to the call config for users that want to turn it off. `KAA-2338`

### Fixed

- Removed the need for remote party properties (callNotificationParams) to be present in notifications. `KAA-2271`
- Fixed Firefox calling Chrome issue related to media bundling. `KAA-2282`
- Fixed the triggering of call:trackEnded event (on caller's side) when a media track is removed as well as duplication of such event (on callee's side) when plan-b is used. `KAA-2343`
- Fixed an issue with the `user.search` API where searching with a filter would not work. `KAA-2341`
- Fixed an issue with removing media for a 'Connected' Call (after an earlier attempt was made while the Call was 'On Hold') `KAA-2353`
- Fixed documentation for Conversation in messaging plugin. `KAA-2102`

### Changed

- Improved the `call.startVideo` API to allow for configuring additional options such as bandwidth.
- Changed the Tutorial's access URL so that it does not expose configuration parameters for a specific domain/server. `KAA-2320`
- The default for `removeBundling` has been changed to be `false`, thereby enabling media bundling. `KAA-2338`
- Updated the Voice and Video Calls tutorials with the proper way of handling media. `KAA-1929`

## 4.15.0 - 2020-04-30

### Added

- Added the handling of mute/unmute events which are being generated when a media source is muted/unmuted by triggers that are outside of SDK's control. `KAA-1641`

### Fixed

- Fixed Call issue that, when in Proxy mode, would cause delays when responding to a remote operation.
- Fixed a Call issue where making a call with screenshare when in Proxy mode would fail.
- Fixed a Call issue, where after a complex midcall operation (e.g. transfer, join) completed, the original call was not being ended on the server. `KAA-2273`
- Removed the need for remote party properties (callNotificationParams) to be present in a sessionProgress notification. `KAA-2271`

### Changed

- Improved logs for Calls. `KAA-2219`
- Improved behaviour when loading SDK into browser that doesn't support WebRTC. `KAA-2238` `KAA-2258`

## 4.14.0 - 2020-03-27

### Added

- Added a new tutorial topic describing 'Call States' and few minor updates on API documentation. `KAA-2169`
- Added checking for media willSend and willReceive when a Hold operation is received in case the remote side answered an audio only call with audio and video. `KAA-2209`

### Changed

- Changed the error codes and error messages of Consultative Transfer, Direct Transfer, and Join call operation failures to be consistent with the ones received from the Kandy Link backend server. `KAA-2239`
  - These changes are reflected in the `transition` argument of the `call:stateChange` event which is emitted after an operation fails.
- Updated README to include a link to tutorials with Kandy-UAE configuration. `KAA-2226`

### Fixed

- Fixed an issue where the callee of a call with slow-start negotiations would start the call audit twice. `KAA-2076`
- Fixed an issue where `call.replaceTrack` API would fail for calls made on proxy mode. `KAA-2147`
- Fixed an issue where an existing local video track could not be replaced by a screen sharing track. `KAA-2144`
- Fixed an issue where the `conversation.subscribe` listener not being triggered. `KAA-2200`
- Fixed an issue where incoming call notifications would be dropped when on `push-channel-only` mode if the notification arrived on the websocket channel first. `KAA-2156`

## 4.13.0 - 2020-02-28

### Changed

- Changed the `kandy.notification.registerPush` API to accommodate the breaking changes forced by iOS13 for iOS push registration. This changes require a voip device Token when registering for call service notifications and device token when registering for non-call service notifications .`KAA-2153`

### Added

- Added a destroy function to allow users to wipe the SDK state and render the SDK unusable. `KAA-2181`
  - This is useful when a user is finished with the SDK and wants their data to not be available to the next SDK consumer. After destroy is called, the SDK must be recreated for an application to continue working.
- Added four API's `kandy.notification.registerApplePush`,`kandy.notification.registerAndroidPush`, `kandy.notification.unregisterAndroidPush` and `kandy.notification.unregisterApplePush` to handle the push registration notifications for Apple and Android respectively.
- Added a new call configuration to trigger a resync of all active calls upon connecting to the websocket. `KAA-2154`
  - The new call configuration `resyncOnConnect` is disabled by default.
  - The resync feature requires Kandy Link 4.7.1+.
- Added push-mode option for receiving incoming calls exclusively through push on Apple's mobile platform. `KAA-2155`
  - See `config.notifications.incomingCallNotificationMode`

### Fixed

- Fixed a Call issue where a slow-start, remote hold operation, when entering a "dual hold" state, was not being processed correctly. `KAA-2183`
- Fixed problems with Firefox Hold/Unhold under `plan-b` sdpSemantics by making it impossible to start the SDK in `plan-b` under any browser that is not Chrome. `KAA-2174`
- Fixed the ICE servers documentation for the Link SDK. `KAA-2197`

## 4.12.0 - 2020-01-31

### Added

- Added Call support for receiving custom parameters throughout a call. `KAA-2084`
  - A `call:customParameters` event is emitted which contains the custom parameters when they are received.
  - This feature requires Kandy Link 4.7+.
- Added SDP Handler functionality to allow modifying a local SDP after it has been set locally but before sending it to the remote endpoint. `KAA-2136`
  - A `step` property has been added to the `SdpHandlerInfo` parameter given to a `SdpHandlerFunction`. This indicates whether the next step is to `set` the SDP locally or `send` the SDP to the remote endpoint.

### Fixed

- Fixed an issue where PUSH notification channel was closed by default. `KAA-719`
- Fixed an issue where getStats was not returning any data in Proxy mode. `KAA-2056`
- Fixed a Call issue where remote hold and unhold operations would not be handled properly if the remote application is using a v3.X Kandy SDK. `KAA-2105`
- Fixed a Call issue where Call configurations for the ICE collection process were not used for incoming calls. `KAA-2184`
  - See `KAA-1469` in v4.10.0 for affected configurations.
- Fixed an SDP Handler issue where `SdpHandlerInfo.type` was undefined the first time an SDP Handler is called on receiving a call.
- Fixed a midcall issue where removal of a remote media track did not trigger an event notification to application level (when using unified-plan). `KAA-2150`
- Fixed issue where fetching users call log with incorrect credentials throws an error. `KAA-1077`

## 4.11.1 - 2020-01-02

### Fixed

- Fixed documentation issue, introduced in 4.11.0, where portions of the documentation were missing. `KAA-2151`

## 4.11.0 - 2019-12-20

### Added

- Added a 'forceLogOut' option to the `kandy.connect` API to log out the oldest connection with the credentialed user. Helps get around errors that occur when there are too many simultaneous connections. `KAA-2082`
- Added new Logger functionality to allow applications to customize the format of information that the SDK logs.
  - See `config.logs.handler`, `config.logs.logActions.handler`, `logger.LogHandler`, and `logger.LogEntry`.
  - An application can now provide a `LogHandler` function to the SDK via configuration. The SDK will use this function for logging information. By default, the SDK will continue to log information to the console.
- Added new helper functions for simple call scenarios. `startVideo` is used to add video to a call that doesn't have a video track yet. `stopVideo` is used to remove video from a call that only has one video track started. The idea is these are simpler to use than the more configurable `addMedia`/`removeMedia`. `KAA-1971`

### Fixed

- Fixed a Call issue where some slow-start midcall operations (eg. transfer, unhold) would fail. `KAA-2110`
  - This fix re-introduces a previous issue fixed in v4.9.0: `KAA-1890`.
- Fixed an issue where call was failing when the user(caller) has no user@domain format. `KAA-2131`
- Fixed an issue where callee(s) would not get notified when caller stops screen sharing through browser control. `KAA-2093`

## 4.10.0 - 2019-11-29

### Added

- Added Call support for setting and sending custom parameters. `KAA-2063`
- Added new user event, `users:change`, to notify when we fetch information about a user. `KAA-1882`
- Added new Call configurations to provide flexibility for the ICE collection process. `KAA-1469`
  - See `config.call` for new configs: `iceCollectionDelay`, `maxIceTimeout`, and `iceCollectionCheck`.
  - These configs should only be needed when the ICE collection process does not complete normally. This should not happen in most scenarios, but can be determined if there is a delay (of 3 seconds or the value set for `maxIceTimeout`) during call establishment.
  - These configurations allow an application to customize the ICE collection process according to their network / scenario, in order to workaround issues.

### Changed

- Changed the event emitted when a user is fetched to `users:change`. `KAA-1882`

### Fixed

- Fixed a Call issue where a call would enter `Ended` state (instead of `Cancelled`) when receiving a "cancelled" notification.
- Fixed an issue where searching the directory would fail even if a filter was provided. `KAA-1161`
  - Updated public documentation to accurately reflect directory `search` API.
- Fixed public documentation hyperlinks for custom type definitions. `KAA-2011`
- Fixed a Call configuration issue where midcall operations may be slow when no ICE server configurations were provided.

## 4.9.0 - 2019-11-01

### Added

- Added Call functionality where local media tracks are deleted if they are not being used for the call. `KAA-1890`
- Add Call support for receiving early media. `KAA-1975`
  - When enabled via configuration (see `config.call.earlyMedia`), an outgoing Call may enter the "Early Media" state if the remote end responds with a provisional answer. This allows the Call to receive media before it has been answered.
- Added a `call:operation` event which is fired by call operations to keep track of operation progress. `KAA-1949`
- Added call related API docs to help with migration from 3.x API. `KAA-2062`
- Added the emission of an event when call state changes from Initiating to Initiated. `KAA-2080`

### Changed

- Improved Call screenshare functionality. `KAA-2000`
  - Added explicit screenshare options for APIs, separate from video options. See the `call.make`, `call.answer`, and `call.addMedia` APIs.
  - A browser extension is no longer required for screensharing on Google Chrome.
  - A Call can now be started and/or answered with screenshare.
- Updated README to include a link to tutorials with Kandy-EMEA configuration. `KAA-2050`
- Improved error return when a session is created (or ended) so that it more accurately reflects the issue.

### Fixed

- Fixed an issue where the "to" information of the call wasn't being set to where the call was actually sent. `KAA-2014`
- Fixed the inconsistent order of media events for both incoming & outgoing calls. `KAA-1757`
- Fixed an issue where the SIP number normalization was unnecessarily removing an '@' symbol. `KAA-1793`
- Fixed a Proxy issue where changing Proxy mode would not update available devices to reflect the changed machine. `KAA-2059`
- Fixed the issue where an active call did not hang up when the call audit failed. `KAA-2003`
- Fixed documentation to reflect the correct default value for checkConnectivity parameter. `KAA-1876`
- Fixed public doc links for call and media.

## 4.8.0 - 2019-09-27

### Fixed

- Fixed an issue where call is ended after call resume if resuming account has music on hold. `KAA-1816`
- Fixed an issue in Chrome plan-b where hold operation will not fire a `call:trackEnded` event and will fire it during the unhold operation. `KAA-1942`
- Fixed the ordering and nesting of types & namespaces in public documentation. `KAA-1880`
- Fixed an issue where local call logs were reporting a duration of 0 for all incoming calls. `KAA-1794`
- Fixed an issue where ending an incoming call would not add the call to the call history logs. `KAA-2009`

### Changed

- Changed the public API documentation groupings to namespaces. `KAA-1918`

### Added

- Added `displayName` option to `make` call api. `KAA-1909`
- Support for HMAC token-based authentication. `KAA-1919`

## 4.7.1 - 2019-09-03

### Fixed

- Re-fixed an Authentication issue where connecting with invalid credentials for a pre-provisioned user would return an error event with misleading information. `KAA-1937`

## 4.7.0 - 2019-08-30

### Added

- Added `call:join` event which triggers once a joined call has been created. `KAA-1821`
- Added tutorials for Configuration, User Connect, and Voice and Video Calls. `KAA-1897`

### Fixed

- Fixed an issue where the `kandy.call.history.clear()` is not clearing history data and returning an empty array. `KAA-1873`
- Fixed implementation of public API 'getAll' (for 'users' plugin) to return an array of all users instead of an object of all users, so that it aligns with current API documentation. `KAA-1923`
- Fixed an Authentication issue where connecting with invalid credentials for a pre-provisioned user would return an error event with misleading information. `KAA-1937`
- Fixed an issue where call audits weren't being sent.`KAA-1944`
- Fixed an issue causing some BasicError objects to have a misleading message rather than a message about the operation that failed. `KAA-1947`
- Fixed an issue where Call History Log showed a missed call as "incoming". `KAA-1764`

## 4.6.0 - 2019-08-01

### Added

- Added "replaceTrack" functionality for calls. See the `kandy.call.replaceTrack` API. `KAA-1727`
- Added in-band DTMF tone support for calls that do not support out-of-band DTMF tones. `KAA-1505`
  - See the `call.sendDTMF` API for more information.
- Added bandwidth control functionality for calls. See `kandy.call.makeCall`, `kandy.call.answerCall`, `kandy.call.removeMedia` & `kandy.call.addMedia`. `KAA-1740`
- User now automatically disconnects gracefully when internet connection is lost for too long. `KAA-1591`

### Fixed

- Fixed an issue preventing the `devices:change` event from being emitted when including, but not using, the Webrtc Proxy. `KAA-1790`
- Fixed many API documentation issues across all SDK's plugins.
- Fixed version numbering associated with public documentation. `KAA-1823`

## 4.5.0 - 2019-06-28

### Added

- Added "join" functionality for calls. See the `kandy.call.join` API. `KAA-1508`
- Added "consultative transfer" functionality for calls. See the `kandy.call.consultativeTransfer` API. `KAA-1510`
- Added "direct transfer" functionality for calls. See the `kandy.call.directTransfer` API. `KAA-1509`
- Added `transition.reasonText` to `call:stateChange` event. `KAA-1725`
- Added functionality that emits `call:stateChange` event when complex operation failure notification is received.

### Fixed

- Fixed an issue where the `fetchMessages` function was not available on `Conversations` returned by `kandy.conversation.getAll()`. `KAA-1795`
- Fixed transferred & joined calls not having updated remote participant data. `KAA-1725`
- Fixed Messaging from creating new conversations every time a message is received.
- Fixed Messaging from not adding the `sender` property to sent messages.

### Changed

- Removed the first parameter (contactId) from kandy.contacts.update() API, thus deprecating it. The user should now use the update(contact) API and ensure that contactId is now being supplied as part of the contact object which is passed to this API. `KAA-1783` `KAA-1600`

## 4.4.0 - 2019-05-24

### Added

- Added Forward Call functionality. `KAA-1507`

### Fixed

- Fixed call states not having `startTime` and/or `endTime` properties in certain scenarios when the call does not establish. `KAA-1620`
- Fixed missing "remote participant display name" in call state for outgoing calls. `KAA-1568`
  - It will now be defined after a notification is received from the remote participant.

## 4.3.1 - 2019-04-26

### Fixed

- Made a hotfix release just to update the version because something went wrong with NPM and it requires a new version.

## 4.3.0 - 2019-04-26

### Added

- Added a DEBUG log at the start of every public API invocation, which will better help with future investigations `KAA-1353`
- Added an API to retrieve basic browser information. See `getBrowserDetails`. `KAA-1470`

## Fixed

- Fixed an issue where ending a call would not end the call for the remote participant. `KAA-1597`
- Fixed an issue where local call logs would not be generated after a call ended. `KAA-1535`
- Fixed a "remove media" call issue where the error event provided an incorrect message if the track ID was invalid. `KAA-1436`
- Fixed a call issue where, when put on hold by a Cisco Phone, the call would end after a short period. `KAA-1562`
- Fixed reject call behaviour to make call state `Ended` on callee side instead of `Cancelled`. `KAA-1584`
- Fixed a call issue where a media mismatch error on answer would leave the call in `Ringing` state instead of ending the call. `KAA-1432`
- Fixed an issue where errors prevented renegotiation from completing. `KAA-1497`
- Fixed call issue where, when on dual hold with a Cisco phone, a remote unhold operation may incorrectly show a video track being added to the call. `KAA-1593`

## 4.2.1 - 2019-04-16

### Added

- Added a new call configuration property "removeH264Codecs" to disable removing "H264" Codecs from the SDP by default `KAA-1585`

### Changed

- Changed the default SDP handling to remove "H264" Codecs. `KAA-1585`

## 4.2.0 - 2018-03-29

### Fixed

- Fixed an issue where disconnecting from the network would leave isConnected in the wrong state `KAA-1547`

## 4.1.0 - 2019-03-01

### Added

- Added new Presence event, `presence:selfChange`, to notify when self-presence information has changed. `KAA-1153`
- Added Presence APIs for retrieving presence information. See `kandy.presence.getAll` and `kandy.presence.getSelf`. KAA-1152.
- Added Presence constants to the API. See `kandy.presence.statuses` and `kandy.presence.activities`. `KAA-1151`

### Fixed

- Fixed an issue where the states property was not being defined on the call namespace (kandy.call.states). `KAA-1349`
- Fixed a crash when using the Presence `fetch` API and receiving no data. `KAA-1169`.

## 4.0.0 - 2019-02-01

### Compatibility Warning

Version 4.0.0 has many breaking changes for call APIs. Please see the API reference documentation to see the new Call API.

### Added

- Added support to make calls on Safari 12.

### Changed

- Refactored all of the WebRTC-related code.
- Changed the callOptions parameter for the makeAnonymous API function of the CallMe SDK. It must now include a `from` property (callOptions.from), indicating the URI of the caller, as it no longer receives a default value of `anonymousUser@kandy.callMe`. `KAA-1350`

## 3.2.0 - 2019-03-01

### Added

- Added new Presence event, `presence:selfChange`, to notify when self-presence information has changed. `KAA-1153`
- Added Presence APIs for retrieving presence information. See `kandy.presence.getAll` and `kandy.presence.getSelf`. KAA-1152.
- Added Presence constants to the API. See `kandy.presence.statuses` and `kandy.presence.activities`. `KAA-1151`

### Fixed

- Fixed an issue where refreshing an empty address book generated an error. `KAA-1380`
- Fixed an issue where the states property was not being defined on the call namespace (kandy.call.states). `KAA-1349`
- Fixed a crash when using the Presence `fetch` API and receiving no data. `KAA-1169`.

## 3.1.0 - 2019-02-01

### Fixed

- Fixed an issue where track removal does not get cleaned up properly. `KAA-1305`
- Fixed an issue that sometimes cause an error when the user adds "sip:" before the destination address when making a call. `KAA-1360`
- Fixed an issue with Firefox media rendering by escaping special characters from selector in Track component. `KAA-1231`
- Fixed an issue with hold state failing to be set properly on call with certain SIP servers `KAA-938`
- Fixed an issue where audio would not stay muted when going from both hold to local hold. `KAA-1202`
- Fixed an issue where user objects were being added to the state without a userId property, causing them to be keyed by undefined. `KAA-1330`
- Fixed an issue affecting messaging whereby outgoing instant messages remained stuck in an "isPending" state. `KAA-1321`
- Fixed an issue where starting the preview video was failing. `KAA-1344`
- Fixed an issue where the content type header was not being set properly during subscription. `KAA-1331`
- Fixed an issue where Kandy Link users were not having calls added to call history. `KAA-1336`
- Fixed an issue where the presence userID was not being set in some cases in the presence notification message. `KAA-1382`
- Fixed an issue where an internally-used library was polluting the window object. `KAA-1371`
- Fixed an issue where slow-start calls that are rejected were not added to call history. `KAA-1203`

## 3.0.0 - 2018-10-29

### Important Changes

#### HTMLMediaElement.srcObject (`KAA-965`)

In this release we changed the way media streams are attached to media elements to adapt to [upcoming changes](https://www.chromestatus.com/features/5618491470118912) in Chrome. This change is currently announced for Chrome M69. Applications using older versions of the SDK will need to be updated to include these changes prior to Chrome releasing this.

#### createKandy Renamed to kandy.create()

The function to instantiate the SDK has been renamed from `createKandy()` to `Kandy.create()`. Please update your applications accordingly.

### Added

- Added user's locale to data returned in fetchSelfInfo(). `KAA-787`
- Added new Authorization name (authname) to the Kandy connect method. `KAA-606`
- Implemented originalRemoteParticipant field to call and callHistory for keeping track of the initial call "to" `feat/KAA-959`
- Implemented the ability to set and get the custom parameters set on a call. See `kandy.call.setCustomParameters` and `kandy.call.getCustomParameters`. `KAA-918`
- Implemented the ability to send the custom parameters set on a call. See `kandy.call.sendCustomParameters`. `KAA-919`
- Added ability to answer slow start call with video `KAA-858`
- Added functions getCache, setCache to callHistory plugin `KAA-546`
- Added events for tracking cache changes
- Added connectivity.method object to the connectivity configuration allowing server or client to be configured for connCheck responsibility. `KAA-614`
- Added the ability to silence the remote audio for calls and audio bridges. `KAA-1003`
- Added new API method under the _user_ namespace: `kandy.user.getAll`. `KAA-747`
- Added new API methods under the _contacts_ namespace: `kandy.contacts.fetch`, `kandy.contacts.get` and `kandy.contacts.getAll`. `KAA-747`
- Added the ability to set the video as "inactive" instead of "sendonly" when holding a call. `KAA-1067`
- Added ability to turn off log grouping by configuration log: { disableGroup: true }
- Add remote hold state when music on hold is playing with slow start. `KAA-1137`

### Changed

- Moved User Directory Search to the `kandy.user` namespace (previously on `contacts`). `KAA-747`
- Renamed API function kandy.user.fetchDetails to kandy.user.fetchSelfInfo(). `KAA-747`

### Fixed

- Fixed Safari11 and IE11 browser support `KAA-1109`
- Removed an extra colon from the eventType CALL_HISTORY_CACHE_CHANGE `KAA-546`
- Fixed the `callHistory` and `presence` plugins to work on both Link and UC platforms. `KAA-947`
- Updated API documentation for 'customParameters' parameter. `KAA-913`
- Fixed debug message falsely claiming calls may fail in Anonymous Call scenarios. `KAA-934`
- Updated logs to output slightly less noise as part of a logged item.
- Fixed and issue where Trickle ICE process is being initiated on video/stop start when Tickle ICE is disabled.
- Fixed an issue where services subscription timeout would be compounded when services took a long time to subscribe.
- Fixed a merge issue where changes for `KAA-858` were overwritten. `KAA-1065`

## 3.0.0-beta (build 12095+)

### Added

- Added a new property to call logs: `remoteParticipant`. `KAA-853`
  - This includes the `displayName` and `displayNumber` for the remote participant of the call.

### Fixed

- Fixed an issue where calls on hold would cause an unhandled error when added to an audio bridge. `KAA-678`
- Fixed an issue where call logs would have incorrect information for the remote call participant. `KAA-853`
  - Logs will now consistently display the "caller" information as the originator of the call and "callee" information as the destination of the call.
- Fixed issue with video stream for Electron interoperability with Cisco Phones. `KAA-821`
- Fixed 2 issues in Kandy's logManager:
  - The console logger's level is now being set
  - The console's logger is configured such as to not persist data in localStorage

## 3.0.0-beta (build 11497+)

### Added

- Added a getter function, `getMessage`, on conversations for retrieving specific messages. `KAA-850`
- Added the list of conversations that were affected in the `conversations:change` event. `KAA-834`

### Fixed

- Fixed an issue where messages fetched for a conversation may show up as duplicate messages. `KAA-849`
- Fixed an error when trying to fetch a conversation's messages after it received a message. `KAA-848`
- Fixed a connection issue for UC when using the SDK's default services. `KAA-807`
- Fixed an issue where call logs were missing in the logs when a fetch is made immediately after making a call. `KAA-653`
- Fixed an issue where the `remoteParticipant` property was not being added to call state. `KAA-747`

### Deprecation

- The previous event parameter, `conversationId`, for the `conversations:change` event should not be used anymore. The parameter `conversationIds` should now be used. `KAA-834`

## 3.0.0-beta (build 10805+)

### Added

- Added support for OAuth Token subscription via the UC API. `KAA-780`
- Added a more consistent structure to SDK debug logs. `KAA-685`
- Added documentation for the Config plugin's API. `KAA-728`
- Added kandy.getConfig() functionality for getting the current configuration `KAA-728`

## 3.0.0-beta (build 10484+)

### Added

- Added support for Custom SIP headers for Anonymous and regular Calls. `KAA-831`
- Added new property to call state, `remoteParticipant`, retrieved and updated from FCS. `KAA-746`
- Added transition info in the state change event for remote transfer scenarios. `KAA-746`.
  - In a `REMOTE_HOLD` to `IN_CALL` change `transition.code === 9907` signifies a remote participant change.

### Deprecation

- The previous call state properties (eg. `calleeName`) about call participants are now discouraged. Please use `remoteParticipant` for the other call participant's information.

## 3.0.0-beta (build 9354+)

### Fixed

- DTLS changes for CUCM bugs and for consultative transfer. `KAA-804`, `KAA-806`, `KAA-808`
- Tentative fix for process hold issue when on stable state.
- Fixed an issue with Early Media not doing Call Audits. `KAA-781`

## 3.0.0-beta (build 8790+)

### Added

- Added a new parameter to `auth:change` events, to notify of a forced disconnection. `KAA-799`

### Fixed

- Fixed an issue where the end of user subscriptions would not be handled properly. `KAA-799`
- Fixed an issue where the websocket would ping after disconnect, causing a websocket error.

## 3.0.0-beta (build 8760+)

### Added

- Added a retry mechanism for failed session resubscription attempts. `KAA-799`
- Added a new event, `auth:resub`, to notify the application about resub attempts. `KAA-799`

## 3.0.0-beta (build 5574+)

### Compatibility Warning

Version 3.0 is a hard break in backwards compatibility for Kandy.js. This latest beta version is also a hard break from the previous beta version. Numerous breaking changes have been made in this version, with the goal of avoiding API-related breaking changes in the future. The changes are aimed at providing a more consistent and intuitive experience across the entirety of the new API.

The summary of the breaking changes are (1) most API functions have been namespaced, (2) many API function names have been slightly changed, (3) many event names have been slightly changed, (4) event argument parameters have changed, and (5) renaming of SDK build files.

For in-depth information about what has changed, please see: <https://confluence.genband.com/display/KSDK/Kandy.js+3.0.0-beta+Breaking+Changes>

### Fixed

- Fixed the "uncaught at rootSaga" issue, which prevented actions from being processed afterwards.

### Added

- Support for partial subscriptions. `KAA-403`
- The ability to normalize call destination addresses. See the `kandy.call.make` API options. `KAA-560`
- Better functionality for retrieving media devices. See `kandy.call.getDevices` API and the `devices:change` event. `KAA-563`.

## 3.0.0-beta (build 4927+)

### Compatibility Warning

Version 3.0 is a hard break in backwards compatibility for Kandy.js. The new API is modern, reactive, ES6 friendly and more consistent.

Additionally, the new SDK replaces both FCS and Kandy.js 2.13 in a unified converged API. This allows you to write applications on Kandy that can have the benefit of running on all of the Kandy platforms.

We are continually in the process of improving the SDK and our documentation in order to help developers face the difficulty of developing a real-time communication app.

Our reactive approach to this new version of the SDK puts more responsibility on the SDK and less on the app for many tasks:

- Authentication and connection management is tracked by the SDK to a higher degree and helps developers solidify this aspect of their apps.
- Conversation and call state is tracked by the SDK alleviating this burden from the application. The application can focus on rendering these in a reactive manner.
- Converged unified APIs that allow for graceful elevation of features when they become available on the platform.
- Customizability via a plugin system that drives all interactions within the SDK.

### Added

- Completely new unified API that replaces both FCS and Kandy.js 2.x. See the reference documentation.
- New documentation portal with all new documentation and quick starts for 3.0.
