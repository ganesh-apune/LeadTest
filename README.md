# LeadTest
This project consist of Rest APIS. Project is about to explore courses.Courses can be searched by anyone without authentication. 
User Features API’s (does not require Auth)
1.	View list of all courses (Listing page)
2.	View list sorted by popularity/Author Name/Course Names (Listing page with sorting)
3.	Filter list as per categories i.e. View all courses matching Category 1 and Category 2 (Probably show chips for all categories on top and user can select multiple to filter)
4.	Search categories - User will enter a query and hit the Search button. Any courses that have a matching course name or author name to the user query, will be shown in results.

Admin Features (uses APIs with auth)
1.	Add Courses (with all data mandatory)
2.	Delete Courses
3.	Update meta-data of courses (Name cannot be modified; rest of the fields can be modified)

# Technologies
●	RemoteMySQL (Free MySQL Host)
●	Github
●	Passport Auth for authentication
●	Node express sequalize

# Setup
To run this project, install it locally using npm

npm install
node index.js or use nodemon 
