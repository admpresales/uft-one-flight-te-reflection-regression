' Wrapper
' This wrapper action calls Logon, Iterate Actions and Logoff

RunAction "1-Logon", oneIteration
RunAction "2-0-Iterate Actions", "1 - 2" ' Just run the first two rows.
RunAction "3-Logoff", oneIteration

