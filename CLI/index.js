import inquirer from "inquirer";
import { question1 } from "./utils/questions.js";

inquirer.prompt(question1).then((answers) => {
  console.log(`${answers["name"]}`);
});
