# Assignment 8: Introduction to React

**[Bored Edition]**  
**By Jordan Miller**

The purpose of this assignment is to learn the basics of React by creating a simple client-side application. The application will allow the user to get randomized suggestions for activities to alleviate their boredom! The activities will come from a third-party API called the Bored API; check out its documentation here:  
https://www.boredapi.com/documentation

In the starter files, I've included a video of how the application should work. I've also included a stylesheet that you can use if you want, although it's not necessary.

## Task 1: Setup

In your project folder, set up two subfolders—express and react—that each have a separate Node.js application. One application should run an Express application serving static files, and the other should run Parcel, compiling the React bundle to the express folder to be sent to the client when requested. You can use one of the demo applications from the slides or video lessons as a starting point.

## Task 2: App Hierarchy and Type Chooser

This application will eventually have at least three components, but for now, let's start with two. Create a new component called App; as you may expect, this will be the parent component that contains all other components in the application.

Next, create a component called TypeChooser and have it rendered in App. The purpose of this component is to render a list of different types of activities that a user can choose from.

In the TypeChooser component, create an array of types with the useState hook within the TypeChooser component.

The activity types are the following:  
"education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"

Have the component render this array as an unordered list with anchor tags. Remember that each list item must have a key. (The types will always be uniquely named, so you can simply use the type names for the key.)

The hyperlinks don't have to do anything when you click on them yet. That's coming up in the next task.

## Task 2: Activity Component

Now create a new component called Activity and have it rendered in the App component. The purpose of this component is to display an activity that corresponds to the chosen type. But before requesting an activity from the API, let's first just have this component render the type of activity that was chosen in the TypeChooser component. Note that TypeChooser and Activity are sibling components that must now share information with each other.

Use an event listener function to detect when a type has been clicked. The chosen type should be stored in the state somewhere (figure out the best place for this!) and then rendered in the Activity component. Use event.preventDefault() to prevent the anchor tag from reloading the page when clicked.

A few notes:

- Remember that sibling components cannot communicate directly with one another. They must communicate through a parent.
- Remember to use the appropriate state setter function to update the state.

## Task 3: Loading the Activity from the API

You should now have a simple three-component application that allows one to choose an activity type from the TypeChooser component and see the type rendered in the Activity component. Now we need to request an activity from Bored API that corresponds to the chosen type.

Use the useEffect hook to make an asynchronous GET request to the Bored API whenever the Activity component receives an updated type prop. Use the API documentation to figure out how to get a random activity corresponding to one particular type:  
https://www.boredapi.com/documentation

Once the activity has been loaded, it should be saved in state. Figure out which component should store the activity data. Render the description of the activity in the Activity component.

At this point, all basic functionality of the application should be working: the user should be able to click on a type in the TypeChooser component and see an activity displayed in the Activity component. Next, we'll add a few extra features.

## Task 4: Loading a New Activity

Our application currently provides a randomized activity each time a new type is chosen. But what if the user wants to get a new activity of the currently-chosen type? Simply clicking on the type again in TypeChooser won't do it, because the Activity component only loads a new activity when a new type has been received as a prop.

There are a few ways to handle this, but what I’d like you to do is add a button to the Activity component with text "Get another activity" that loads a new activity of the currently-chosen type when clicked. This button should not appear in the application until after the first time a type has been chosen; after all, it doesn't make sense to load a new activity if a type hasn't been chosen yet!

## Task 5: Loading Indicator

Requesting a new activity from the API is an asynchronous action, and there's a chance that it may take longer than expected to get a response. In the case that a response is delayed, we should let the user know that their choice has at least been received and a response is forthcoming. It may be confusing and frustrating for the user if they choose a type and then nothing seems to happen. So, let's add a text indicator that says "loading..." to let the user know when the application is waiting for a response from the API. Figure out how to do this. A few notes:

- The "loading..." message should not appear until after a type has been chosen. (so not when the application is first loaded.)
- Setter methods for changing the state are also asynchronous. So there is actually more than one asynchronous thing happening here, and we need to make sure that all asynchronous operations have completed before removing the loading message. Hint: use the useEffect hook to check to make sure the necessary state update has occurred before removing the loading message.
- The Bored API is actually quite fast, so it may be difficult to test this functionality. To artificially slow down your connection, open the inspector, navigate to the Network tab, click on the dropdown that says "No throttling" and choose a slower connection speed. (This will cause the application to load glacially slow when you refresh the page, so turn it off when you're done testing.)

## Task 6: Highlight Chosen Type

The last thing to do is implement a small style enhancement to improve the usability of the application: change the background color of the currently-chosen type in the TypeChooser component. To do this, use a JavaScript style object applied within the component itself. Figure out how to do this. (See the demo video, in which I used lightblue as the background color.)

## Hand In

Delete the .node_modules folder and .parcel-cache in both the react and express subfolders, rename the project folder to a8-firstname-lastname, zip the folder, and hand it in to D2L. Then call on me to check your work.

## Checklist

- Basic React application setup
- TypeChooser component lists all types
- State updated when type chosen
- Activity loaded from API upon choosing type
- "Get another activity" button implemented
- Loading message displayed after new type chosen but before new activity loaded
- Chosen type is colored in TypeChooser component
