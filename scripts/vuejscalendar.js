Vue.component('calendar', {
    template: "#calendar-template",
    data: function() {
        return {
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],  
          dates: [],
          weeks: [],
          currentMonth: '',
          currentYear: 2019,
        }
    },
    created: function() {
        this.countWeeks();
    },
    methods: {
        countWeeks: function() {
            var self = this;
            var today = new Date();
            var month = today.getMonth();
            var year = today.getFullYear();
            var totalDates = new Date(year, month + 1, 0).getDate();
            var firstDay = new Date(year, month).getDay();
            for (var i = 0; i < firstDay; i++) {
                var emptyDay = "";
                self.dates.unshift(emptyDay);
            };
            for (var i = 1; i <= totalDates; i++) {
                self.dates.push(i);
                var r = i % 7;
                if ( i > 0 && r == 0) {
                    var linebreak = document.createElement("br");
                    self.weeks.push(self.dates.splice(0,7));
                } else if (i == totalDates)
                {
                    self.weeks.push(self.dates);
                    break;
                };
            };
 
            this.currentMonth = today.toLocaleString('en-US', {month: 'long'});
        }
    }
});

var cal = new Vue({
     el: "#app",
});
