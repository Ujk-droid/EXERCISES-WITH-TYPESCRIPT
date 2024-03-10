import inquirer from 'inquirer';

async function calculateBMI() {
  const questions = [
    {
      type: 'input',
      name: 'weight',
      message: 'Enter your weight in kg:',
      
      },
    
    
    {
      type: 'input',
      name: 'height',
      message: 'Enter your height in meters:',
      
      }
    
  ];

  const answers = await inquirer.prompt(questions);
  const { weight, height } = answers;

  const BMI = weight / (height * height);

  console.log(`Your BMI is: ${BMI.toFixed(2)}`);
}

calculateBMI();
