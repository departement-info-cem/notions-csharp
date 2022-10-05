if not exist node_modules\ (
    npm install
)

npm run serve-examen -- --host %COMPUTERNAME%

PAUSE