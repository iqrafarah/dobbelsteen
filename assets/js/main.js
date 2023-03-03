const dice = {
  rolls: [],
  roll() {
    const result = Math.floor(Math.random() * 6) + 1;
    const image = `./assets/Images/dobbelsteen-${result}.png`;
    document.getElementById("dice").src = image;
  
    console.log(result);
    this.rolls.push(result);
    this.avgRoll();
  },

avgRoll() {
  const sum = this.rolls.reduce((a, b) => a + b, 0);
  const average = (sum / this.rolls.length).toFixed(1) 
  document.getElementById("average").innerText = average;

    const counts = [0, 0, 0, 0, 0, 0]; 
    for (let i = 0; i < this.rolls.length; i++) {
      counts[this.rolls[i]-1]++; 
    }
    let listItems = "";
    for (let i = 0; i < counts.length; i++) {
      let count = counts[i];
      let value = i + 1;
      listItems +=  `${value}:   ${count}\n`;
    }
    
    document.getElementById("count").innerText = listItems;
  },
}

document.getElementById("button").onclick = () => {
  dice.roll();
}
