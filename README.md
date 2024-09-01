# 240901 - TennisRankingsUnstyled
This is the unstyled version of the Men's Singles ATP Rankings.

This is my first time trying the vue cdn. It is a little disappointing to not be able to write with the simple template syntax. I did a bit of reading and I think it is something to do with the browser can only being able to interpret .js files (not .vue files). Even so, I do like the idea of a very small repository with a couple of files with the CDN and I think I will do most of my miniprojects like this. 

I got my web scraping code from the previous version of this. However, instead of using the db, I make the python script create a js file which contains the scraped data. By doing it like this I can easily import the data with the js file and can deploy it as a static webpage. Another change is that I also added the week of the ranking that is displayed as a part of the data. Finally, I made a dropdown where you can filter the players by country.
