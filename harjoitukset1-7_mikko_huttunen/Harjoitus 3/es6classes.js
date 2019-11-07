class Henkilo {
    constructor(etunimi, sukunimi, hetu) {
        this._etunimi = etunimi;
        this._sukunimi = sukunimi;
        this._hetu = hetu;
    }

    get Etunimi() {
        return this._etunimi;
    }

    set Etunimi(pEtunimi) {
        this._etunimi = pEtunimi;
    }

    get Sukunimi() {
        return this._sukunimi;
    }

    set Sukunimi(pSukunimi) {
        this._sukunimi = pSukunimi;
    }

    get Hetu() {
        return this._hetu;
    }

    set Hetu(pHetu) {
        const re = /\d{6}[+-A]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]/;
        const reTest = re.test(pHetu);
        if (reTest) {
            this._hetu = pHetu;
        } else {
            console.log('Hetu ei ole oikeassa muodossa');
        }
    }
    Tulosta () {
        return `${this._etunimi} ${this._sukunimi} on henkilö, jonka hetu on ${this._hetu} ja opintopistekertymä ${this._opintopisteet}`;
    }
}

class Opiskelija extends Henkilo {
    constructor(etunimi, sukunimi, hetu, opintopisteet) {
        super(etunimi, sukunimi, hetu);
        this._opintopisteet = opintopisteet;
    }

    get opintopisteet() {
        return this._opintopisteet;
    }

    set opintopisteet(pOpintopisteet) {
        this._opintopisteet = pOpintopisteet;
    }
}

let opiskelijaOlio = new Opiskelija('Mikko', 'Huttunen', '123456-123A', 59);
let henkiloOlio = new Henkilo('Mikko', 'Mallikas', '123456-123A');
opiskelijaOlio.Hetu = '945745jrrgj45'; //Hetun testaus
console.log(opiskelijaOlio.Tulosta());
module.exports = { Henkilo, Opiskelija, opiskelijaOlio, henkiloOlio };
