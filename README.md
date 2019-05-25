# Scraper
Scraper is an app that allows users to get nfl articles from ESPN. When the user clicks the "Scrape Articles" button, the app returns any new articles since the last time the button was clicked. Articles always have a title and clickable link, summaries are displayed when available. Once the user has the results, they have the option to save the article, moving it to a saved page. If no new articles are available, no results are displayed. If the user chooses to view their saved articles, each article has the option to add a note or delete the article from saved. All article notes can be edited or deleted as well. The database stores all article titles, links and summaries recieved when the scrape button is clicked, it also stores any user generated notes associated with the article. No duplicate articles are saved in the database and the database stores all articles whether the user marks them as saved or not. 

**Note** *After cloning the repository, you will need to run npm install and provide your own mongo database credentials in order for scraper to run properly.*

## Try It Out 
[Visit the Heroku Site](https://mysterious-gorge-22441.herokuapp.com/)

## Technologies Used
- Bootstrap CSS
- Handlebars
- JavaScript
- JQuery
- MongoDB
- node.js
- npm axios
- npm cheerio
- express
- express-handlebars
- mongoose
- mLab MongoDB

## Author
Lara Eller
