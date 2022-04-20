// #!/usr/bin/env node
const npm = require('npm-commands');
const process = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Include the projects you want to test in the list
projects = [
    { name: 'flow-manager', id: 1, path: 'C:\\Users\\Public\\Documents\\programs\\git\\projects\\magnolia-angular-flowmanager', icon: '🌊' },
    { name: 'digital-assistant', id: 2, path: 'C:\\Users\\Public\\Documents\\programs\\git\\projects\\magnolia-angular-chatbot', icon: '🤖' },
];

projectsListMessage = '';
projects.forEach(project => {
    let icon = project.icon ? project.icon : '  ';
    projectsListMessage += `    ${project.id}. ${icon} ${project.name}\n`
});

clearAndGreet();
chooseProject();

function chooseProject() {
    console.log('\x1b[36m%s\x1b[0m', 'Choose the project you want to test:');
    console.log(projectsListMessage);
    rl.question(`Choose Wisely: `, function (projectId) {
        runTest(projectId);
    });
}

function runTest(projectId) {
    let project = projects.find(p => p.id == projectId);
    if (!project) {
        clearAndGreet();
        console.log('\x1b[31m%s\x1b[0m', `There is no project with id ${projectId} 🖐`);
        chooseProject();
        return;
    }

    // Run Tests
    console.log('\x1b[36m%s\x1b[0m', `Testing ${project.name}`);
    // npm().cwd(project.path).run('test');

    console.log('\nWhat do you want to do now?');
    console.log(`    1. Test again?
    2. Different project
    3. Exit`);

    rl.question('Im waiting 😤: ', function (answer) {
        clearAndGreet();
        if (answer == '1')
            runTest(projectId);
        else if (answer == '2')
            chooseProject();
        else if (answer == '3')
            rl.close();
        else
            rl.close();

    });
}

function clearAndGreet() {
    console.clear();
    console.log('\x1b[36m%s\x1b[0m', "Hello dear CNTS developer! Testing again ey? 😥");
}

rl.on('close', function () {
    console.log('\nCiao Bella ❤ !!!');
    process.exit(0);
});