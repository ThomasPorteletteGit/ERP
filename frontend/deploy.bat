REM Path: frontend/deploy.bat
cd ..

cd backend

del /q /s /f public

cd ..

Xcopy "frontend/build" "backend/public" /s /e /y

cd backend

git add .

git commit -m "Deploy"

git push