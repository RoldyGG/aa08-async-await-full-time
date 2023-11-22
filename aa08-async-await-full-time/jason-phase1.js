function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

// refactor this function to handle Promises using async/await instead of
// .then and .catch
async function workout() {
  //*====> Workout: Orchestrates the workout routine using async/await <====
  try {
    //^ Try to execute the workout routine
    await stretch(); //^ Wait for the stretch function to resolve

    await runOnTreadmill(); //^ Wait for the runOnTreadmill function to resolve

    await liftWeights(); //^ Wait for the liftWeights function to resolve

    console.log("done working out"); //^ Log the completion of the entire workout
  } catch (err) {
    //^ Catch and log any errors that occur
    console.error(err);
  }
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
