Template.otherDays.onCreated(function(){
  this.subscribe('Orders');
  this.name = new ReactiveVar();
});
Template.otherDays.onRendered(function(){

});

Template.otherDays.helpers({
  Orders: function(){

  	   Orders.find({name : 'Day'}).fetch().forEach(function(day){
    	    var day2 = day.day;
          console.log(day2);

    });

  },

 
});


Template.otherDays.events({
	'click #days-box': function(event, template){
		bootbox.prompt({
        title: "Insert Day",
        inputType: 'date',

        callback: function (result) {
          if (result === null) { 
              bootbox.alert({
              message: "You need insert the correct Day",
              className: 'bb-alternate-modal'
              });                                            
          } else {
          	
          //Session.set("day", result);
          Meteor.call('ChooseDay', result);


        }
      }
    });
	}
})