$.ajax({
	type: 'get',
	url: 'https://data.covid19india.org/v4/min/data.min.json',

	success: function(response){
		// console.log(response)

		fetch('https://data.covid19india.org/v4/min/data.min.json')
		  .then(response => response.json())
		  .then(data => {
		    // Iterate over each state or territory 
		    for (const stateCode in data) {
		      if (data.hasOwnProperty(stateCode)) {
		        
		        var tablerow = `<tr> <td>${stateCode}</td> <td>${data[stateCode].total.tested}</td> <td>${data[stateCode].total.confirmed}</td> <td>${data[stateCode].total.deceased}</td> <td>${data[stateCode].total.recovered}</td> <td>${data[stateCode].total.vaccinated1}</td> <td>${data[stateCode].total.vaccinated2}</td></>`
			    $('#tbody').append(tablerow)
		      }
		    }
		    //Java Script library for searching  
		    $('#covidtable').DataTable();
		  })
		  .catch(error => {
		    console.error('Error:', error);
		  }); 
		
	},

	error: function(error){
		console.log(error)
	}
})

// <td>${i+1}</td>
