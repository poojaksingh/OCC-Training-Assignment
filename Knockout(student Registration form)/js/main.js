
function Person() {
    this.firstName = ko.observable("");
    this.lastName = ko.observable("");
    this.middleName = ko.observable("");
    this.gender = ko.observable("");
    this.yearssc = ko.observable("");
    this.dob = ko.observable("");
    this.test1 = ko.observable("");
    this.test2 = ko.observable("");
    this.test3 = ko.observable("");
    this.test4 = ko.observable("");
   this.grade=ko.observable("");
   
    this.totalScoreResult = ko.computed(function () {
        return parseInt(this.test1())+ parseInt(this.test2())+parseInt(this.test3())+parseInt(this.test4()) ||"Total Score"   }, this);

        this.totalGrade = ko.computed(function () {
            this.myScore=this.totalScoreResult();
            console.log("score",this.myScore)
            if (this.myScore>=30 && this.myScore<50) {
                this.grade('C');
                  } 
                  else if (this.myScore<30)
                  {
                    this.grade('F');
                 } 
                  else if (this.myScore>=50 && this.myScore<70)
                   {
                    this.grade('B');
                  } 
                  else if(this.myScore>=70 && this.myScore<80)
                   {
                    this.grade('A'); 
                  } 
                  else if(this.myScore>=80 && this.myScore<100)
                  {
                    this.grade('A+');
                  }  
                  else{
                    this.grade('Grade');
            
                  }
               }, this);
       
     

}
const person = new Person();
ko.applyBindings(person);