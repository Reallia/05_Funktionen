"use strict";

/***** Funktionen 01 *****/

//1. Kapselung voncodeblöcken

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


/****** Funktionen 02a ******/
// 2b. Parametrisierung + Datenüberabe von AUSSEN

ausgabeNamenParam("Anna"); // Argument
ausgabeNamenParam("Craig");
ausgabeNamenParam("Fatih");

function ausgabeNamenParam(firstName) { // Parameter
    console.log("Hallo " + firstName + "!");
}