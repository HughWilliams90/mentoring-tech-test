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

-- VERY_EASY tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 1', 'Fix a typo', 'In the main nav there is a typo find it and fix it.', 'VERY_EASY'),
                                                              ('Task 2', 'Fix a unit test',  'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.', 'VERY_EASY'),
                                                              ('Task 3', '',  '', 'VERY_EASY'),
                                                              ('Task 4', '',  '', 'VERY_EASY');

-- EASY tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 5', 'E2E', 'Using the playwright e2e project add a test that goes to each tab in the app and check the title is displayed', 'EASY'),
                                                              ('Task 6', 'Styling change',  'Put the version number and collapse buttons at the bottom of the nav menu', 'EASY'),
                                                              ('Task 7', '', 'There is a button on blah page that is wrong fix it', 'EASY'),
                                                              ('Task 8', '', 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.', 'EASY');

-- MEDIUM tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 9', 'Add a db column',  'Add a new column to the tasks table called areas_covered which is an array of areas covered by each task i.e Frontend, Backend, DevOps, QA.', 'MEDIUM'),
                                                              ('Task 10', 'Update the domain layer', 'Now that you have a new field in the tasks table you need to let typeORM know about it. add the column to the models in the code, so that in can be accessed via the Task entity class.', 'MEDIUM'),
                                                              ('Task 11', 'Edit the api response', 'Add the new field from task 1 to the GET /tasks endpoint and send it down to the ui', 'MEDIUM'),
                                                              ('Task 12', 'Add a tooltip to each task card', 'Now that you are receiving the areas covered for each task add an info icon to each task card which shows the areas covered on hover.', 'MEDIUM');

-- HARD tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 13', 'TDD', 'Use TDD principles to add the following calculation to the calculations page', 'HARD'),
                                                              ('Task 14', 'Refactor complex code', 'The code for the TBC page is very hard to read, refactor it so that it is easier reason about', 'HARD'),
                                                              ('Task 15', 'Implement pipelines', 'You need the unit tests to run whenever someone raise a PR, use some sort of CI/CD (github actions, bitbucket pipelines) to do this', 'HARD'),
                                                              ('Task 16', 'Pick a ui library','Pick a ui library to present the data from the /widget endpoint as a pie chart on the dashboard page', 'HARD');

-- VERY_HARD tasks
INSERT INTO tasks (task_name, task_subtitle, task_description, difficulty) VALUES
                                                              ('Task 17', '',  '', 'VERY_HARD'),
                                                              ('Task 18', '', '', 'VERY_HARD'),
                                                              ('Task 19', '', '', 'VERY_HARD'),
                                                              ('Task 20', '', '', 'VERY_HARD');
