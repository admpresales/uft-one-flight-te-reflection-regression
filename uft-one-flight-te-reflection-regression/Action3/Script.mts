' Create Order
' NOTE: Do not try and randomize everything because not all flights go to all cities.
'  Also only Cash and Personal check are accepted methods of payment (Mop).
' Credit cards do not properly authorize so do not use them.
' You can safely parameterize the Class of Service (CoS) - which this script does with a random value function.
' NOTE: Also notice that a column name (e.g. Jetline) cannot match the name of an object repository field (e.g. Airline).

IterateAction = "2-0-Iterate Actions"
Randomize

Function RandomValue(column) ' pass in the column name and you'll get a random value
  rowcount = DataTable.GetSheet(IterateAction).GetRowCount ' max count of rows in list
  RandomValue = ""
  While RandomValue = "" ' keep trying random row numbers until one of the values is non-empty
      randselect = Int ((rowcount) * Rnd + 1)
      DataTable.SetCurrentRow randselect
      RandomValue = DataTable.Value (column, "Local")
  Wend
  DataTable.SetCurrentRow 1
End Function

' Select: Create Order
TeWindow("TeWindow").TeScreen("FR68 Flights").Sync
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "1"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync

'Select: Flight Date
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").Set DataTable("Flight Date", IterateAction)

'Select: Airline
' NOTE: Only some airlines service some any given pair of cities
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Airline").Set DataTable("Jetline", IterateAction)

'Select: From City
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("From City").Set DataTable("FromCity", IterateAction)

'Select: To City
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("To City").Set DataTable("ToCity", IterateAction)

'Select: Flight
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Flight").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync

TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync

' Select: Passenger Name
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Customer").Set DataTable("PassengerName", IterateAction)

' Select: Class of Service
' Paramterize Class of Service
ClassOfService = RandomValue("CoS")
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Class of Service").Set ClassOfService

' Select: Method of Payment - Mop
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Method of payment").Set DataTable("Mop", IterateAction)

' Select: Order Number
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Order Number").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("OrderNumber(protected)").SetCursorPos

' Create output parameter for use with subsequent actions
CreatedOrderNum = TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("OrderNumber(protected)").Text
Parameter("CreatedOrderNum") = CreatedOrderNum
' Write created order num to Output tab
Print "== Created Order Number: " & Parameter("CreatedOrderNum")

TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync

' Select: Depart Date
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF3
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync


