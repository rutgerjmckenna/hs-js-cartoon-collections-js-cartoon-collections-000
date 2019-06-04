function dwarfRollCall(dwarves) {
  var newStr = "";
  dwarves.forEach(function(name, idx) {
  	newStr += (idx+1 + ". " + name + " ");
  });
  return newStr;
}
function dwarfRollCall(dwarves) {
	var newStr = "";
	for(var i = 0; i < dwarves.length; i++) {
		if(i === dwarves.length-1) {
			newStr += (i+1 + ". " + dwarves[i]);
		}else {
			newStr += (i+1 + ". " + dwarves[i] + " ");
		}
	}
	return newStr;
}

function dwarfRollCall(dwarves) {
	var newStr = [];
	dwarves.forEach(function(name, i) {
		newStr.push(i+1 +". " + name);
	});
	return newStr.join(" ");
}

dwarfRollCall(["Doc", "Dopey", "Bashful", "Grumpy"]);

function summonCaptainPlanet(array) {
	return array.map(function(ele) {
		return ele.toUpperCase() + "!";
	});
}

function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

function findTheCheese(foods) {
	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}


findTheCheese(["banana", "cheddar", "sock", "gouda"]);
