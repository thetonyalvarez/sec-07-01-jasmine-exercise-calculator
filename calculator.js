window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// creates an object wrapped in this function
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {

  // set default values
  const values = {amount: 10000, years: 4, rate: 7.25}

  // get inputs from DOM and assign to variables
  const amountUI = document.getElementById("loan-amount")
  amountUI.value = values.amount
  const yearsUI = document.getElementById("loan-years")
  yearsUI.value = values.years
  const rateUI = document.getElementById("loan-rate")
  rateUI.value = values.rate


  // run function to calculate payment
  update();

  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  // Set the function return to a var first
  const currentUIValues = getCurrentUIValues();

  // calculate Monthly payment using the Current Values object, then update the monthly payment
  updateMonthly(calculateMonthlyPayment(currentUIValues))  
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let amount = values.amount
  let years = values.years
  let rate = values.rate / 100
  
  let periodic_rate = rate / 12
  let total_payments = Math.floor(years * 12)
  
  payment = (amount * periodic_rate) / (1 - (1 + periodic_rate) ** (-total_payments))

  monthly = payment.toFixed(2)

  return monthly
}




// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  paymentUI = document.getElementById('monthly-payment')
  paymentUI.innerText = '$' + monthly
}


