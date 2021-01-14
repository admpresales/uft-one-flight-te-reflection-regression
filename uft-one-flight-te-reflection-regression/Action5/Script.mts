' Logoff

TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "99"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 2
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync

' Close down our processes
wait 2
Window("Reflection Workspace").Close
Window("3270/5250 server").Close

