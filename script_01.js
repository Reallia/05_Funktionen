"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung voncodeblöcken
// Funktionsaufruf (call)
// test();

//Funktionsaufruf (body) | callee
function test()
{
    console.log("Hallo Robert!");
}

/****** Funktionen 02a ******/
// 2a. Parametrisierung + Datenüberabe von INNEN

// ausgabeNamen();

function ausgabeNamen() {
    let firstName = "Anna"; // what happens in Vagas, stays in vegas.

    console.log("Hallo " + firstName + "!");
}

// console.log(firstName); // Fehler: Scope!


/****** Funktionen 02b ******/
// 2b. Parametrisierung + Datenüberabe von AUSSEN

// ausgabeNamenParam("Anna"); // Argument
// ausgabeNamenParam("Craig");
// ausgabeNamenParam("Fatih");

function ausgabeNamenParam(firstName) { // Parameter
    console.log("Hallo " + firstName + "!");
}


/****** Funktionen 02c ******/
// 2c. Parametrisierung + Datenüberabe von AUSSEN

// ausgabeNamenParams("Maxine","Mütze");
// ausgabeNamenParams(prompt("Vorname"),prompt("Nachname?"))

function ausgabeNamenParams(firstName, familyname) { // Parameter
    console.log("Hallo " + firstName + " " + familyname + "!");
}


/****** Funktionen 03a ******/
// 03a. Vorbereitung
// Postulat: on funktion one job (uncle Bob)
// SRP single repository principle

ausgabeNamenParams2("Max", "Mütze");

function ausgabeNamenParams2(firstName, familyname){


    
    // 1. Funktionalität: string composing
    const gap = " ";
    const outputString = "Hallo" + gap + firstName + gap + familyname + "!";

    // 2. Funktionalität: data output
    console.log(outputString);
}

/****** Funktionen 03b ******/
// 03b. Trennen der Funktionalität |return

    //1. Funktionalität: string composing

    output(getString("Maxine","Mütze"));
    function getString(firstName, familyname) {
        const gap = " ";
        const outputStr = "Hallo" + gap + firstName + gap + familyname + "!";
        return outputStr; // ---> Daten zum Call
        console.log("hi") //return Beendet die Funktion
    }

    // 2. Funktionalität: data output
    // output("Hi");
    function output(outputData) {
        console.log(outputData);
    }