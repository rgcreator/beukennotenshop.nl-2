 function bestel (){
    var aantalbeukennoten = document.getElementById("aantalbeukennoten").value;
    var verzendmethodes = document.getElementById("verzendmethodes").value;
    var BBR = document.getElementById("BBR").value;
    if(aantalbeukennoten > 0){
        if(verzendmethodes == 'PostBeverwijk 3 houtenmunten'){
            var kostenbeukennoten = eval(aantalbeukennoten * 0.30);
            totaal=+kostenbeukennoten+3;
            document.getElementById('wattebetalen').innerHTML = 'U heeft ' + aantalbeukennoten  +
             ' beukennoten besteld en u heeft gekozen voor PostBeverwijk. U moet ' + totaal + ' houten munten betalen.';
             localStorage.setItem("totaal", totaal);
            }
        if (verzendmethodes == 'BBR Bert Benny Ricardo 2 houten munten'){
            var kostenbeukennoten = eval(aantalbeukennoten * 0.30);
            totaal= eval(kostenbeukennoten+2);
            document.getElementById('wattebetalen').innerHTML = 'U heeft ' + aantalbeukennoten  +
        ' beukennoten besteld en u heeft gekozen voor PostBeverwijk. U moet ' + totaal + ' houten munten betalen';
            localStorage.setItem("totaal", totaal);


        }
}
else{
    alert("U heeft geen beukennoten besteld")
}
}