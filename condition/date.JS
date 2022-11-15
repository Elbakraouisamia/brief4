/*let btnCheck = document.querySelector('button');
let inputMonth = document.querySelector('#month');
let inputDate = document.querySelector('#date');
let inputYear = document.querySelector('#year');
let result = document.querySelector('h1');
btnCheck.addEventListener('click', (event) => {
    let month = inputMonth.value;
    let year = inputYear.value;
    let date = inputDate.value;
    // true in the end, so that our date string and date format should match exactly - in moment js it is called Strict Parsing
    result.innerText = moment(`${month}/${date}/${year}`, 'MM/DD/YYYY', true).isValid();
});*/
   
function btn1() {
    let day = parseInt(document.getElementById('date').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (day>=1 && day <= 31 && month <= 12 && month !== 2 && month>=1 && month !== 4 && month !== 6 && month !== 9 && month !== 11 && year <= 2022 && year >= 1999){
        document.getElementById('resultat').innerHTML = day + "/" + month + "/" + year + " est correcte"
       }
        else if(day <= 30 && month == 4 && month == 6 && month == 9 && month == 11 && year <= 2022 && year >= 2000){
            document.getElementById('resultat').innerHTML = day + "/" + month + "/" + year + " est correcte !!"

        }
        else if(day < 29 && month == 02 && year <= 2022 && year >= 2000){
            document.getElementById('resultat').innerHTML = day + "/" + month + "/" + year + " est correcte !!"
        }
        else{
            document.getElementById('resultat').innerHTML = day + "/" + month + "/" + year + " est incorrecte !!"
        }

}

