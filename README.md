# IEtest

This add-in for Excel 365 tests the ability of Internet Explorer 11 to load its task pane.

It is a stripped-down version of the Formula Forge add-in in the AppSource marketplace.

To use IEtest, side-load its manifest _ietest.xml_ into Excel and click the _Show Taskpane_ button in the _IE Test_ command group on Excel's _Home_ tab.  The task pane should display a text view and a tree view of the formula _-B1^2_.

In desktop Excel, it may be necessary to click the _Show Taskpane_ button twice for the text and tree view to appear.

The task pane loads successfully in Excel 365 for Windows, Excel 365 for the Macintosh, and Excel 365 for the Web when viewed with any browser (e.g, Edge, Chrome, Firefox, and Safari) other than Internet Explorer 11.

It does not load successfully in Excel 2013+ or Excel 2016+ because those versions of Excel use Internet Explorer 11 instead of Edge.

Microsoft has announced that it is discontinuing support for Internet Explorer.  However, it is hard to see how it can do that without also discontinuing support for Excel 2013+ and Excel 2106+.

Internet Explorer 11 produces the following error messages in its console log.

    SCRIPT5022: Office.js has not fully loaded. Your app must call "Office.onReady()" as part of it's loading sequence (or set the "Office.initialize" function). If your app has this functionality, try reloading this page.
    office.js (46,28063)
    SEC7111: HTTPS security is compromised by res://ieframe.dll/dnserrordiagoff.htm
    SEC7111: HTTPS security is compromised by res://ieframe.dll/errorPageStrings.js
    SEC7111: HTTPS security is compromised by res://ieframe.dll/httpErrorPagesScripts.js
