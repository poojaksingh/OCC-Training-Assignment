function jsonData() {
    this.firstName = ko.observable("");
    this.lastName = ko.observable("");
    this.onsubmit = function () {
        const person = { firstName: this.firstName(), lastName: this.lastName() };
        console.log(person);
        const jsoString = JSON.stringify(person);
        const root = document.getElementById("root");
        root.innerHTML = "The JSON Data is ";
        const h3 = document.createElement("h3");
        h3.id = "h3"
        h3.innerHTML = jsoString;
        root.appendChild(h3)
        this.firstName("");
        this.lastName("");

    }
    this.onJSONObject = function () {
        const h3 = document.getElementById("h3");
        const jsonString = h3.innerText;
        console.log(jsonString);
        const PERSON = JSON.parse(jsonString);
        this.firstName(PERSON.firstName);
        this.lastName(PERSON.lastName);
        console.log(PERSON);
        h3.innerText = "";
    }
}

ko.applyBindings(new jsonData());
