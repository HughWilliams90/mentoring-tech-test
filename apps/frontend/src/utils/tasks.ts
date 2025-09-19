export const veryEasyTasks: Task[] = [
    {
        title: 'Task 1',
        description: 'Fix a typo',
        context: 'In the main nav there is a typo find it and fix it.'
    },
    {
        title: 'Task 2',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
    {
        title: 'Task 3',
        description: 'A small styling change',
        context: 'There is a button on blah page that is wrong fix it'
    },
    {
        title: 'Task 4',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
];

export const easyTasks: Task[] = [
    {
        title: 'Task 1',
        description: 'Implement a dark mode / light mode switch',
        context: 'Add a button at the bottom of the main nav bar that can switch the theme between light and dark'
    },
    {
        title: 'Task 2',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
    {
        title: 'Task 3',
        description: 'A small styling change',
        context: 'There is a button on blah page that is wrong fix it'
    },
    {
        title: 'Task 4',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
];

export const mediumTasks: Task[] = [
    {
        title: 'Task 1',
        description: 'Implement a dark mode / light mode switch',
        context: 'Add a button at the bottom of the main nav bar that can switch the theme between light and dark'
    },
    {
        title: 'Task 2',
        description: 'Write an e2e test',
        context: 'TBC'
    },
    {
        title: 'Task 3',
        description: 'Improve performance of page',
        context: 'There is a slow blah on blah page'
    },
    {
        title: 'Task 4',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
];

export const hardTasks: Task[] = [
    {
        title: 'Task 1',
        description: 'Fix a typo',
        context: 'On the blah page there is a typo please fix it.'
    },
    {
        title: 'Task 2',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
    {
        title: 'Task 3',
        description: 'A small styling change',
        context: 'There is a button on blah page that is wrong fix it'
    },
    {
        title: 'Task 4',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
];

export const veryHardTasks: Task[] = [
    {
        title: 'Task 1',
        description: 'Fix a typo',
        context: 'On the blah page there is a typo please fix it.'
    },
    {
        title: 'Task 2',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
    {
        title: 'Task 3',
        description: 'A small styling change',
        context: 'There is a button on blah page that is wrong fix it'
    },
    {
        title: 'Task 4',
        description: 'Fix the unit test for that typo',
        context: 'The person who wrote the unit test for the feature wrote the test so that it matched their code, now that you have fixed the typo the test will now fail, fix the test.'
    },
];

export interface Task {
    title: string,
    description: string,
    context: string
}