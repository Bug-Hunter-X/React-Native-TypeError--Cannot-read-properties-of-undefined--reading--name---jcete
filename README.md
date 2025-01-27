# React Native TypeError: Cannot read properties of undefined (reading 'name')

This repository demonstrates a common React Native error: `TypeError: Cannot read properties of undefined (reading 'name')`. This occurs when attempting to access a property of an object that hasn't been properly initialized or is undefined.  The example shows how this happens when dealing with asynchronous data fetching and how to resolve it using optional chaining and nullish coalescing.  The solution highlights safe access to object properties before rendering.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
4. Observe the error in the console (before the fix is applied).
5. Apply the fix in `bugSolution.js`, rerun the app, and observe the corrected behavior.