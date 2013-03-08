/**
 * 全員NGなければ色を変えるスクリプト。
 */
function myFunction() {
  
  // シートを取得。
  var SS = SpreadsheetApp.getActiveSpreadsheet();
  var ST = SS.getSheets()[0];
  
  // 縦セル取得。
  var rows  = ST.getRange(4, 1, 19, 1).getValues();
  
  // 初期化。
  var ngSearch = newNgSearch(ST);
  
  // クロージャ実行する。
  for(var i=0; i<rows.length; i++) {
    ngSearch();
  }
}

// NGを検索して無ければ色変更。
var newNgSearch = function(sheets) {
  
  // めんどいからマジックナンバー。
  var row = 4;
  var endCol = 19; // 横セル（人数）
  

  // クロージャってなんかかっこいいよね。
  return (function() {
  
    // 横1列取得。
    var inputCols = sheets.getRange(row, 2, row, endCol).getValues();
    var dateCol = sheets.getRange(row,1);
    var ng = 0;
    
    // NGがあるか調べる。
    for(var j=0; j<inputCols.length; j++) {
      if ("NG" == inputCols[0][j]) {
        ng = 1;
        break;
      }
    }
    
    // なかったら色変更。
    if (ng == 0) {
      dateCol.setBackgroundColor("#FFB6C1");
    } else {
      dateCol.setBackgroundColor("#ffffff");
    }
    row++;
  });
}