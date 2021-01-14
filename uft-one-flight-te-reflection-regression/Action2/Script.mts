' View Order
' Viewing the order is not easy. You can't just enter the order number and view it.
' Instead you have to scroll through the orders and use an algorithm - FindOrder - to find it.

OrderNum = 0
ONum = 0
PgDown = 0
RowIndex = 0

Function FindOrder(OrderNum) ' Create the page down and row index for the given order number
	ONum = int(OrderNum)
	If ONum >= 28  Then ' Created order numbers start at 25 which will appear on the 2nd page, row 6
		PgDown =  int((ONum - 12) / 8)
		RowIndex = ((ONum - 28) mod 8) + 1
		msgbox ("ONum = " & ONum & " RowIndex = " & RowIndex & " PgDown = " & PgDown)
	Else
	    PgDown = 1
	    RowIndex = (ONum mod 7) + 2 ' The first two pages are not purely numeric so we fudge it if it's on those pages
	End If

End Function

FindOrder(Parameter("CreatedOrderNum"))

' Choose 4 to View an Existing Reservation
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "4"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync

' Start by entering PF4 to search for the order
TeWindow("TeWindow").TeScreen("FR68 Flights").TeField("0000(protected)").SetCursorPos
TeWindow("TeWindow").TeScreen("FR68 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR68 Flights").Sync

TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos

For i = 1 To PgDown ' Get to the correct page
    TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_PF7
    TeWindow("TeWindow").TeScreen("FR77 Sele").Sync	
Next

' Set x on line that we want to view
riStr = CStr(RowIndex)
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField(riStr).Set "x" @@ hightlight id_;_884_;_script infofile_;_ZIP::ssf2.xml_;_
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField(riStr).SetCursorPos 1 @@ hightlight id_;_884_;_script infofile_;_ZIP::ssf3.xml_;_

' Now view the reservation selected
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER @@ hightlight id_;_11645_;_script infofile_;_ZIP::ssf4.xml_;_
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
' Write viewed order num to Output tab
Print "== Viewed  Order Number: " & Parameter("CreatedOrderNum")
Wait 2

' Go back to the main menu
TeWindow("TeWindow").TeScreen("FR68 Flights").SendKey TE_PF3

