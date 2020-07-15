var jcontent = {
  "theSymbol": "",
  "thePrice": "",
  "theVolume": ""
}

fetch('https://alpha-vantage.p.rapidapi.com/query?symbol=RDS-A&function=GLOBAL_QUOTE', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839',
  },
})

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    jcontent.theSymbol = data["Global Quote"]["01. symbol"];
    jcontent.thePrice = data["Global Quote"]["05. price"];
    jcontent.theVolume = data["Global Quote"]["06. volume"];
    console.log(jcontent);

  })


  .then(function (data) {
    var output = document.getElementById("output");
    output.innerHTML = `<h5>Symbol:</h5>` + jcontent.theSymbol + `<h5>Price:</h5>` +  jcontent.thePrice + `<h5>Volume:</h5>` +  jcontent.theVolume;

    console.log(data);
  });

var jcontent2 = {
  "theSymbol": "",
  "thePrice": "",
  "theVolume": ""
}

fetch('https://alpha-vantage.p.rapidapi.com/query?symbol=TSLA&function=GLOBAL_QUOTE', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839',
  },
})

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    jcontent2.theSymbol = data["Global Quote"]["01. symbol"];
    jcontent2.thePrice = data["Global Quote"]["05. price"];
    jcontent2.theVolume = data["Global Quote"]["06. volume"];
    console.log(jcontent2);

  })


  .then(function (data) {
    var output2 = document.getElementById("output2");
    output2.innerHTML = `<h5>Symbol:</h5>` + jcontent2.theSymbol + `<h5>Price:</h5>` + jcontent2.thePrice + `<h5>Volume:</h5>` + jcontent2.theVolume;

    console.log(data);
  });


var jcontent3 = {
  "theSymbol": "",
  "thePrice": "",
  "theVolume": ""
}

fetch('https://alpha-vantage.p.rapidapi.com/query?symbol=LEVI&function=GLOBAL_QUOTE', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': '60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839',
  },
})

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data);
    jcontent3.theSymbol = data["Global Quote"]["01. symbol"];
    jcontent3.thePrice = data["Global Quote"]["05. price"];
    jcontent3.theVolume = data["Global Quote"]["06. volume"];
    console.log(jcontent3);

  })


  .then(function (data) {
    var output3 = document.getElementById("output3");
    output3.innerHTML = `<h5>Symbol:</h5>` + jcontent3.theSymbol + `<h5>Price:</h5>` + jcontent3.thePrice + `<h5>Volume:</h5>` + jcontent3.theVolume;

    console.log(data);
  });

  var cettime = {
    "Time": ""
  }

  

  fetch("https://world-clock.p.rapidapi.com/json/est/now", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "world-clock.p.rapidapi.com",
		"x-rapidapi-key": "60a081f540mshb2802ee5851f7c4p175399jsn340de9ba9839"
	}
})

.then(function (resp) {
  return resp.json();
})

.then(function (data) {
  console.log(data);
  cettime.Time= data["currentDateTime"].substring(11,16);
  console.log(cettime);
  console.log(cettime.Time.substring(11,16));
})

.then(function (data) {
  var content = document.getElementById("content");
  content.innerHTML = `<h5>New York</h5>` + cettime.Time;

  console.log(data);
});