(function() {

  window.onload = function() {

    let reset = document.querySelector("#reset");
    let num_reset = document.querySelector("#num-resets");
    let shoot1 = document.querySelector("#teamone-shoot");
    let numshots1 = document.querySelector("#teamone-numshots");
    let numhits1 = document.querySelector("#teamone-numhits");
    let shoot2 = document.querySelector("#teamtwo-shoot");
    let numshots2 = document.querySelector("#teamtwo-numshots");
    let numhits2 = document.querySelector("#teamtwo-numhits");
    let shoot = document.querySelector("#shoot")
    let miss = document.querySelector("#miss")

    shoot1.addEventListener("click", function() {
      console.log("shoot button clicked");

      let shot = parseInt(numshots1.innerHTML) + 1;

      numshots1.innerHTML = shot;

      let attempt = Math.random();

      if (attempt <= 0.5) {
        numhits1.innerHTML = parseInt(numhits1.innerHTML) + 1
        shoot.play();
      } else {
        miss.play();
      }
    })

    shoot2.addEventListener("click", function() {
      console.log("shoot button clicked");

      let shot = parseInt(numshots2.innerHTML) + 1;

      numshots2.innerHTML = shot;

      let attempt = Math.random();

      if (attempt <= 0.5) {
        numhits2.innerHTML = parseInt(numhits2.innerHTML) + 1
        shoot.play();
      } else {
        miss.play();
      }
    })

    reset.addEventListener("click", function() {
      console.log("reset button clicked");

      let num_resets = parseInt(num_reset.innerHTML) + 1;

      num_reset.innerHTML = num_resets;

      numshots1.innerHTML = parseInt(numshots1.innerHTML) - parseInt(numshots1.innerHTML);
      numhits1.innerHTML = parseInt(numhits1.innerHTML) - parseInt(numhits1.innerHTML);
      numshots2.innerHTML = parseInt(numshots2.innerHTML) - parseInt(numshots2.innerHTML);
      numhits2.innerHTML = parseInt(numhits2.innerHTML) - parseInt(numhits2.innerHTML);

    })

  }

})();
