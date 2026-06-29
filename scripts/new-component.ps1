param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

$basePath = "components/ui"
$file = Join-Path $basePath "$Name.tsx"

if (Test-Path $file) {
    Write-Host "❌ El componente ya existe." -ForegroundColor Red
    exit
}

$content = @"
type ${Name}Props = {
  children?: React.ReactNode;
};

export default function $Name({ children }: ${Name}Props) {
  return (
    <div>
      {children}
    </div>
  );
}
"@

New-Item -ItemType File -Force -Path $file | Out-Null
Set-Content -Path $file -Value $content

Write-Host "✅ Componente $Name creado correctamente." -ForegroundColor Green