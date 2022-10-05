if not exist node_modules\ (
    npm install
)
set host = hostname
npm run serve-examen -- --host %COMPUTERNAME%
