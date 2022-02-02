## ERD Diagram
Planning: Each daily sheet will belong to only one student. However, students will have a new daily sheet for each day they are present at daycare. Each student will belong to only one classroom, but each classroom will have many students. 
Result: In the end, the OneToMany mapping wasn't functioning how I wanted it to, and it was not essential to have each model interconnected as such. I may attempt to do so in the future, but in the project as it stands, each model is a standalone entity.
![ERD Diagram](/src/assets/images/erd-diagram.png)

## Wireframes
The daycare admin would have access to view, update, delete, and create both students and classrooms. The teachers at the daycare would be able select a classroom from the dropdown menu, then see a list of students in the sidebar. The bulk of the teacher view is dedicated to areas where they can update what the child did that day. The parent/guardian view is similar to that of teacher, but they can only view the data that has already been entered.
![Wireframes](/src/assets/images/wireframes.png)
