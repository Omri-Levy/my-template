git add .
echo Please insert the commit message:
read -r MSG
git commit -m "$MSG" --no-verify
git push
echo test
