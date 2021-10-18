var hobbyList = function () {
  this.itemToAdd = ko.observable("");
  this.allItems = ko.observableArray([]); // Initial items
  this.selectedItems = ko.observableArray(["Ham"]); // Initial selection

  this.addItem = function () {
    if (this.itemToAdd() != "" && this.allItems.indexOf(this.itemToAdd()) < 0)
      // Prevent blanks and duplicates
      this.allItems.push(this.itemToAdd());
    this.itemToAdd(""); // Clear the text box
  };
};

ko.applyBindings(new hobbyList());
