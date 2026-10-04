@echo off
cd /d "%~dp0"
echo Ciao, Udine! - avvio...
node -v || goto nonode
set OPEN_BROWSER=1
node server.js
pause
exit /b
:nonode
echo Node.js non trovato nel PATH. Installa Node.js da https://nodejs.org e riapri questa finestra.
pause
