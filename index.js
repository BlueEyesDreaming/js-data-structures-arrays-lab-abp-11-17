const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  return drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  return drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(
  
) {
  return [...drivers, "Broom"]
}

function prependDriver(name) {
  return ["Arnold", ...drivers]
}
