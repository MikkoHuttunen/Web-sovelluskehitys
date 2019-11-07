/*ajax.js
 Ensin luodaan XMLhttpRequest-olio ja kahdella funktiolla toteutetaan
 asynkroninen tiedon haku tietokannasta.
 Kolmas funktio ei liity Ajaxiin mutta laajentaa
 asiakassovelluksen (tämän skriptin) toimintaa.
 */

//Luodaan XMLhttpRequest -olio
const http = new XMLHttpRequest();

/*
 startRequest() -funktiolla  aloitetaan ajax-tiedonsiirto eli
 tehdään pyyntö palvelimella sijaitsevalle ohjelmalle
 */
// eslint-disable-next-line no-unused-vars
function startRequest(input) {
    //asetetaan tapahtumankäsittelijä jolla seurataan tapahtuman tilaa
    http.onreadystatechange = handleHttpResponse;
    //Määritetään url johon otetaan yhteys. Lomakkeelta saadan kentän arvo (input)
    const url = 'dbquery.php?q=' + input;
    //Yhteys dbquery.php -skriptiin alustetaan open-metodilla
    http.open('GET', url, true);
    //send-metodi tekee pyynnön.
    http.send(null);
}

/*
 handleHttpResponse() -funktiolla käsitellään pyynnön tulos
 eli otetaan palvelimella sijaitsevalta ohjelmalta saatu data talteen.
 mikäli kaikki data on saatu sieltä onnistuneesti*/
function handleHttpResponse() {
    //Suoritetaan jos datan pyynnön tila valmis (readyState == 4)
    if (http.readyState === 4) {
        //Suoritetaan jos HTTP-pyyntö on onnistunut (status==200)
        if (http.status === 200) {
            //haetaan oliossa oleva tekstitieto responseText -metodilla
            results = http.responseText;
            //sijoitetaan se HTML-tiedostoon sen elementin sisään jonka id="dbdata"
            document.getElementById('dbdata').innerHTML = results;
        } else {
            window.alert('Error:' + http.status);
        }
    }
}

/*
 enableButton() -funktio ei liity Ajaxiin, mutta siirtää toimintaa asiakaspuolelle
 ja tekee sovelluksesta käytettävämmän ja interaktiivisemman.
 Nappi jolla kantaan lisätään tunnus ja salasana on toimii vain
 kun tunnus ja salasana on syötetty ja tunnus on käytettävissä.
 */
// eslint-disable-next-line no-unused-vars
function enableButton() {

    if (document.getElementById('username').value === '' || document.getElementById('password').value === ''
        || document.getElementById('dbdata').innerHTML !== 'Käytettävissä') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
//ajetaan enableButton jatkuvasti
if (document.all || document.getElementById) {
    setInterval('enableButton()', 100);
}