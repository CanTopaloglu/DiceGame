function rollDice(){
    
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i< numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`)
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    Swal.fire({
        title: "Dice Rolled!",
        width: 500,
        padding: "1em",
        color: "#716add",
        position: "top",
        background: "#fff url()",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
          left center
          no-repeat
          
        `
      });
    //toastr.success('Dice Rolled, See Result')

    //https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif

    //https://media.tenor.com/IO1qtTNRDWwAAAAC/hasbulla.gif
}


