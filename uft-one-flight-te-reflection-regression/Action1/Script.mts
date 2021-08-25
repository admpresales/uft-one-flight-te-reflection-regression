' To run this script, first configure Tools > Options > GUI Testing > Terminal Emulator
' and set Termina emulator to Reflection Desktop
'
' Start by closing down any previous processes that we want to start next
SystemUtil.CloseProcessByName "term_serv.exe" @@ hightlight id_;_787918_;_script infofile_;_ZIP::ssf120.xml_;_
SystemUtil.CloseProcessByName "Attachmate.Emulation.Frame.exe"

' Start our Flight 3270 Demo app and the Reflections connection to it
SystemUtil.Run "C:\Program Files (x86)\Mercury Int. Year2000 Demo Server\term_serv.exe", "", "C:\Program Files (x86)\Mercury Int. Year2000 Demo Server"
Window("3270/5250 server").Minimize
wait 2
SystemUtil.Run "C:\Users\demo\Documents\Micro Focus\Reflection\Reflection Flight.rd3x"

' the following code replaces a wait 20 line that didn't work too well :-)
For Iterator = 1 To 20 Step 1
	if TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").Exist (Iterator) then
	 	wait 2
		Exit for
	end if
next

' Logon

'Start with current iteration count equal to zero
Environment.Value("CurrentIteration") = 0

' Any user name will work as long as the password is 'mercury'
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").TeField("USERID").Set DataTable("USERID", dtLocalSheet) @@ hightlight id_;_1536_;_script infofile_;_ZIP::ssf28.xml_;_

' Password is 'mercury'
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").TeField("PASSWORD").SetSecure "5d5469e9989528086fd38a5daac53402ca589e6e" ' PW = mercury @@ hightlight id_;_1616_;_script infofile_;_ZIP::ssf29.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").TeField("PASSWORD").SetCursorPos 7 @@ hightlight id_;_1616_;_script infofile_;_ZIP::ssf30.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").SendKey TE_ENTER @@ hightlight id_;_8436_;_script infofile_;_ZIP::ssf31.xml_;_
TeWindow("TeWindow").TeScreen("VIRTUAL MACHINE/SYSTEM").Sync
TeWindow("TeWindow").TeScreen("LOGON MERCURY").TeField("LOGON MERCURY INPUT").Set DataTable("System", dtLocalSheet) @@ hightlight id_;_1762_;_script infofile_;_ZIP::ssf32.xml_;_
TeWindow("TeWindow").TeScreen("LOGON MERCURY").TeField("LOGON MERCURY INPUT").SetCursorPos 5 @@ hightlight id_;_1762_;_script infofile_;_ZIP::ssf33.xml_;_
TeWindow("TeWindow").TeScreen("LOGON MERCURY").SendKey TE_ENTER @@ hightlight id_;_6710_;_script infofile_;_ZIP::ssf34.xml_;_
TeWindow("TeWindow").TeScreen("LOGON MERCURY").Sync

