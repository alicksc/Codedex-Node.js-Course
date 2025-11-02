const path = require('path');
const os = require('os');
const fs = require('fs');

// Define an array of affirmations directly in the code
const affirmations = [
    'This will be your year!',
    'You will get that internship!'
];

// Define the path to the desktop
const desktopPath = path.join(os.homedir(), 'Desktop');

// Function to get a random affirmation and save it to a file on the desktop
function saveRandomAffirmationToDesktop() {
    // Pick a random affirmation from the array
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]

    // Define the new file path on the desktop (will overwrite the file existing)
    const newFilePath = path.join(desktopPath, 'daily-affirmation.txt');

    // Write the random affirmation to a new file on the desktop (this will overwrite it)
    fs.writeFile(newFilePath, randomAffirmation, (err) => {
        if (err) {
            console.error('Error writing the affirmation to the file:', err);
        } else {
            console.log('Random affirmation saved to:', newFilePath);
        }
    });
}

// Call the function to get and save a random affirmation
saveRandomAffirmationToDesktop();