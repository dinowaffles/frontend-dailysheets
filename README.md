# DAILY SHEETS

## Purpose
To create an electronic daily sheet system to facilitate data exchange between parents and daycare providers. A daycare provider can add and update data for a child such as how much they ate, when their diaper was changed, and what activities they did that day. Then parents/guardians would be able to view that data for their child(ren).   

The idea for this project came while watching my own son's daycare teachers trying to manage a dozen+ half-sheets of paper on a clipboard on a windy day out on the playground as several parents waited for them to find their particular child's sheet. 

![Gif of completed project](/src/assets/images/completed-gif.gif)

## Planning
Here's my [Planning Folder](https://github.com/dinowaffles/frontend-dailysheets/tree/main/planning)

## Challenges/Hurdles
My biggest challenge was learning how to utilize the PATCH method to send updated data to the database without scrubbing all previous entries. This was important, as the main utilization of the application is for incremental updates throughout the day. I was able to resolve this issues by reformatting my service layer to check if the incoming data has a null value and ignoring it if so. 

## Technology Used
- Front-End: Angular, JavaScript, Typescript, HTML, CSS
- Back-End: Java, Spring Boot, Maven, PostgreSQL, PgAdmin, Postman

## Installation
- Dependencies: Bootstrap and jQuery (`npm install --save bootstrap jquery`) 
