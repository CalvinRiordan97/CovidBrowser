const data = null;
const xhr = new XMLHttpRequest();

xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        var obj = JSON.parse(this.responseText);
        console.log(obj);
        document.getElementById('country').innerHTML = obj[0]['country'];
        document.getElementById('cases').innerHTML = obj[0]['confirmed'];
        document.getElementById('critical').innerHTML = obj[0]['critical'];
        document.getElementById('deaths').innerHTML = obj[0]['deaths'];
        document.getElementById('recovered').innerHTML = obj[0]['recovered'];
    }
});

function getData(){
    var country = document.getElementById('countryInput').value;
    xhr.open("GET", "https://covid-19-data.p.rapidapi.com/country?name="+country);
    xhr.setRequestHeader("x-rapidapi-key", "f2fac7b322msh93dc24b2da7de1bp17a522jsnd12ce06b570a");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
    xhr.send(data);
}