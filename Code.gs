//*******************************************************************************************************************
//*******************************************************************************************************************
//Return latest date for sheet

function statusDate(){
  //Initialize values
  var ssHistory = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('History'); //Our Change Log sheet
  var dates = ssHistory.getRange(3, 11, ssHistory.getLastRow()).getValues(); //Our dates from the Change Log
  var newDates = [];
  var rowArray = [];
  var indexes = [];
  
  dates.forEach(function (dateValue){
    //convert dates to numbers
    var dt = Number(new Date(dateValue));
    //push numbers to new array
    newDates.push(dt);
  });
  
  //return the largest number, which is the latest date
  var maxDateNum = newDates.sort(function(a, b){return b-a})[0];
  //convert largest number back to date
  var maxDate = Utilities.formatDate(new Date(+maxDateNum),'America/New_York', 'M/d/y');
  Logger.log("newDates sort value;"+maxDate);
  
  return maxDate;
  
  //get header row
  //rowArray.push(ssHistory.getRange(2,1,1,12).getValues()); 
  //Create new array where the date matches the latest  
  /*var newestValues = ssHistory.getRange(3, 1, ssHistory.getLastRow(), 12).getValues();  
  for (var y=0;y<newestValues.length;y++){
    if (ssHistory.getRange(y, 11,ssHistory.getLastRow()).getDisplayValue() == maxDate){
      Logger.log("Latest data, push "+y+" to array");
      indexes.push(y);      
    }    
    rowArray = newestValues.filter(function(value){
      //Logger.log("newestValues: "+value[10]);
      //return String(Utilities.formatDate(new Date(value[10]),'America/New_York', 'M/d/y')) == String(maxDate);
    });
  }
  Logger.log("rowArray: "+rowArray);
  Logger.log(String(Utilities.formatDate(new Date(newestValues[dates.length][10]),'America/New_York', 'M/d/y')));
  Logger.log(String(maxDate));
  
  //Logger.log("mod date:" + Utilities.formatDate(new Date(newestValues[5][10]),'America/New_York', 'M/d/y'));
  
  
  //Push rows to array
  for (var x=3;x<=ssHistory.getLastRow();x++){
    //Push a row if it has the latest data    
    if (ssHistory.getRange(x, 11) == maxDate){
      Logger.log("Latest data, push to array");
      rowArray.push(ssHistory.getRange(x,1,1,12).getValues());
    }
  }
  
  Logger.log(rowArray.join("\n\n\n"));
  
  //getHTMLTable(range);  */
  
}