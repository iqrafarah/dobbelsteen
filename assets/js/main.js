const rolls = [];

const diceRoll = () => {
  const result = Math.floor(Math.random() * 6) + 1;
  const image = `./assets/Images/dobbelsteen-${result}.png`;
  document.getElementById("dice").src = image;

  console.log(result);
  rolls.push(result);
  avgRoll();
}

document.getElementById("button").onclick = () => {
  diceRoll();
}

const avgRoll = () => {
  const sum = rolls.reduce((a, b) => a + b, 0);
  const average = (sum / rolls.length).toFixed(1) 
  document.getElementById("average").innerText = average;

    const counts = [0, 0, 0, 0, 0, 0]; 
    for (let i = 0; i < rolls.length; i++) {
      counts[rolls[i]-1]++; 
    }
    let listItems = "";
    for (let i = 0; i < counts.length; i++) {
      let count = counts[i];
      let value = i + 1;
      listItems +=  `${value}:   ${count}\n`;
    }
    
    document.getElementById("count").innerText = listItems;

}
