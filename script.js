document.getElementById("money").innerHTML = "$" + 0;
/*var money = 0;
var cost = 2000;
var cost2 = 3500;
var blocks = 0;
var mergeCooldown = 2000;
var merges = 0;
var cheaperUpgs = 0;
var cheapness = 0;*/

var game = {
  money: 0,
  cost: 3000,
  cost2: 5000,
  cost3: 2000,
  blocks: 0,
  mergeCooldown: 2000,
  lowerCooldown: 0,
  merges: 0,
  cheaperUpgs: 0,
  cheapness: 0,
  faster: 0
}

function formatNumber(e) {
  if(e < 999999) {
    return e.toLocaleString();
  }
  if(e > 999999 && e < 1e9) {
    return (e/1e6).toFixed(2) + " M";
  }
  if(e > 1e9 && e < 1e12) {
    return (e/1e9).toFixed(2) + " B";
  }
  if(e > 1e12 && e < 1e15) {
    return (e/1e12).toFixed(2) + " T";
  }
  if(e > 1e15) {
    return (e/1e15).toFixed(2) + " Q";
  }
}

function betterBlock() {
	if(game.money >= game.cost) {
    game.blocks++;
    game.money -= game.cost;
    game.cost *= 4.5;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
    if(game.blocks == 1) {
      document.getElementsByClassName("block1")[0].className = "block";
    }
    if(game.blocks == 2) {
      document.getElementsByClassName("block2")[0].className = "block";
    }
    if(game.blocks == 3) {
      document.getElementsByClassName("block3")[0].className = "block";
    }
    if(game.blocks == 4) {
      document.getElementsByClassName("block4")[0].className = "block";
    }
    if(game.blocks == 5) {
      document.getElementsByClassName("block5")[0].className = "block";
    }
    if(game.blocks == 6) {
      document.getElementsByClassName("block6")[0].className = "block";
    }
    if(game.blocks == 7) {
      document.getElementsByClassName("block7")[0].className = "block";
    }
    if(game.blocks == 8) {
      document.getElementsByClassName("block8")[0].className = "block";
    }
    if(game.blocks == 9) {
      document.getElementsByClassName("block9")[0].className = "block";
    }
    if(game.blocks == 10) {
      document.getElementsByClassName("block10")[0].className = "block";
    }
    if(game.blocks == 11) {
      document.getElementsByClassName("block11")[0].className = "block";
    }
    if(game.blocks == 12) {
      document.getElementsByClassName("block12")[0].className = "block";
    }
    if(game.blocks == 13) {
      document.getElementsByClassName("block13")[0].className = "block";
    }
    if(game.blocks == 14) {
      document.getElementsByClassName("block14")[0].className = "block";
    }
    if(game.blocks == 15) {
      document.getElementsByClassName("block15")[0].className = "block";
    }
    if(game.blocks == 16) {
      document.getElementsByClassName("block16")[0].className = "block";
    }
    if(game.blocks == 17) {
      document.getElementsByClassName("block17")[0].className = "block";
    }
    if(game.blocks == 18) {
      document.getElementsByClassName("block18")[0].className = "block";
    }
    if(game.blocks == 19) {
      document.getElementsByClassName("block19")[0].className = "block";
    }
  }
  document.getElementById("upgs").innerHTML = "1+ tier - " + (game.blocks+1) + "/19 ($" + formatNumber(game.cost) + ")";
}

function cheaperUpgrades() {
  if(game.money >= game.cost2) {
    game.cheapness++;
    game.money -= game.cost2;
    game.cost2 *= 8;
    game.cost *= 0.9;
    document.getElementById("upgs").innerHTML = "1+ tier - " + (game.blocks+1) + "/19 ($" + formatNumber(game.cost) + ")";
    document.getElementById("cheaper").innerHTML = "Cheaper Blocks Upg. - " + game.cheapness + "/10 ($" + formatNumber(game.cost2) + ")";
  }
}

function fasterBlock() {
  if(game.money >= game.cost3) {
    game.faster++;
    game.money -= game.cost3;
    game.cost3 *= 3;
    game.lowerCooldown *= 0.95;
    document.getElementById("fast").innerHTML = "Faster Merges -" + (game.faster) + "/15 ($" + formatNumber(game.cost3) + ")";
  }
}

setInterval(() => {
  document.getElementById("upgs").innerHTML = "1+ tier - " + (game.blocks+1) + "/19 ($" + formatNumber(game.cost) + ")";
  document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  document.getElementById("upgs").innerHTML = "1+ tier - " + (game.blocks+1) + "/19 ($" + formatNumber(game.cost) + ")";
  document.getElementById("cheaper").innerHTML = "Cheaper Blocks Upg. - " + game.cheapness + "/10 ($" + formatNumber(game.cost2) + ")";
})

window.addEventListener("keydown", function(event) {
  /*if (event.keyCode == 116) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else if (event.keyCode == 122) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else if (event.keyCode == 123) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }*/
  if(event.keyCode = 188) {
    console.log(btoa(JSON.stringify(game)));
  }
});

/*window.oncontextmenu = function(e) {
  e.preventDefault();
}*/

setInterval(() => {
  if(game.mergeCooldown > 0) {
	  game.mergeCooldown -= 3.25;
    document.getElementById("merging").innerHTML = "Merge - " + (game.mergeCooldown/1000).toFixed(2) + "s";
  } else {
    game.mergeCooldown = 0;
  }
}, 1);

setInterval(() => {
  document.getElementById("stats").innerHTML = "Current Stats:<br>Merged " + game.merges + " times.";
})

function merge() {
  if(!game.mergeCooldown) {
  game.mergeCooldown = 2000;
  game.merges++;
	if(document.getElementsByClassName("block")[0]) {
    if(game.blocks == 0) {
  		document.getElementsByClassName("block")[0].className = "block1";
  	  game.money++;
    }
    if(game.blocks == 1) {
  		document.getElementsByClassName("block")[0].className = "block2";
  	  game.money += 3;
    }
    if(game.blocks == 2) {
  		document.getElementsByClassName("block")[0].className = "block3";
  	  game.money += 9;
    }
    if(game.blocks == 3) {
  		document.getElementsByClassName("block")[0].className = "block4";
  	  game.money += 27;
    }
    if(game.blocks == 4) {
  		document.getElementsByClassName("block")[0].className = "block5";
  	  game.money += 81;
    }
    if(game.blocks == 5) {
  		document.getElementsByClassName("block")[0].className = "block6";
  	  game.money += 81;
    }
    if(game.blocks == 6) {
  		document.getElementsByClassName("block")[0].className = "block7";
  	  game.money += 81;
    }
    if(game.blocks == 7) {
  		document.getElementsByClassName("block")[0].className = "block8";
  	  game.money += 243;
    }
    if(game.blocks == 8) {
  		document.getElementsByClassName("block")[0].className = "block9";
  	  game.money += 243;
    }
    if(game.blocks == 9) {
  		document.getElementsByClassName("block")[0].className = "block10";
  	  game.money += 729;
    }
    if(game.blocks == 10) {
  		document.getElementsByClassName("block")[0].className = "block11";
  	  game.money += 2187;
    }
    if(game.blocks == 11) {
  		document.getElementsByClassName("block")[0].className = "block12";
  	  game.money += 6561;
    }
    if(game.blocks == 12) {
  		document.getElementsByClassName("block")[0].className = "block13";
  	  game.money += 19683;
    }
    if(game.blocks == 13) {
  		document.getElementsByClassName("block")[0].className = "block14";
  	  game.money += 59049;
    }
    if(game.blocks == 14) {
  		document.getElementsByClassName("block")[0].className = "block15";
  	  game.money += 177147;
    }
    if(game.blocks == 15) {
  		document.getElementsByClassName("block")[0].className = "block16";
  	  game.money += 531441;
    }
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block1")[1]) {
  	document.getElementsByClassName("block1")[0].className = "block2";
    document.getElementsByClassName("block1")[0].className = "block";
    game.money += 3;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block2")[1]) {
  	document.getElementsByClassName("block2")[0].className = "block3";
    document.getElementsByClassName("block2")[0].className = "block";
    game.money += 9;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block3")[1]) {
  	document.getElementsByClassName("block3")[0].className = "block4";
    document.getElementsByClassName("block3")[0].className = "block";
    game.money += 27;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block4")[1]) {
  	document.getElementsByClassName("block4")[0].className = "block5";
    document.getElementsByClassName("block4")[0].className = "block";
    game.money += 81;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block5")[1]) {
  	document.getElementsByClassName("block5")[0].className = "block6";
    document.getElementsByClassName("block5")[0].className = "block";
    game.money += 243;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block6")[1]) {
  	document.getElementsByClassName("block6")[0].className = "block7";
    document.getElementsByClassName("block6")[0].className = "block";
    game.money += 729;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block7")[1]) {
  	document.getElementsByClassName("block7")[0].className = "block8";
    document.getElementsByClassName("block7")[0].className = "block";
    game.money += 2187;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block8")[1]) {
  	document.getElementsByClassName("block8")[0].className = "block9";
    document.getElementsByClassName("block8")[0].className = "block";
    game.money += 6561;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block9")[1]) {
  	document.getElementsByClassName("block9")[0].className = "block10";
    document.getElementsByClassName("block9")[0].className = "block";
    game.money += 19683;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block10")[1]) {
  	document.getElementsByClassName("block10")[0].className = "block11";
    document.getElementsByClassName("block10")[0].className = "block";
    game.money += 59049;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block11")[1]) {
  	document.getElementsByClassName("block11")[0].className = "block12";
    document.getElementsByClassName("block11")[0].className = "block";
    game.money += 177147;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block12")[1]) {
  	document.getElementsByClassName("block12")[0].className = "block13";
    document.getElementsByClassName("block12")[0].className = "block";
    game.money += 531441;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block13")[1]) {
  	document.getElementsByClassName("block13")[0].className = "block14";
    document.getElementsByClassName("block13")[0].className = "block";
    game.money += 1594323;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block14")[1]) {
  	document.getElementsByClassName("block14")[0].className = "block15";
    document.getElementsByClassName("block14")[0].className = "block";
    game.money += 4782969;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block15")[1]) {
  	document.getElementsByClassName("block15")[0].className = "block16";
    document.getElementsByClassName("block15")[0].className = "block";
    game.money += 14348907;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block16")[1]) {
  	document.getElementsByClassName("block16")[0].className = "block17";
    document.getElementsByClassName("block16")[0].className = "block";
    game.money += 43046721;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block17")[1]) {
  	document.getElementsByClassName("block17")[0].className = "block18";
    document.getElementsByClassName("block17")[0].className = "block";
    game.money += 129140163;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block18")[1]) {
  	document.getElementsByClassName("block18")[0].className = "block19";
    document.getElementsByClassName("block18")[0].className = "block";
    game.money += 387420489;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block19")[1]) {
  	document.getElementsByClassName("block19")[0].className = "block20";
    document.getElementsByClassName("block19")[0].className = "block";
    game.money += 1162261467;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block20")[1]) {
  	document.getElementsByClassName("block20")[0].className = "block21";
    document.getElementsByClassName("block20")[0].className = "block";
    game.money += 3486784401;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block21")[1]) {
  	document.getElementsByClassName("block21")[0].className = "block22";
    document.getElementsByClassName("block21")[0].className = "block";
    game.money += 10460353203;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block22")[1]) {
  	document.getElementsByClassName("block22")[0].className = "block23";
    document.getElementsByClassName("block22")[0].className = "block";
    game.money += 31381059609;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block23")[1]) {
  	document.getElementsByClassName("block23")[0].className = "block24";
    document.getElementsByClassName("block23")[0].className = "block";
    game.money += 94143178827;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
	if(document.getElementsByClassName("block24")[1]) {
  	document.getElementsByClassName("block24")[0].className = "block25";
    document.getElementsByClassName("block24")[0].className = "block";
    game.money += 282429536481;
    document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
  document.getElementById("money").innerHTML = "$" + (game.money < 1e9 ? Math.floor(game.money).toLocaleString() : formatNumber(game.money));
  }
}

function save() {
  localStorage.setItem("merge", JSON.stringify(game));
}

setInterval(save, 1000);

function load() {
  if (localStorage.getItem("merge")) {
    game = JSON.parse(localStorage.getItem("merge"));
  }
}