' Delete Order
' Delete the order we created in the Create Order action

TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "3"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync

' Enter the order to be deleted from the CreatedOrderNum
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").Set Parameter("CreatedOrderNum")
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos 4
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos 4
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos 4
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos

' Write deleted order num to Output tab
Print "== Deleted Order Number: " & Parameter("CreatedOrderNum")

' Go back to the main menu
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_PF3
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync

