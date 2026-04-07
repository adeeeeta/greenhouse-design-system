import {
  AlertCircle, AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, ArrowUp,
  CaretDown, CaretLeft, CaretRight, CaretUp, Check, CheckCircle, InfoCircle, X,
  Copy, Download, Minus, Pencil, Plus, Trash, Upload,
  DotsThree, Eye, EyeSlash, Gear, List, MagnifyingGlass,
  Camera, File, Folder, Image,
  Cactus, Clover, FlowerLotus, FlowerTulip, Grains, Leaf, PottedPlant, Tree, TreeEvergreen, TreePalm,
  Drop, Fan, Lightbulb, SprayBottle, Thermometer, Timer,
  CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSnow, CloudSun,
  Moon, MoonStars, Snowflake, Sun, SunHorizon, Wind,
  Barn, City, Mountains, Park, Tent
} from "@/components/Icons"
import Divider from "@/components/Divider"

const icons = [
  { name: "AlertCircle", component: AlertCircle, category: "Status" },
  { name: "AlertTriangle", component: AlertTriangle, category: "Status" },
  { name: "Check", component: Check, category: "Status" },
  { name: "CheckCircle", component: CheckCircle, category: "Status" },
  { name: "InfoCircle", component: InfoCircle, category: "Status" },
  { name: "X", component: X, category: "Status" },
  { name: "ArrowUp", component: ArrowUp, category: "Navigation" },
  { name: "ArrowDown", component: ArrowDown, category: "Navigation" },
  { name: "ArrowLeft", component: ArrowLeft, category: "Navigation" },
  { name: "ArrowRight", component: ArrowRight, category: "Navigation" },
  { name: "CaretUp", component: CaretUp, category: "Navigation" },
  { name: "CaretDown", component: CaretDown, category: "Navigation" },
  { name: "CaretLeft", component: CaretLeft, category: "Navigation" },
  { name: "CaretRight", component: CaretRight, category: "Navigation" },
  { name: "Copy", component: Copy, category: "Actions" },
  { name: "Download", component: Download, category: "Actions" },
  { name: "Minus", component: Minus, category: "Actions" },
  { name: "Pencil", component: Pencil, category: "Actions" },
  { name: "Plus", component: Plus, category: "Actions" },
  { name: "Trash", component: Trash, category: "Actions" },
  { name: "Upload", component: Upload, category: "Actions" },
  { name: "DotsThree", component: DotsThree, category: "Interface" },
  { name: "Eye", component: Eye, category: "Interface" },
  { name: "EyeSlash", component: EyeSlash, category: "Interface" },
  { name: "Gear", component: Gear, category: "Interface" },
  { name: "List", component: List, category: "Interface" },
  { name: "MagnifyingGlass", component: MagnifyingGlass, category: "Interface" },
  { name: "Camera", component: Camera, category: "Media" },
  { name: "File", component: File, category: "Media" },
  { name: "Folder", component: Folder, category: "Media" },
  { name: "Image", component: Image, category: "Media" },
  { name: "Cactus", component: Cactus, category: "Plants" },
  { name: "Clover", component: Clover, category: "Plants" },
  { name: "FlowerLotus", component: FlowerLotus, category: "Plants" },
  { name: "FlowerTulip", component: FlowerTulip, category: "Plants" },
  { name: "Grains", component: Grains, category: "Plants" },
  { name: "Leaf", component: Leaf, category: "Plants" },
  { name: "PottedPlant", component: PottedPlant, category: "Plants" },
  { name: "Tree", component: Tree, category: "Plants" },
  { name: "TreeEvergreen", component: TreeEvergreen, category: "Plants" },
  { name: "TreePalm", component: TreePalm, category: "Plants" },
  { name: "Drop", component: Drop, category: "Care & Tools" },
  { name: "Fan", component: Fan, category: "Care & Tools" },
  { name: "Lightbulb", component: Lightbulb, category: "Care & Tools" },
  { name: "SprayBottle", component: SprayBottle, category: "Care & Tools" },
  { name: "Thermometer", component: Thermometer, category: "Care & Tools" },
  { name: "Timer", component: Timer, category: "Care & Tools" },
  { name: "CloudFog", component: CloudFog, category: "Weather" },
  { name: "CloudLightning", component: CloudLightning, category: "Weather" },
  { name: "CloudMoon", component: CloudMoon, category: "Weather" },
  { name: "CloudRain", component: CloudRain, category: "Weather" },
  { name: "CloudSnow", component: CloudSnow, category: "Weather" },
  { name: "CloudSun", component: CloudSun, category: "Weather" },
  { name: "Moon", component: Moon, category: "Weather" },
  { name: "MoonStars", component: MoonStars, category: "Weather" },
  { name: "Snowflake", component: Snowflake, category: "Weather" },
  { name: "Sun", component: Sun, category: "Weather" },
  { name: "SunHorizon", component: SunHorizon, category: "Weather" },
  { name: "Wind", component: Wind, category: "Weather" },
  { name: "Barn", component: Barn, category: "Environment" },
  { name: "City", component: City, category: "Environment" },
  { name: "Mountains", component: Mountains, category: "Environment" },
  { name: "Park", component: Park, category: "Environment" },
  { name: "Tent", component: Tent, category: "Environment" },
]

const categoryDescriptions: Record<string, string> = {
  "Status": "Use status icons alongside text to communicate feedback, validation, and system states. Always pair with a label or tooltip, and never use status icons alone to convey meaning.",
  "Navigation": "Use arrows for directional movement between pages or views. Use carets for expanding and collapsing UI elements like dropdowns, accordions, and menus.",
  "Actions": "Use action icons inside buttons or as standalone triggers. Always pair with an aria-label when used without visible text. Prefer the icon-only button pattern for compact interfaces.",
  "Interface": "Use interface icons for common UI controls like search, settings, and menus. These are functional and should always have an accessible label.",
  "Media": "Use media icons when referencing files, folders, images, or camera capture. Pair with descriptive labels in contexts where the file type or action matters.",
  "Plants": "Use plant icons to represent species, collections, or growing zones in the greenhouse. These are illustrative and work well as visual identifiers alongside text labels.",
  "Care & Tools": "Use care and tool icons to represent watering, temperature, light, and scheduling actions. Pair with labels in care schedule and settings contexts.",
  "Weather": "Use weather icons to represent environmental conditions affecting plant care. Useful for frost alerts, watering reminders, and climate zone indicators.",
  "Environment": "Use environment icons to represent growing locations and outdoor contexts. Useful for categorising plants by location; indoors, outdoors, greenhouse, or farm.",
}

const categories = [...new Set(icons.map((i) => i.category))]
const sizes = [16, 20, 24]

export default function IconsPage() {
  return (
    <>
      <h1>Icons</h1>
      <p>
        Greenhouse uses a curated set of 64 icons from Phosphor Icons, organised
        into nine categories. All icons accept a <code>size</code> prop and
        inherit the current text color via <code>currentColor</code>.
      </p>

      {categories.map((category) => (
        <div key={category}>
          <Divider />
          <h2>{category}</h2>
          <p>{categoryDescriptions[category]}</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "var(--space-4)",
          }}>
            {icons
              .filter((i) => i.category === category)
              .map(({ name, component: Icon }) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-3)",
                    padding: "var(--space-4)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-surface)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                    {sizes.map((size) => (
                      <div
                        key={size}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "var(--space-2)",
                          color: "var(--color-text)",
                        }}
                      >
                        <Icon size={size} />
                        <span style={{
                          fontSize: "var(--type-caption-size)",
                          color: "var(--color-text-muted)",
                        }}>
                          {size}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span style={{
                    fontSize: "var(--type-label-size)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--color-text)",
                  }}>
                    {name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}

      <Divider />

      <h2>Usage</h2>
      <p>
        Import icons by name from <code>@/components/Icons</code>. Use the{" "}
        <code>size</code> prop to control dimensions — the default is{" "}
        <code>16</code>. Icons inherit color from their parent via{" "}
        <code>currentColor</code>.
      </p>
      <p>
        All icons include <code>aria-hidden="true"</code> by default since they
        are decorative. If an icon conveys meaning without accompanying text,
        wrap it in an element with an <code>aria-label</code>.
      </p>
    </>
  )
}