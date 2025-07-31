@echo off
cd /d "c:\Users\rachi\Files\Projects\CTCD\courage-networks\assets"
for %%f in (*.png) do (
    echo Converting %%f to WebP...
    ffmpeg -i "%%f" -quality 80 "%%~nf.webp"
)
echo Conversion complete!
pause