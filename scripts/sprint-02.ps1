$folders = @(
"components/app",
"components/ui",
"components/layout"
)

foreach ($folder in $folders){
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$files = @(
"components/app/AppLayout.tsx",
"components/app/AppHeader.tsx",
"components/app/AppSidebar.tsx",
"components/app/Dashboard.tsx",
"components/app/CountdownCard.tsx"
)

foreach ($file in $files){
    if(!(Test-Path $file)){
        New-Item -ItemType File -Path $file | Out-Null
    }
}

Write-Host "✅ Sprint 2 preparado."