const api_Key="96c8d5a94015eb9a4c7ae5ba"


let api=`https://v6.exchangerate-api.com/v6/${api_Key}/latest/USD`
const fromdropDown=document.getElementById("from-currency-select")
const todropDown=document.getElementById("to-currency-select")



const currencies = [
   "AFA",
   "ALL",
  "DZD",
"AOA",
   "ARS",
"AMD",
    "AWG",
    "AUD",
   "AZN",
 "BSD",
   "BHD",
   "BDT",
    "BBD",
     "BYR",
     "BEF",
"BZD",
"BMD",
  "BTN",
"BTC",
   "BOB",
     "BAM",
     "BWP",
    "BRL",
  "GBP",
   "BND",
   "BGN",
   "BIF",
    "KHR",
     "CAD",
 "CVE",
   "KYD",
    "XOF",
 "XAF",
   "XPF",
   "CLP",
  "CLF",
  "CNY",
     "COP",
     "KMF",
     "CDF",
 "CRC",
   "HRK",
 "CUC",
"CZK",
 "DKK",
 "DJF",
 "DOP",
 "XCD",
    "EGP",
    "ERN",
 "EEK",
    "ETB",
  "EUR",
     "FKP",
"FJD","GMD",
"GEL",
  "DEM",
 "GHS",
"GIP",
   "GRD",
    "GTQ",
    "GNF",
   "GYD",
    "HTG",
  "HNL",
"HKD",
 "HUF",
    "ISK",
    "INR",
 "IDR",
 "IRR",
"IQD",
 "ILS",
    "ITL",
"JMD",
"JPY",
"JOD",
 "KZT",
 "KES",
     "KWD",
"KGS",
    "LAK",
   "LVL",
    "LBP",
   "LSL",
  "LRD",
"LYD",
 "LTC",
    "LTL",
    "MOP",
   "MKD",
   "MGA",
   "MWK",
     "MYR",
     "MVR",
    "MRO",
    "MUR",
  "MXN",
   "MDL",
   "MNT",
"MAD",
"MZM",
 "MMK",
"NAD",
 "NPR",
 "ANG",
"TWD",
"NZD",
 "NIO",
    "NGN",
   "KPW",
"NOK",
 "OMR",
   "PKR",
 "PAB",
 "PGK",
 "PYG",
  "PEN",
   "PHP",
     "PLN",
  "QAR",
 "RON",
 "RUB",
"RWF",
"SVC",
     "WST",
 "STD",
   "SAR",
 "RSD",
   "SCR",
  "SLL",
  "SGD",
    "SKK",
  "SBD",
  "SOS",
   "ZAR",
  "KRW",
  "SSP",
   "XDR",
    "LKR",
    "SHP",
   "SDG",
 "SRD",
    "SZL",
    "SEK",
  "CHF",
     "SYP",
  "TJS",
    "TZS",
 "THB",
"TOP",
   "TTD",
    "TND",
 "TRY",
   "TMT",
"UGX",
    "UAH",
    "AED",
  "UYU",
  "USD",
  "UZS",
   "VUV",
   "VEF",
  "VND",
   "YER",
   "ZMK",
    "ZWL"
];

currencies.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency
    option.text=currency
    fromdropDown.add(option);
});

currencies.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency
    option.text=currency
    todropDown.add(option);
});


fromdropDown.value="USD"
todropDown.value="INR"

let convertCurrency=()=>{
    const amount= document.querySelector("#amount").value
    const fromCurrency=fromdropDown.value
    const toCurrency=todropDown.value


    if(amount.length !=0){
fetch(api).then((resp)=>resp.json())
.then((data)=>{
    let fromExchangeRate=data.conversion_rates[fromCurrency]

   
   let toExchangeRate=data.conversion_rates[toCurrency]
   const convertedAmount=(amount/fromExchangeRate) *toExchangeRate;
   result.innerHTML=`${amount} ${fromCurrency}=${convertedAmount.toFixed(2)} ${toCurrency}`
})
    }
    else{
alert("Please fill in th amount")
    }
}

document.querySelector("#convert-button")
.addEventListener("click",convertCurrency);

window.addEventListener("load",convertCurrency)