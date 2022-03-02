---
layout: page
categories: quickstarts-javascript
title: Logging
permalink: /quickstarts/javascript/link/Logging
---

# SDK Logs

The SDK has a logging system for providing information about its internal behaviours. The SDK will generate human-readable logs, at different levels for different types of information, that explain how it is handling an application's requests. These logs are important for understanding what the SDK is doing and for debugging potential issues.

This tutorial will explain how the SDK's logging system works, how an application can configure the system, and provide code samples about custom logging functionality that may benefit your application.

## Logging System

When the SDK generates a log, it creates a JSON object we call a "Log Entry". This object contains the log message itself, as well as meta-info about when and who logged it. This meta-info helps to provide context about the log message to more easily understand the source/reason of the log. For example, all logs generated for a specific call will be tagged as a call log and include that call's unique ID.

Each Log Entry also includes the "log level" that it was generated at. The different log levels refer to different types of information that will be included in the log messages. For example, the INFO level provides general information about the SDK's internal operations and the DEBUG level provides specific details about those operations. The possible log levels in a Log Entry match the log levels that the SDK can be configured to use (see [`api.logger.levels`](https://kandy-io.github.io/kandy-link-js-sdk/docs/#loggerlevels) in the API documentation).

After the SDK generates a Log Entry, it will pass the log to the "Log Handler" for processing. This Log Handler is the function that decides how the log is handled, and is fully customizable by an application. The SDK's default Log Handler acts as a thin wrapper around the browser's console API (ie. [`window.console`](https://developer.mozilla.org/en-US/docs/Web/API/Window/console)). It parses the meta-info in the Log Entry and prepends it to the already human-readable log message, then uses the console to log it at the appropriate level. The code for the SDK's default Log Handler is shown below.

```javascript 
/**
 * Default function for the SDK to use for logging.
 *    Uses entry information to form a prefix, then logs to console.
 *    For more information, see the `api.logger.LogHandler` API documentation.
 * @method defaultLogHandler
 * @param  {LogEntry} entry
 */
function defaultLogHandler (entry) {
  // Compile the meta info of the log for a prefix.
  const { timestamp, level, target, method } = entry

  // Find a short name to reference which Logger this log is from.
  //    This is mostly to cut down the ID if it's too long for a human to read.
  const shortId = target.id && target.id.length > 8 ? target.id.substring(0, 6) : target.id
  const shortName = shortId ? target.type + '/' + shortId : target.type

  // Format the parsed meta-information.
  const logInfo = timestamp + ' - ' + shortName + ' - ' + level

  // The first message parameter is always a string.
  const [log, ...extra] = entry.messages

  // Log the message to the console at the appropriate method level.
  console[method](logInfo + ' - ' + log, ...extra)
}
```

It is important to be aware of this default log behaviour. Since it uses the browser's console APIs, the browser can also filter which logs a user sees. This can be beneficial for a developer, but may be a hindrance for an end-user that is not as familiar with a browser's console and dev-tools. For this reason, we recommend providing a custom Log Handler to the SDK that is better suited for your application and its users.

### Setting a custom Log Handler

An application can customize the Log Handler behaviour by providing their own Log Handler function to the SDK as configuration. This allows an application to choose logging behaviour that is better suited for its users/scenario.

As shown below, the `config.logs.handler` is the configuration for providing a custom Log Handler to the SDK. The SDK will then replace the default Log Handler used internally with the provided Log Handler.

```javascript 
// Your custom Log Handler function.
function customLogHandler (logEntry) { ... }

// Configuration object for the SDK.
const configs = {
  logs: {
    handler: customLogHandler,
    logLevel: 'DEBUG'
  },
  // Configuration for other features.
  authentication: {  ... },
  ...
}

// Initialize the SDK with the configs.
const client = Kandy.create(configs)
```

### Writing a custom Log Handler

A custom Log Handler function can include any functionality that the application desires. The SDK has no restrictions on the Log Handler (other than it is in fact a function). Writing a custom Log Handler is mostly about knowing how to handle a Log Entry object. Below is a list of the important properties on a [Log Entry](https://kandy-io.github.io/kandy-link-js-sdk/docs/#loggerlogentry) object.

- `timestamp`: When the log was created, based on the UNIX epoch.
- `method`: The log method that the SDK used to create the log. This will match up with the browser's console methods (eg. `info`, `debug`, `warn`).
- `level`: The level that the log was created at. The SDK's configured log level will affect which levels of logs a Log Handler will receive. See the below section for more information.
- `messages`: An array of the information the log was created with. The first item in the array will be the human-readable 'log message'. Subsequent items can be optional additional information.
- `target`: Object with information about the source of the log. Includes sub-properties `type` (the category of object that the log is about) and `id` (the unique ID that represents that specific type instance). For example, a call log will have 'Call' as its type and the call's ID as its `id`.

### Choosing a Log Level

The SDK's configured log level (ie. `config.logs.logLevel`) will affect which levels of logs a Log Handler will receive. The SDK will only provide the Log Handler with Log Entries that are at or above the set log level ('debug' being considered the lowest level and 'silent' the highest level). It is important to choose the log level that fits your Log Handler and is appropriate for your application's scenario.

The SDK's log levels, and the information provided at each level, is described below. `silent`, being the highest level, will provide the least amount of logs and `debug`, being the lowest level, will provide the most amount of logs. All logs from higher levels are included in the levels lower than it.

- `silent`: The Log Handler will receive no Log Entries.
- `error`: Unhandled error information will be provided to the Log Handler.
  - If the SDK encounters an issue it cannot resolve, the error will be included in the logs. This likely points to an issue with the SDK itself or an issue with how the SDK is being used.
- `warn`: Warning messages for the application developer will be provided to the Log Handler.
  - If the SDK encounters an issue that it can recover and continue, a warning about the issue will be included in the logs. These logs point to issues that need to be handled by the application. For example, providing an invalid configuration to the SDK will cause a warning log that explains the issue.
- `info`: General information about the SDK's operations will be provided to the Log Handler.
  - The SDK will include many logs that outline how it is handling an operation. Reading through these logs should provide a high-level view of what the SDK is doing, and why it is doing it.
- `debug`: Detailed information about the SDK's operations, meant for debugging issues, will be provided to the Log Handler.
  - The SDK will include more information about its operations. Detailed information and relevant operation data are provided for understanding the specific scenario that the SDK was in during the operation.

The SDK's default log level is `debug`. This level will provide all of the logs to the Log Handler, and so is convenient for application development and testing.

It is important to note that the debug level may include sensitive information, so the level may not be suitable for end-users. Using the `debug` level with the default Log Handler is not recommended, since the logs will be printed to the browser's console. Two possibilities for ensuring data-privacy would be to use a higher log level outside of development or, if the debug information is still required, use a custom Log Handler that filters the logs and/or gathers them while not exposing them outside the application.

## Sample Log Handler Behaviours

The SDK's default Log Handler behaviour is targeted towards developers, and so we expect that applications will need to customize it for their end-users. Below are two examples of custom behaviour that may be desired in your application.

### Browser Console Filtering

The SDK's default Log Handler works well for development, but users may run into an issue with it if their browser is also filtering log levels. Browsers may hide console logs at the 'debug' level (sometimes called 'Verbose' level by browsers) by default, which could catch users unaware. This can become an issue if a user, tester, etc. is collecting logs to showcase an issue they have encountered.

A custom Log Handler can work around this browser behaviour by changing the method that is used when logging to the console. The Log Handler can change the method to something that ensures all logs are shown in the console at an equal level. For example, below is the default Log Handler again, but with a slight change to only use the `console.log` method.

```javascript 
/**
 * Custom Log Handler that changes how the log is given to the browser.
 * @method alwaysEqualLogHandler
 * @param  {LogEntry} entry
 */
function alwaysEqualLogHandler (entry) {
  // Compile the meta info of the log for a prefix.
  const { timestamp, level, target } = entry

  // Parse the meta-info the same as the default Log Handler.
  const shortId = target.id && target.id.length > 8 ? target.id.substring(0, 6) : target.id
  const shortName = shortId ? target.type + '/' + shortId : target.type
  const logInfo = timestamp + ' - ' + shortName + ' - ' + level
  const [log, ...extra] = entry.messages

  // Log the message to the console, but always use the "log" method.
  //    This ensures that all logs are treated equally by the browser, and none
  //    will be filtered out by default.
  console.log(logInfo + ' - ' + log, ...extra)
}
```

### Save to File

Again, the SDK's default behaviour of logging to the browser's console works well for development, but is only useful if the user is actually watching the browser's console. If an end-user needs to collect logs to report an issue they have encountered, it is cumbersome for them to save the logs from the browser console.

An application can implement a "save logs to file" feature with the help of a custom Log Handler. The application can use a Log Handler to save the Log Entry objects, then create a file with them at a later point. For example, below is the default Log Handler again, but with a slight change to save all of the logs it has received.

```javascript
// The maximum number of logs to save.
const maxLogs = 1000
// The saved logs.
let logs = []

/**
 * Custom Log Handler that also saves the Log Entries
 * @method saveLogsLogHandler
 * @param  {LogEntry} entry
 */
function saveLogsLogHandler (entry) {
  // Compile the meta info of the log for a prefix.
  const { timestamp, level, target, method } = entry

  // Parse and log the same as the default Log Handler.
  const shortId = target.id && target.id.length > 8 ? target.id.substring(0, 6) : target.id
  const shortName = shortId ? target.type + '/' + shortId : target.type
  const logInfo = timestamp + ' - ' + shortName + ' - ' + level
  const [log, ...extra] = entry.messages
  console[method](logInfo + ' - ' + log, ...extra)

  // In addition, save the LogEntry to be used later.
  //    Only keep the latest `maxLogs` amount of logs.
  logs = logs.splice(1 - maxLogs).concat(entry)
}
```

With the logs saved, the application can decide on a method for providing them directly to a user that best suits them. A simple method would be to create a `Blob` for the logs, and allow the user to download it as a file. See below for a sample implementation of this method.

```html 
<input type="submit" value="Download Logs" onclick="downloadLogs()" />
```

```javascript
/**
 * Function for providing the SDK logs to a user via a downloaded file.
 * @method downloadLogs
 */
function downloadLogs () {
  // Convert the saved logs into a NDJSON blob.
  const blob = new Blob([logs.map(JSON.stringify).join('\n')])

  // Create a button that will save the Blob as a file when clicked.
  const button = document.createElement('a')
  button.href = URL.createObjectURL(blob)
  // Give the file a name.
  button.download = Date.now().toString() + '_sdk' + client.getVersion() + '_logs.ndjson'

  // Auto-click the button.
  button.click()
}
```

When saving Log Entries, we recommend saving them in NDJSON format and retaining all of the data from each entry, rather than parsing them beforehand. It is possible to parse the Log Entries from the file afterwards, but impossible to reconstruct any data that is lost when they were parsed. This ensures that whoever is inspecting the log file has all of the data as it was provided by the SDK.

**N.B.:** If you require support about an issue with the SDK itself, we will ask you to provide a log file with the raw NDJSON Log Entries and the SDK configured at the 'DEBUG' `logLevel`.

## Live Demo

Want to play around with this example for yourself? Feel free to edit this code on Codepen.

The below demo is a mini-application that allows a user to subscribe/unsubscribe with the SDK. It uses the "Save to File" Log Handler from the above section to demonstrate this logging functionality.

<form action="https://codepen.io/pen/define" method="POST" target="_blank" class="codepen-form"><input type="hidden" name="data" value=' {&quot;js&quot;:&quot;/**\n * Kandy.io Logging Demo\n */\n\n// The maximum number of logs to save.\nconst maxLogs = 1000\n// The saved logs.\nlet logs = []\n\n/**\n * Custom Log Handler that also saves the Log Entries\n * @method saveLogsLogHandler\n * @param  {LogEntry} entry\n */\nfunction saveLogsLogHandler (entry) {\n  // Compile the meta info of the log for a prefix.\n  const { timestamp, level, target, method } = entry\n\n  // Parse and log the same as the default Log Handler.\n  const shortId = target.id && target.id.length > 8 ? target.id.substring(0, 6) : target.id\n  const shortName = shortId ? target.type + &apos;/&apos; + shortId : target.type\n  const logInfo = timestamp + &apos; - &apos; + shortName + &apos; - &apos; + level\n  const [log, ...extra] = entry.messages\n  console[method](logInfo + &apos; - &apos; + log, ...extra)\n\n  // In addition, save the LogEntry to be used later.\n  //    Only keep the latest `maxLogs` amount of logs.\n  logs = logs.splice(1 - maxLogs).concat(entry)\n}\n\n/**\n * Function for providing the SDK logs to a user via a downloaded file.\n * @method downloadLogs\n */\nfunction downloadLogs () {\n  // Convert the saved logs into a NDJSON blob.\n  const blob = new Blob([logs.map(JSON.stringify).join(&apos;\\n&apos;)])\n\n  // Create a button that will save the Blob as a file when clicked.\n  const button = document.createElement(&apos;a&apos;)\n  button.href = URL.createObjectURL(blob)\n  // Give the file a name.\n  button.download = Date.now().toString() + &apos;_sdk&apos; + client.getVersion() + &apos;_logs.ndjson&apos;\n\n  // Auto-click the button.\n  button.click()\n}\n\n/*\n * Initialize the SDK with the custom Log Handler.\n */\n\nconst defaultConfig = $DEFAULTCONFIGACCESS$\nconst { create } = Kandy\nconst client = create({\n  ...defaultConfig,\n  logs: {\n    logLevel: &apos;DEBUG&apos;,\n    handler: saveLogsLogHandler\n  }\n})\n\n/*\n * Auth & Subscription functionality.\n */\n\nfunction setCredentials () {\n  const username = document.getElementById(&apos;username&apos;).value\n  const password = document.getElementById(&apos;password&apos;).value\n\n  // Set the user&apos;s credentials.\n  //    Note: Changing credentials while a user is subscribed will cause issues.\n  client.setCredentials({ username, password })\n}\n\nfunction subscribe () {\n  client.services.subscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;])\n}\n\nfunction unsubscribe () {\n  client.services.unsubscribe([&apos;call&apos;, &apos;Presence&apos;, &apos;IM&apos;])\n}\n\n// Listen for changes to the SDK&apos;s authentication state.\nclient.on(&apos;auth:change&apos;, function () {\n  const user = client.getUserInfo()\n\n  document.getElementById(&apos;current-user&apos;).innerHTML = user.username || &apos;None.&apos;\n  document.getElementById(&apos;setCredentials&apos;).disabled = Boolean(user.username)\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = !Boolean(user.username)\n  log(&apos;Credentials set.&apos;)\n})\n\n// Listen for authentication errors.\nclient.on(&apos;auth:error&apos;, function (params) {\n  log(&apos;Credentials error: &apos; + params.error.message)\n})\n\n// Listen for changes to the user&apos;s subscriptions.\nclient.on(&apos;subscription:change&apos;, function (params) {\n  const isSubscribed = client.services.getSubscriptions().subscribed.length > 0\n\n  document.getElementById(&apos;is-subscribed&apos;).innerHTML = isSubscribed ? &apos;Subscribed.&apos; : &apos;Not subscribed.&apos;\n  document.getElementById(&apos;subscribeBtn&apos;).disabled = isSubscribed\n  document.getElementById(&apos;unsubscribeBtn&apos;).disabled = !isSubscribed\n  document.getElementById(&apos;setCredentials&apos;).disabled = isSubscribed\n  log(&apos;Subscription state changed.&apos;)\n})\n\n// Listen for subscription errors.\nclient.on(&apos;subscription:error&apos;, function (params) {\n  log(&apos;Subscription error: &apos; + params.error.message + &apos; (&apos; + params.error.code + &apos;)&apos;)\n})\n\n/*\n * Application Messages functionality.\n */\n\n// Utility function for appending messages to the message div.\nfunction log (message) {\n  document.getElementById(&apos;messages&apos;).innerHTML += &apos;<div>&apos; + message + &apos;</div>&apos;\n}\n\n&quot;,&quot;html&quot;:&quot;<script src=\&quot;https://cdn.jsdelivr.net/gh/Kandy-IO/kandy-link-js-sdk@840/dist/kandy.js\&quot;></script>\n<script src=\&quot;$DEFAULTCONFIGURL$\&quot;></script>\n<div>\n  <fieldset>\n    <legend>Set Credentials using your account information</legend>\n    User Email: <input type=\&quot;text\&quot; id=\&quot;username\&quot; /> Password:<input type=\&quot;password\&quot; id=\&quot;password\&quot; />\n    <input type=\&quot;submit\&quot; id=\&quot;setCredentials\&quot; value=\&quot;setCredentials\&quot; onclick=\&quot;setCredentials();\&quot; />\n    Current user: <span id=\&quot;current-user\&quot;>None.</span>\n  </fieldset>\n  <fieldset>\n    <legend>Subscribe</legend>\n    <input type=\&quot;submit\&quot; id=\&quot;subscribeBtn\&quot; disabled value=\&quot;Subscribe\&quot; onclick=\&quot;subscribe();\&quot; />\n    <input type=\&quot;submit\&quot; id=\&quot;unsubscribeBtn\&quot; disabled value=\&quot;Unsubscribe\&quot; onclick=\&quot;unsubscribe();\&quot; />\n    Current status: <span id=\&quot;is-subscribed\&quot;>Not subscribed.</span>\n  </fieldset>\n  <fieldset>\n    <legend>Logging</legend>\n    <input type=\&quot;submit\&quot; value=\&quot;Download Logs\&quot; onclick=\&quot;downloadLogs();\&quot; />\n  </fieldset>\n  <fieldset>\n    <legend>Application Messages</legend>\n    <div id=\&quot;messages\&quot;></div>\n  </fieldset>\n</div>\n\n&quot;,&quot;css&quot;:&quot;&quot;,&quot;title&quot;:&quot;Kandy.io Logging Demo&quot;,&quot;editors&quot;:&quot;101&quot;} '><input type="image" src="./TryItOn-CodePen.png"></form>

