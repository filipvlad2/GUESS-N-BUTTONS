var winner;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  winner = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function verifyWinningButton(clicked_id) {
  var winnnerText = winner.toString();
  var clickedIdText = clicked_id.toString();
  if (clicked_id.localeCompare(winnnerText) == 0) {
    alert("Winner!");
  } else {
    alert("Looser!");
  }
}

function generateButtons() {
    let N = $('#N-buttons').val();
    //Generate a random number from 1 to N included
    getRandomInt(1, (parseInt(N) + 1));
    //Generate N buttons
    for (let i = 1; i <= N; i++) {
        $('#list').append(`
          <div class="card text-center">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">BUTTON ` + i + `</h5>
                  <a href="#" class="btn btn-primary" onclick= "verifyWinningButton(id)" id ="` + i + `"></a>
                </div>
             </div>
            </div>
          `);
      }
}