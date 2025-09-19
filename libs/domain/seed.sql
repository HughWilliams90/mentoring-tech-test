-- Use the database
USE database;

-- Create a test table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_subtitle VARCHAR(255) NOT NULL,
    task_description MEDIUMTEXT NOT NULL,
    completed TINYINT DEFAULT 0,
    completed_at DATE NULL,
    difficulty ENUM('VERY_EASY', 'EASY', 'MEDIUM', 'HARD', 'VERY_HARD') DEFAULT 'VERY_EASY'
);

CREATE TABLE exercise_types (
                                id INT AUTO_INCREMENT PRIMARY KEY,
                                type VARCHAR(50),
                                record VARCHAR(50),
                                UNIQUE KEY (type)
);

CREATE TABLE exercises (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           type VARCHAR(50),
                           duration INT,
                           location INT,
                           FOREIGN KEY (type) REFERENCES exercise_types(type)
);

-- VERY_EASY tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 1', 'Fix a typo', 'There is a typo in the main navigation bar on the left hand side of the screen. Find the typo and fix it.', 'VERY_EASY'),
                                                              ('Task 2', 'Fix a unit test',  'The person who wrote the unit test for the feature wrote the test to match their code. The typo fix from task 1 will now cause the test to fail. Fix the test.', 'VERY_EASY'),
                                                              ('Task 3', 'Use browser dev tools',  'Open dev tools in the browser and find the element with ID "HIDDEN_ELEMENT". Edit the style using the dev tools to show the element, then take a screenshot and add to public folder in the project.', 'VERY_EASY'),
                                                              ('Task 4', 'Use postman to test an api',  'Open Postman and make a get request to the /health API, then take a screenshot and add to the public folder in the project', 'VERY_EASY');

-- EASY tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 5', 'E2E', 'Using the playwright e2e project add a test that goes to each tab in the app and check the title is displayed', 'EASY'),
                                                              ('Task 6', 'Styling change',  'Put the version number and collapse buttons at the bottom of the nav menu', 'EASY'),
                                                              ('Task 7', 'Convert a JS file to TS', 'The calculations screen is currently written in javascript, convert it to typescript adding any types you think would be useful', 'EASY'),
                                                              ('Task 8', 'Implement dark mode light mode switch','Above to the version number in the main navigation bar add a light mode dark mode switch that changes the them of the app', 'EASY');

-- MEDIUM tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 9', 'Add a db column',  'Add a new column to the tasks table called areas_covered which is an array of areas covered by each task i.e Frontend, Backend, DevOps, QA. (Remember to add it to seed.sql too)', 'MEDIUM'),
                                                              ('Task 10', 'Update the domain layer', 'Now that you have a new field in the tasks table you need to let typeORM know about it. Add the column to the models in the code, so that in can be accessed via the Task entity class.', 'MEDIUM'),
                                                              ('Task 11', 'Edit the api response', 'Add the new field from task 1 to the GET /tasks endpoint and send it down to the ui', 'MEDIUM'),
                                                              ('Task 12', 'Add a tooltip to each task card', 'Now that you are receiving the areas covered for each task add an info icon to each task card which shows the areas covered on hover.', 'MEDIUM');

-- HARD tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 13', 'TDD', 'Use TDD principles to complete the tasks on the calculations page', 'HARD'),
                                                              ('Task 14', 'Refactor slow code', 'the GET /data2 api is very slow. Refactor the code to make it faster', 'HARD'),
                                                              ('Task 15', 'Make the application run at https://local.nexal.com:3000', 'You need to change where the application is being served, you will also need to edit your local hosts file and create local self served certificates', 'HARD'),
                                                              ('Task 16', 'Pick ui library','Pick a ui library to present the data from the /data1 endpoint as a trend graph on the dashboard page', 'HARD');

-- VERY_HARD tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 17', 'Implement sign up and login',  'Implement sign up and login page - you will need to learn about password salt and hash so that you are not storing plain text passwords, then make private apis accept basic auth', 'VERY_HARD'),
                                                              ('Task 18', 'Implement JWT tokens', 'After a user completes login they should receive a Jwt token with an expiry and a refresh token to refresh the jwt token for a given period, this will give a user a session, you will then need to make private api calls respect the jwt token.', 'VERY_HARD'),
                                                              ('Task 19', 'Build a feature from scratch', 'Product have asked for a new screen to be created called Friends where a user can add other users as friends', 'VERY_HARD'),
                                                              ('Task 20', 'Start your own project', 'Using everything you have learned, start your own repository, make something you want to make, feel free to fork the test project and amend to your needs, if you like this stack', 'VERY_HARD');

INSERT INTO exercise_types(type, record) VALUES
                                             ('Run', '4 miles'),
                                             ('Weights', '23 kg'),
                                             ('Swimming', '12 lengths'),
                                             ('Rowing', '7 miles'),
                                             ('Cycling', '9 miles'),
                                             ('Golf', '3 under par'),
                                             ('Climbing', '40 foot'),
                                             ('Skipping', '120 reps')