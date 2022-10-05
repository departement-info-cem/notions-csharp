@echo off

if not exist node_modules\ (
    @echo Installation en cours...
    call npm install>nul 2>&1
    @echo Installation terminé.
)

@echo Demarrage du serveur...
call npm run serve-examen -- --host %COMPUTERNAME%>nul 2>&1

PAUSE