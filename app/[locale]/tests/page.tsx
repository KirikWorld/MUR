export default function Page() {
  const colors = [
    { name: "Foreground", variable: "var(--foreground)" },
    { name: "Background", variable: "var(--background)" },
    { name: "Card", variable: "var(--card)" },
    { name: "Card Foreground", variable: "var(--card-foreground)" },
    { name: "Popover", variable: "var(--popover)" },
    { name: "Popover Foreground", variable: "var(--popover-foreground)" },
    { name: "Primary", variable: "var(--primary)" },
    { name: "Primary Foreground", variable: "var(--primary-foreground)" },
    { name: "Secondary", variable: "var(--secondary)" },
    { name: "Secondary Foreground", variable: "var(--secondary-foreground)" },
    { name: "Muted", variable: "var(--muted)" },
    { name: "Muted Foreground", variable: "var(--muted-foreground)" },
    { name: "Accent", variable: "var(--accent)" },
    { name: "Accent Foreground", variable: "var(--accent-foreground)" },
    { name: "Destructive", variable: "var(--destructive)" },
    { name: "Destructive Foreground", variable: "var(--destructive-foreground)" },
    { name: "Border", variable: "var(--border)" },
    { name: "Input", variable: "var(--input)" },
    { name: "Ring", variable: "var(--ring)" },
    { name: "Chart 1", variable: "var(--chart-1)" },
    { name: "Chart 2", variable: "var(--chart-2)" },
    { name: "Chart 3", variable: "var(--chart-3)" },
    { name: "Chart 4", variable: "var(--chart-4)" },
    { name: "Chart 5", variable: "var(--chart-5)" }
  ];

  return (
    <div className="p-4 bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Color Palette Test</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center justify-center p-2 border rounded shadow">
            <div className="w-16 h-16 rounded mb-2" style={{ backgroundColor: `hsl(${color.variable})` }}></div>
            <p className="text-sm text-center">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
