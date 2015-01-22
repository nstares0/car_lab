function Car(make, model, year, state, color, previous_owners, current_owner, passengers){
this.make = make;
this.year = year;
this.color = color;
this.previous_owners= [];
this.current_owner = "Manufacturer";
this.state = "off";
this.passengers = [];
}


Car.prototype.sale = function(newOwner){
this.previous_owners.push(this.current_owner);
this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
this.color = newColor;
};

Car.prototype.start = function () {
this.state = "on";
};

Car.prototype.off = function () {
this.state = "off";
};

Car.prototype.driveTo = function (destination) {
	if (this.state === "on") {
	console.log ("driving to" + destination );
	}
};

Car.prototype.park = function () {
	if (this.state === "off") {
		console.log ("parked!!");
	}
};

Car.prototype.pick_up  = function (name) {
	console.log("hello");
	if (this.state === "on") {
		console.log ("driving to 'pick up'" + name );
		this.passengers.push(name);
	}

};

Car.prototype.dropOff = function (name) {
	if (this.passengers.indexOf(name) !== -1 && this.state === "on") {
		this.passengers.pop();

	}

};


module.exports=Car;