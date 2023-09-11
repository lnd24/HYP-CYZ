# Hypermedia Application Project - Group CYZ

## Team Members
- Xinyi Cheng [@suannaituanzi]
- Zheng Maria Yu [@Trixyz28]
- Linda Zhu [@lnd24]

## Implementation characteristics
- Hosting Service: Vercel + Supabase.
In order to realize a dynamic website, we decided to host the project adopting the combination Vercel + Supabase. Vercel allows us to deploy the project directly from the master branch of the GitHub repository, while we regularly worked on the dev branch. In addition, our database relies on the Supabase service.

- Rendering mode: Server-Side Rendering.
Our website is implemented with the Vue.js framework and Nuxt3, and this allows us to realize Server-Side Rendering for the project. The SSR technique renders the webpage on the server rather than in the browser, so the user can get a fully rendered HTML page. This is adopted for the faster availability of the content, along with better accessibility and indexation by search engines. 

- Extra libraries used: None.
No extra libraries were used for the fact that we tried to play around with CSS, templates, and scripts ourselves to test our skills. We created some Vue components to facilitate the page rendering. 

- Extra features: Search, Filter, Interactive Map.
We implemented the search function and the date filter in the pages All Lectures and All Activities, for the users’ convenience. An interactive map imported from Google Maps was used to display the location of the Summer School’s Office. 

- Accessibility inspection: WAVE
We tried to perform accessibility inspection with the WAVE tool, which discovered some deficiencies in the presentation of the website. 

- SEO features
From the point of view of the SEO, we set the Title, Description, Site Name, and Viewport for all the pages.

## Project Structure
The structure of our project follows the standards of Nuxt3, and it is presented below.

- assets/ served the general css stylesheets in assets/css and some static images in assets/img.

- components/
Banner is implemented for rendering an horizontal banner with a title and a subtitle displayed in parallel. It is mainly used in All Lectures Page. 
BigCard is a card used to display in focus a big image of the chosen element and its title and its link, and all the elements of the list are displayed in small images with their title below it.
BreadCrumbs is the interactive orientation info of the page. It is present in all the pages except the Home page.
Card represents a card-like box that contains and shows the image, title, subtitle and the link of an object.
PageTitle is implemented for displaying a centered title and a textual introduction on the upper part of the main pages of the website. 
SmallCard is a simplified version of Card without the image.
Text is a paragraph of text content into the page, along with its title.
TheFooter is the footer of the page.
TheHeader is the header of the page.

- layouts/ contains: 
default: layout of the page with breadcrumbs

dorIndex: layout of the index page, without breadcrumbs

- pages contains:
lectures/ socials/ speakers/ :
- [id].vue = single page of topic
- index.vue = is group of topics page, a list of all the entries
activities/
- index.vue = it contains the list of lectures and the list of social activities
- about.vue: a static page with the information of the summer school
- contact.vue: a static page with the contacts of the summer school
- daily_schedule.vue: it contains the list of lectures and list of social activities filtered by date
index.vue: the home page

- public contains the icons and the images	
