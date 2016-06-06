({
	helperMethod : function() {

	},
	createCalandarObject : function(date) {
	  let d = moment(date, 'YYYY-MM-DD');
	  if (!d.isValid()) {
	    d = moment();
	  }
	  const year = d.year();
	  const month = d.month();
	  const first = moment(d).startOf('month').startOf('week');
	  const last = moment(d).endOf('month').endOf('week');
	  const weeks = [];
	  let days = [];
	  for (let dd = first; dd.isBefore(last); dd = dd.add(1, 'd')) {
	    days.push({ year: dd.year(), month: dd.month(), date: dd.date(), value: dd.format('YYYY-MM-DD') });
	    if (days.length === 7) {
	      weeks.push(days);
	      days = [];
	    }
	  }
	  return { year, month, weeks };
	}
})