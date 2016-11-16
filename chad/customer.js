
function addAndSaveCustomer()	{
	//get the customer stuff to store
	var aName = document.getElementById("name_input").value
	var anAge = document.getElementById("age_input").value * 1
	var anInseam = document.getElementById("inseam_input").value * 1

	var aClothingCustomer = {
		"name": aName,
		"age": anAge,
		"inseam": anInseam
	}

	// get the stored customers, if there aren't any create an empty
	// array to put customers into.
	// if there are, convert them from string into an array
	var allCustomers = null
	var storedCustomersString = localStorage["all_customers"]
	if (storedCustomersString == null)
	{
		allCustomers = []
	}
	else 
	{
		allCustomers = JSON.parse(storedCustomersString)
	}

	// add new customers to the array
	allCustomers.push(aClothingCustomer)
	var allCustomersString = JSON.stringify(allCustomers)

	// store all the customers
	localStorage["all_customers"] = allCustomersString

	// update what the user can see with the new customers.
	showAllCustomers()

	// clear out the input boxes.
	document.getElementById("name_input").value = null
	document.getElementById("age_input").value = null
	document.getElementById("inseam_input").value = null
}

function showAllCustomers(){
	var storedCustomersString = localStorage["all_customers"]
	if (storedCustomersString != null) 
	{
		var allCustomers = JSON.parse(storedCustomersString)
		var customerDisplayer = document.getElementById("all_customers_display")
		customerDisplayer.innerHTML = null
		
		for (var i = 0; i < allCustomers.length; i++) 
		{
			var aClothingCustomer = allCustomers[i]
			customerDisplayer.innerHTML 
			+= "<hr><p>Customer: " + aClothingCustomer["name"] + "</p>" 
			+ "<p>Age: " + aClothingCustomer["age"] + "</p>" 
			+ "<p>Inseam: " + aClothingCustomer["inseam"] + "</p>"
		}
	}

	
}	
