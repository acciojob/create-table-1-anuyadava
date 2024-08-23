function insert_Row() {
    //Write your code here
	var table = document.getElementById("sampleTable");
    
    // Insert a new row at the top of the table
    var newRow = table.insertRow(0);
    
    // Create and insert the first cell
    var cell1 = newRow.insertCell(0);
    cell1.textContent = "New Cell1";
    
    // Create and insert the second cell
    var cell2 = newRow.insertCell(1);
    cell2.textContent = "New Cell2";
  
  
}
