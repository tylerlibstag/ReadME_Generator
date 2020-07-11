const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateREADME = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {   
        message: "please provide the project name?",
        name: "title",
        type: "input"
    },
    {   
        message: "Please provide a table on content",
        name: "table of content",
        type: "input"
    },
    {   
        message: "What is the user's GitHub name?",
        name: "userName",
        type:"input"
    },
    {  
        message: "Provide a description of the project",
        name: "description",
        type:"input"
    },
    {   
        message: "What is the installation process?",
        name: "installation",
        type: "input"
    },
    {   
        message: "How will this project be used?",
        name: "usage",
        type: "input"
    },
    {   
        message: "What licenses are required with this project?",
        name: "licenses",
        type: "input"
    },
    {   
        message: "Who were the contributors to this project?",
        name: "contribution",
        type: "input"
    },
    {   
        message: "What is the test process for this project?",
        name: "test",
        type: "input"
    },
    {   
        message: "What is the user github email address?",
        name: "GitHub user email",
        type: "input"
    },
    {   
        message: "Please provide a profile picture",
        name: "GitHub profile picture",
        type: "input"
    }

];



function init() {

    inquirer.prompt(questions)
        .then((inquirerResponse) => {
            console.log("Making ReadMe");
            promptUser(inquirerResponse)
          //fs.writeFileSync("ReadMe.md", inquirerResponse,"utf-8");
        })
        .catch((err) => {
            console.log(err);
        })

}

init();
function promptUser(answers){
    const readME = generateREADME(answers);
    fs.writeFileSync("ReadMe.md", readME,"utf-8");

//        return writeFileAsync("READEME.MD", readME);
}
    // .then(function (answers) {
    //     const readME = generateREADME(answers);

    //     return writeFileAsync("READEME.MD", readME);
    // })
