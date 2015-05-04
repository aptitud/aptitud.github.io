# AptiWeb2.0
Webben uppdateras automatiskt när förändring committas in till detta repo och **branchen gh-pages**. Det kan ta upp till 10 minuter innan ändringen har deployats av Github. Ändring av repot kan göras direkt i githubs editor eller med Git, Github for Windows eller Github for Mac.

För att ändra direkt i Github: Öppna index.html och klicka på "Edit"-knappen uppe till höger.
För att lägga till filer behöver de läggas till i repot. Det kan göras med Git, Github for Windows eller Github for Mac

## Installera och köra local
1. git clone https://github.com/aptitud/AptiWeb2.0.git
2. git checkout gh-pages
3. npm install (npm has to be installed on your machine)
4. grunt server
5. Klicka här http://localhost:8080/?local=true

## Deploy:a till Github pages
1. git push origin gh-pages
