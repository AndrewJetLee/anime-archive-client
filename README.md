<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/AndrewJetLee/anime-archive-client/blob/main/public/images/aa-logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Anime Archive</h3>

  <p align="center">
    Voting has never been more accessible or more secure than with Secure Your Vote!
    <br />
    <a href="https://github.com/blue-ocean-bubbles/syv"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://13.90.213.141/">View Demo</a>
    ·
    <a href="https://github.com/blue-ocean-bubbles/syv/issues">Report Bug</a>
    ·
    <a href="https://github.com/blue-ocean-bubbles/syv/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a> </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#walkthrough">Walkthrough</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

# anime-archive-client
An application that allows users to find information about their favorite anime or manga and save it into a personalized list

**Link to project:** https://anime-archive.netlify.app/

![aa-home-page](https://user-images.githubusercontent.com/73206753/162072871-f7d62e42-525c-40e6-872d-d8504da2d969.gif)

## How It's Made:

**Front-end:** HTML, CSS, JavaScript, React, Styled-Components, Material UI

**Back-end:** MongoDB, Node, Express, Passport


### Walkthrough

![aa-home-page](https://user-images.githubusercontent.com/73206753/162072871-f7d62e42-525c-40e6-872d-d8504da2d969.gif)

* React states and refs are used to implement lazy skeleton loading upon scroll to a particular element on the page in order to circumvent the rate limitation of the Jikan API.
* The Swiper library was also used to create the carousels that are "swipable" on touch-screen devices. 


![aa-browse-page](https://user-images.githubusercontent.com/73206753/162075224-4cd63406-021b-4b56-bb76-f4e8c085e1da.gif)

* React was particularly useful in creating reusable components that were recycled in multiple pages. 
* One such instance is the "List" component of media elements on the browse page. 
* This list component also has infinite scroll capability that did not need to be implemented more than one time. 

![aa-seasonal-page](https://user-images.githubusercontent.com/73206753/162076015-d9471083-b616-4285-a51a-0a678bff14d3.gif)

The various hooks that the React API provides allowed me to trigger API calls upon state changes. An example of this is on the seasonal page where upon selection of a different season, the page dynamically renders using a different set of data received from the Jikan API. Functional programming constructs were also used clientside to filter this set of data in order to sort them according to certain parameters. As previously stated, this page also reuses the "List" component, which cut down on the generic code necessary for this page. 


![aa-anime-search](https://user-images.githubusercontent.com/73206753/162096544-609a7208-ecaa-4a71-96cf-bc33e64308f0.gif)

The search page can filter results by multiple parameters including genre, type, status, rating and also sort these results by score, popularity, title, and rank. 


![aa-nav-search](https://user-images.githubusercontent.com/73206753/162097298-1075dd1a-b039-41f6-a5e1-66215b0e2d58.gif)

A more general search bar also exists on the nav that searches for anime, manga, and/or characters associated with the inputed query. 


![aa-register](https://user-images.githubusercontent.com/73206753/162097477-7821dd48-d7ee-4ff9-8409-54eca45f9e0f.gif)

Jikan API did not have full CRUD functionality in regards to user account information and personalized list, so a REST API following the MVC paradigm was created using Node, MongoDB and Mongoose. 
Information validation for registration uses REGEX clientside and passport's local strategy serverside. 
Encryption of sensitive information done using Node's Crypto library
User authentication to access protected routes utilizes session-cookie based authentication. 


![aa-userlist-crud](https://user-images.githubusercontent.com/73206753/162099678-912fe839-2274-42db-b4bd-328c07b2895e.gif)

User anime list has full CRUD functionality. 


![aa-userlist-filter](https://user-images.githubusercontent.com/73206753/162099745-d3f1500f-dcdc-4460-85eb-1be7e0e643c6.gif)

User list can also be filtered





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


