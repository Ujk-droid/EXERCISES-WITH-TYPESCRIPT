import inquirer from 'inquirer';

async function calculatePowers() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'number',
            message: 'Enter a number:',
            
        }
    ]);

    const number = parseFloat(response.number);

    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);
    const powerOf4 = Math.pow(number, 4);

    console.log(`Square of ${number}: ${square}`);
    console.log(`Cube of ${number}: ${cube}`);
    console.log(`Power of 4 of ${number}: ${powerOf4}`);
}

calculatePowers();
