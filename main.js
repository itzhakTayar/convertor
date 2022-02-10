'use strict'
function convert(){
const num=document.querySelector('.number').value
const fromSelect=document.querySelector('.from')
const fromText=fromSelect.options[fromSelect.selectedIndex].text
const toSelect=document.querySelector('.to')
const toText=toSelect.options[toSelect.selectedIndex].text
const res=parseInt(num,fromText).toString(toText)
const resToShow=`result:${res} (${toText})`
document.querySelector('.res').innerText=resToShow
}