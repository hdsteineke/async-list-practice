## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)



Rubric:

Grading Rubric: 2.5 points per array of items displayed on the site.

Goal: asynchronously fetch and render 4 separate lists of things to the same index.html file.
Start with the alchemy web template (Links to an external site.). Don't forget to add the supabase CDN to index.html and make a fetch-utils.js with some good copy paste work to set up the supabase client with the KEY and URL.
Repeat the following process 4 times, with 4 different domains, all in the same template:
Come up with a domain for this data (like 'dogs' or 'candies'). Let's assume you picked 'candies'.
In the supabase.io app, create a 'candies' table, Your table should have at least 4 columns.
In the supabase.io app, create at least three rows in your table.
In your app, in a separate file, write a render function for your domain. Your function should accept one object and returns a DOM element. This function should return at minimum a div with two p tags. The outer div should have a css class of 'candy-item'.
Add a fetch function called `getCandies()` to your fetch-utils.js file to fetch all candies asynchronously.
Then, in app.js use `window.addEvenListener('load', () => {})` to fetch and display your data from supabase.
In your load event listener, first fetch the data.
Then, loop through the fetched array array, and for each object, render and appends a styled candy element to the container element you grabbed from the DOM.
Move this fetch, render, and append into its own fetchAndDisplayCandies() function to make it more readable. After all, we'll be doing this for 4 different tables and that could get messy if we didn't abstract this work into functions.
Note: do this process one domain table at a time. Do not write 4 domain tables, then 4 render functions, etc. Please work through the first domain table, then the first render function, then the first display function.
