echo Arrêt de Chrome
pause
taskkill /f /im chrome.exe
pause
echo Redémarrage de Chrome de sécurité dégradé
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files
pause