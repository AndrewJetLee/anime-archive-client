# anime-archive-client
An application that allows users to find information about their favorite anime or manga and save it into a personalized list

**Link to project:** https://anime-archive.netlify.app/

![aa-home-page](https://user-images.githubusercontent.com/73206753/162072871-f7d62e42-525c-40e6-872d-d8504da2d969.gif)

## How It's Made:

**Tech used:** 
Front-end: HTML, CSS, JavaScript, React, Styled-Components, Material UI
Back-end: MongoDB, Node, Express, Passport

The home page uses React states and refs to implement lazy skeleton loading upon scroll to a particular element on the page. This was done in order to circumvent the rate limitation of the Jikan API (three calls per second). The Swiper library was also used to create the carousels that are "swipable" on touch-screen devices. 

![aa-home-page](https://user-images.githubusercontent.com/73206753/162072871-f7d62e42-525c-40e6-872d-d8504da2d969.gif)

React was particularly useful in creating reusable components that were recycled in multiple pages. One such instance is the "List" component of media elements on the browse page. This list component also has infinite scroll capability that did not need to be implemented more than one time. 

![aa-browse-page](https://user-images.githubusercontent.com/73206753/162075224-4cd63406-021b-4b56-bb76-f4e8c085e1da.gif)

The various hooks that the React API provides allowed me to trigger API calls upon state changes. An example of this is on the seasonal page where upon selection of a different season, the page dynamically renders using a different set of data received from the Jikan API. Functional programming constructs were also used clientside to filter this set of data in order to sort them according to certain parameters. As previously stated, this page also reuses the "List" component, which cut down on the generic code necessary for this page. 

![aa-seasonal-page](https://user-images.githubusercontent.com/73206753/162076015-d9471083-b616-4285-a51a-0a678bff14d3.gif)




## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *fuck yeah I did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel


