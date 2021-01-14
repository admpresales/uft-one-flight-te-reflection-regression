' Iterate Actions
' Iterate through the following actions (uses this actions data table)

Environment.Value("CurrentIteration") = Environment.Value("CurrentIteration") + 1
Print "Iteration number: " & Environment.Value("CurrentIteration")

RunAction "2-1-Create Order", oneIteration
RunAction "2-2-View Order", oneIteration, Parameter("2-1-Create Order", "CreatedOrderNum")
RunAction "2-3-Delete Order", oneIteration, Parameter("2-1-Create Order", "CreatedOrderNum")
