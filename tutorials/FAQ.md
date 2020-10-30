---
layout: page
categories: quickstarts-javascript
title: FAQ
permalink: /quickstarts/javascript/link/FAQ
---

# FAQ

Here are some frequently asked questions about the Kandy SDKs.

### 1. How do I configure the SDK to connect to my region/server?

The Kandy.js Link SDK allows you to connect to multiple servers including on-premise servers. For connecting to our Kandy cloud platforms, you can refer to the following documentation links to guide you through configuration:

- [Kandy US Region Configuration](https://kandy-io.github.io/kandy-callMe-js-sdk/tutorials/?config=us#/Configurations)
- [Kandy UAE Region Documentation](https://kandy-io.github.io/kandy-callMe-js-sdk/tutorials/?config=uae#/Configurations)
- [Kandy EMEA Region Documentation](https://kandy-io.github.io/kandy-callMe-js-sdk/tutorials/?config=emea#/Configurations)

You can also start in our [Kandy.js Support](https://github.com/Kandy-IO/kandy-js-support) GitHub repository where we have provided some default configurations for each above regions.

### 2. Can I use the Kandy.js Link SDK to make anonymous calls?

To make anonymous calls, you will need to use the [Kandy.js CallMe SDK](https://github.com/Kandy-IO/kandy-callMe-js-sdk) which is streamlined for anonymous access to calls. To get started, head over to the [Get Started](https://kandy-io.github.io/kandy-callMe-js-sdk/tutorials/?config=us#/Get%20Started) guide for that SDK.

### 3. Can I make video calls with multiple parties?

No. While you can make calls to conference bridges, the Kandy platform doesn't have support for managing multiple parties in a call.

### 4. What information do I need to provide when reporting an issue?

When reporting an SDK issue, please include the following information:

- OS and browser versions. (e.g. macOS 10.15.7, Firefox 83)
- Kandy SDK version. (e.g. Kandy Link JavaScript SDK 4.20.0)
- Show the issue in a reduced reproduction case that includes an example HTML file/URL, or using an online sandbox (e.g. [CodePen](https://codepen.io/pen/).
- Capture the SDK logs for all parties. See our [logging quickstart](Logging.md) for more information.
- Time of when the issue occurred.
- Steps to reproduce the problem. I.e. What's the code using the SDK that's failing?
- Expected result and actual results.
- Whether this has worked before.

