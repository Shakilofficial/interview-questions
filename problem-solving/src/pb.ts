function showFinalRecipientsList(names: string[]): void {
  // * store how many messages each person got
  const counts = new Map<string, number>();
  // * store the names in the final display order
  const order: string[] = [];

  // *Go through each name in the list
  for (const name of names) {
    // ! If the person already has a count, increase it by 1. If not, start with 1.
    counts.set(name, (counts.get(name) || 0) + 1);

    // ! Check if the name is already in the order list
    const alreadyInList = order.indexOf(name);

    // ! If the name is already in the list, remove it
    if (alreadyInList !== -1) {
      order.splice(alreadyInList, 1);
    }
    // * Add the name to the top of the list (most recently messaged)
    order.unshift(name);
  }

  // ** Now print each name and how many messages they got, in the final order
  for (const name of order) {
    console.log(`${name} ${counts.get(name)}`);
  }
}

// * Sample list of names that received messages
const allNames = [
  "Fahim",
  "Tamal",
  "Emruz",
  "Emruz",
  "Kamol",
  "Fahim",
  "Emruz",
  "Emruz",
  "Fahim",
  "Tamal",
];

// Call the function with the sample list

showFinalRecipientsList(allNames);
