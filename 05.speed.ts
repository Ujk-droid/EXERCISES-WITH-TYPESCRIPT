import inquirer from 'inquirer';

async function calculateSpeed() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'distance',
            message: 'Enter the distance (in kilometers):',
        },
        {
            type: 'input',
            name: 'time',
            message: 'Enter the time taken (in hours):',
        }
    ]);

    const distance = parseFloat(response.distance);
    const time = parseFloat(response.time);

    const speed = distance / time;

    console.log(`The speed of the car is: ${speed.toFixed(2)} km/h`);
}

calculateSpeed();
