---
layout: page
categories: quickstarts-javascript
title: Call States
permalink: /quickstarts/javascript/link/Call%20States
position: 2
---

# Call States

Any given Call instance has its information persisted in the SDK state associated with the application. Therefore the application can use the `call.getById` or `call.getAll` functions to get information of a particular call or calls.
Call information persists beyond the call's lifetime.

To see the supported Call states, see `api.call.states` in API documentation.

When an action is triggered, the Call can transition to another state.
The action can either be explicitly initiated by the user or implicitly triggered by the SDK (for example as a result of internal error or a server response).
The actions mentioned below are just few examples and therefore they do not cover all possibilities.

* If current state is '__Initiating__' then it can transition to '__Initiated__' or '__Ended__'.

    Going into '__Initiated__' state is the result of a user making a call, where all conditions have been locally met (e.g. device(s) locally available, server accepted the request). The Call is now waiting to be received on the remote side, and will be updated again when a response is received.

    Going into '__Ended__' state is the result of user hanging up at that very moment or an error being reported. If there is an error reported, then application could try to show the actual error (and suggest a solution) to user.

* If current state is '__Initiated__' then it can transition to '__Ringing__', '__Early media__', '__Ended__' or '__Cancelled__'.

    Going into '__Ringing__' state is an indication that server successfully delivered the call request to remote endpoint, therefore the application on both sides of the call could play audio sound to indicate this as well as visually convey this state.

    Going into '__Early media__' is the result of caller receiving media  track, without the call having been answered. Application should be ready to playback/render any incoming track when going into this state.

    Going into '__Ended__' state is the result of caller hanging up or an error being reported.

    Going into '__Cancelled__' state is an indication that request was cancelled by the server side for various reasons (e.g. caller hung up or callee answered the call from anotehr device). This state only applies to the callee's side.  Application should check for any reported status and convey this to caller.

* If current state is '__Early media__', the call's state can change to any of these states: '__Connected__' or '__Ended__'.

    Going into '__Connected__' state could be the result of callee answering the call.
    Application could use this state to enable any of the mid-call operations.

    Going into '__Ended__' state is the result of caller hanging up or an error being reported.

* If current state is '__Ringing__'  then it can transition to '__Ended__', '__Cancelled__' or '__Connected__'.

    Going into '__Ended__' state is the result of caller hanging up or callee rejecting the incoming call or an error being reported.

    Going into '__Cancelled__' state: see above description.

    Going into '__Connected__' state is the result of callee answering the call. Application could use this state to enable any of the mid-call operations.

* If current state is '__Connected__', the call's state can transition to: '__On Hold__' or '__Ended__'.

    Going into '__On Hold__' state is the result of either caller or callee putting call on hold. When a Call is set on hold, it means its media directions was set as inactive. Application could make use of this state to report what party initiated the action and thus choose to disable certain functionality.

    Going into '__Ended__' state is the result of caller or callee hanging up the call or an error being reported.

* If current state is '__On Hold__', then it can transition to '__Connected__' or '__Ended__'.

    Going into '__Connected__' state is the result of re-establishing the sending and receiving of media tracks by the party who put the call on hold, originally. If both parties put the call on hold, then both have to unhold the call in order to go into this state.

    Going into '__Ended__' state is the result of caller or callee hanging up the call or an error being reported.

