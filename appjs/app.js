
'use srtict ';
let hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const section = document.getElementById('STORE');
const articleElement = document.createElement('article');
section.appendChild(articleElement);
const tabelElement = document.createElement('table');

articleElement.appendChild(tabelElement);

let loc=[];


let footerData = [];





function Lacations (location,minCustPerHour,maxCustPerHour,avgCookiePerSale )
{
  this.location = location;
  this.total = 0;
  this.totalCulomn=0;
  this.totalOfTotal=0;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.custPerHoursArray = [];
  this.cookiesPerHours = [];
  loc.push(this);
  this.custPerHours=function()
  {
    for (let i =0 ; i<hoursOpen.length;i++)
    {
      let custPerHours = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) );
      this.custPerHoursArray.push(custPerHours);

    }


  };
  this.calCookiesPerHour = function()
  {
    this.custPerHours();
    for (let i =0;i<hoursOpen.length;i++)
    {

      let cookies = this.custPerHoursArray[i] * avgCookiePerSale;
      this.cookiesPerHours.push(Math.floor(cookies));


    }

  };

  this.headerRander = function()
  {
    const tableHeaderRow1 = document.createElement('tr');
    tabelElement.appendChild(tableHeaderRow1);
    const tableHeader = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader);
    tableHeader.textContent='LOC';
    for (let i=0;i<hoursOpen.length;i++)
    {
      const tableHeader = document.createElement('th');
      tableHeaderRow1.appendChild(tableHeader);
      tableHeader.textContent=hoursOpen[i];

    }


    const tableHeader16 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader16);
    tableHeader16.textContent='Daily Location Total';

  };







  this.setSummationOfColumns = function ( )
  {

    let loc =[seattle,Tokyo,Dubai,Paris,Lima];
    for (let i=0;i<hoursOpen.length;i++)
    {

      for (let j =0;j<loc.length;j++)
      {
        this.totalCulomn +=loc[j].cookiesPerHours[i];
      }


      footerData.push(this.totalCulomn);
      this.totalOfTotal=this.totalOfTotal+this.totalCulomn;
      this.totalCulomn = 0;
      console.log(this.totalCulomn);
    }


  };


}









Lacations.prototype.render = function()
{
  this.calCookiesPerHour();

  const tableRow2 = document.createElement('tr');
  tabelElement.appendChild(tableRow2);
  const tableData = document.createElement('td');
  tableRow2.appendChild(tableData);
  tableData.textContent=this.location;

  for (let i = 0; i < hoursOpen.length; i++){
    const tableData1 = document.createElement('td');

    tableRow2.appendChild(tableData1);



    tableData1.textContent=this.cookiesPerHours[i];
    this.total = this.cookiesPerHours[i]+this.total;
    this.totalOfTotal=this.totalOfTotal+this.total;



  }




  const tableData2 = document.createElement('td');

  tableRow2.appendChild(tableData2);
  tableData2.textContent=` ${this.total}`;


};
// Lacations.prototype.footerRender = function()
// {
//   this.setSummationOfColumns();
//   const tableHeaderRow1 = document.createElement('tr');
//   tabelElement.appendChild(tableHeaderRow1);
//   const tableHeader = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader);// repeat
//   tableHeader.textContent='Total';// repeat


//   for (let i =0; i<hoursOpen.length;i++)
//   {
//     const tableHeader1 = document.createElement('th');
//     tableHeaderRow1.appendChild(tableHeader1);
//     tableHeader1.textContent=footerData[i];
//   }
//   const tableHeader1 = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader1);
//   tableHeader1.textContent=this.totalOfTotal;






// };

const seattle = new Lacations ('seattle', 23 , 65 , 6.3);
seattle.headerRander();
seattle.render();


const Tokyo = new Lacations ('Tokyo', 3 , 24 ,1.2);

Tokyo.render();
const Dubai = new Lacations ('Dubai', 11 , 38 , 3.7);
Dubai.render();
const Paris = new Lacations ('Paris', 20 , 38 , 2.3);
Paris.render();
const Lima = new Lacations ('Lima', 2 , 16 , 4.6);
Lima.render();

//seattle.footerRender();
console.log(loc);

seattle.footerRender();






let myForm = document.getElementById('newLocation');
let formSection = document.getElementById('formSection');

myForm.addEventListener('submit',addNewLocation);

function addNewLocation(event)
{
  const rowtodelet = tabelElement.rows.length;
  tabelElement.deleteRow(rowtodelet-1);
  event.preventDefault();
  let location = event.target.location.value;
  let minCustPerHour = event.target.minCustPerHour.value;
  let maxCustPerHour = event.target.maxCustPerHour.value;
  let avgCookiePerSale = event.target.avgCookiePerSale.value;

  let newLocation = new Lacations (location,minCustPerHour,maxCustPerHour,avgCookiePerSale);
  newLocation.render();
  newLocation.footerRender();




}

Lacations.prototype.footerRender = function()
{
  this.setSummationOfColumns = function ( )
  {


    for (let i=0;i<hoursOpen.length;i++)
    {

      for (let j =0;j<loc.length;j++)
      {
        this.totalCulomn +=loc[j].cookiesPerHours[i];
      }


      footerData.push(this.totalCulomn);
      this.totalOfTotal=this.totalOfTotal+this.totalCulomn;
      this.totalCulomn = 0;
      console.log(this.totalCulomn);
    }


  };

  this.setSummationOfColumns();
  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);
  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);// repeat
  tableHeader.textContent='Total';// repeat

  for (let i =0; i<hoursOpen.length;i++)
  {
    const tableHeader1 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader1);
    tableHeader1.textContent=footerData[i];
  }
  const tableHeader1 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader1);
  tableHeader1.textContent=this.totalOfTotal;






};
document.addEventListener("click", function(){
  document.getElementById("loca").innerHTML = "Hello World";
});
