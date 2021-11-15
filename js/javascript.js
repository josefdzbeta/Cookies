/**
 * @author Jose Angel Fernandez Betancourt
 * @description Cookies
 * @license GPL 2021 V3
 */


'use strict'

console.log('Cargado JS')
window.onload = iniciar

function iniciar (){
    console.log(document.cookie)
    let fechaCaducidad = new Date(2021, 11, 15)
    document.cookie ='usuario Jose Angel;expires='
}






