import { createIcons, icons } from "lucide";

// Caution, this will import all the icons and bundle them.
createIcons({ icons });

// Recommended way, to include only the icons you need.
import { ArrowRight, Globe, Menu } from "lucide";

createIcons({
  icons: {
    Menu,
    ArrowRight,
    Globe,
  },
});
