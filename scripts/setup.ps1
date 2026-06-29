Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host " JAPAN GUIDE - PROJECT SETUP" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

$folders = @(
"components/ui",
"components/layout",
"components/dashboard",
"components/cities",
"components/maps",
"components/flights",
"components/hotels",
"components/restaurants",
"components/shopping",
"components/budget",
"components/common",
"data/cities",
"data/hotels",
"data/restaurants",
"data/flights",
"data/shopping",
"hooks",
"lib",
"styles",
"types",
"public/images",
"public/icons",
"public/maps"
)

foreach ($folder in $folders)
{
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$files = @(
"components/ui/Button.tsx",
"components/ui/Card.tsx",
"components/ui/Badge.tsx",
"components/ui/Input.tsx",
"components/ui/Search.tsx",

"components/layout/Header.tsx",
"components/layout/Sidebar.tsx",

"components/dashboard/Dashboard.tsx",

"data/cities/osaka.json",
"data/cities/kyoto.json",
"data/cities/tokyo.json",
"data/cities/kanazawa.json",
"data/cities/nagoya.json"
)

foreach ($file in $files)
{
    if(!(Test-Path $file))
    {
        New-Item -ItemType File -Path $file | Out-Null
    }
}

Write-Host ""
Write-Host "Proyecto preparado correctamente." -ForegroundColor Green
Write-Host ""