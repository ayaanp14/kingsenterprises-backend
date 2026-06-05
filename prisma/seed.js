import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const products = [
  // --- Category: Ceiling Fan ---
  {
    name: "IVAS TRIMAX 900MM Ceiling Fan",
    category: "Ceiling Fan",
    description: "The IVAS Trimax 900MM is a high-performance ceiling fan engineered with an aerodynamic blade design and a powerful double ball bearing motor. It features a high-speed motor running at 450 RPM and provides an air delivery of 147 CMM, making it ideal for compact spaces like bedrooms, study rooms, and small offices. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "RR UPKRAM 1200MM CEILING FAN BROWN & WHITE",
    category: "Ceiling Fan",
    description: "The RR Upkram 1200MM Ceiling Fan combines classic design with robust performance. Powered by a 100% copper-wound induction motor, this dual-tone Brown & White fan delivers high air circulation at 380-400 RPM with a power consumption of ~55-70W. Perfect for living rooms, dining areas, and offices. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "RR VAYOO 600MM CEILING FAN",
    category: "Ceiling Fan",
    description: "The RR Vayoo 600MM Ceiling Fan is a compact, ultra-high-speed fan designed for smaller rooms, kitchens, and corridors. Running at an impressive 850 RPM, it provides quick ventilation and focused cooling. Featuring robust steel construction and double ball bearings for long-lasting durability. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Ecolink 1200mm Ceiling Fan",
    category: "Ceiling Fan",
    description: "The Ecolink 1200mm Ceiling Fan, engineered by Signify (formerly Philips Lighting), delivers reliable cooling and energy efficiency. It operates at 350 RPM with ~50W power consumption and provides wide air delivery. Built with a dust-resistant paint finish and a reliable motor for whisper-silent operation. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Chimney ---
  {
    name: "PREETHI KH-212 KITCHEN CHIMNEY",
    category: "Chimney",
    description: "The Preethi KH-212 is a 60cm wall-mounted kitchen chimney featuring high suction power of 1100 m³/h, heavy-duty stainless steel baffle filters, and user-friendly push-button controls. It effectively removes smoke, grease, and odor, keeping your kitchen fresh and clean. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Ivas 60cm Sparia Chimney",
    category: "Chimney",
    description: "The IVAS Sparia 60cm Chimney features a sleek black glass finish and auto-clean technology for hassle-free maintenance. With a powerful 1200 m³/h suction capacity, touch-control panel, and motion sensor, it provides a smart, smoke-free cooking environment. Warranty: 5 Years on Motor.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Khaitan Orfin BREEZA TITAN 60 Cooker Hood",
    category: "Chimney",
    description: "The Khaitan Orfin Breeza Titan 60 Cooker Hood is a 60cm wall-mounted chimney with a high-speed copper-wound motor providing 1000 m³/h suction. It includes baffle filters suitable for Indian cooking styles, push-button controls, and energy-efficient LED lamps. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Exhaust Fan ---
  {
    name: "RR VENTO FRESH 150MM EXHAUST FAN",
    category: "Exhaust Fan",
    description: "The RR Vento Fresh 150mm Exhaust Fan is a lightweight plastic exhaust fan perfect for bathroom and kitchen ventilation. With a sweep of 150mm, it runs at 1350 RPM with low power consumption and features built-in backdraft shutters to prevent insects and dust from entering. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "RR VENTO FRESH 200MM EXHAUST FAN",
    category: "Exhaust Fan",
    description: "The RR Vento Fresh 200mm Exhaust Fan is a high-efficiency ventilation fan featuring a 200mm blade sweep. Operating at 1300 RPM, it ensures rapid air exchange in medium-sized kitchens and bathrooms. Constructed from high-grade ABS plastic with self-opening shutters. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "IVAS VENTILATION 200MM Exhaust Fan",
    category: "Exhaust Fan",
    description: "The IVAS Ventilation 200mm Exhaust Fan is a premium wall-mounted ventilation unit designed to expel stale air and odor efficiently. Running on a robust 35W motor at 1350 RPM, it offers high air delivery with minimal noise. Ideal for residential and commercial use. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "IVAS VENTILATION 250MM Exhaust Fan",
    category: "Exhaust Fan",
    description: "The IVAS Ventilation 250mm Exhaust Fan features a larger 250mm sweep size for superior air displacement. Driven by a powerful 40W copper motor running at 1300 RPM, it provides optimum ventilation in commercial kitchens, large bathrooms, and offices. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Room Cooler ---
  {
    name: "LIVPURE KOOLBLISS 65 LTR Room Cooler",
    category: "Room Cooler",
    description: "The Livpure Koolbliss is a heavy-duty 65-litre desert air cooler engineered for large spaces. It features high-efficiency honeycomb cooling pads, a powerful blower, multi-directional castor wheels for easy mobility, and a water level indicator. Perfect for hot, dry summer days.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "HAVELLS KOOLAIRE 51 LTR Room Cooler",
    category: "Room Cooler",
    description: "The Havells Koolaire is a 51-litre air cooler designed for optimum cooling performance. Equipped with a dust filter, honeycomb pads, and high air delivery blower, it keeps your living space cool and clean. Includes an ice chamber for boosted cooling. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "HAVELLS CELIA 55 LTR Room Cooler",
    category: "Room Cooler",
    description: "The Havells Celia is a premium 55-litre room cooler featuring a unique low-noise fan design and fully collapsible louvers to prevent dust entrance. It offers strong air delivery with high-efficiency honeycomb pads, ice chamber, and a remote control for convenience. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Bajaj DC55 DLX 55 LTR Room Cooler",
    category: "Room Cooler",
    description: "The Bajaj DC55 DLX is a 55-litre desert air cooler featuring Maxcool technology and a powerful Typhoon blower for wide-reaching cooling. It includes 3-speed controls, honeycomb pads for high water retention, and castor wheels. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: OTG ---
  {
    name: "Sunflame 28 LTR OTG",
    category: "OTG",
    description: "The Sunflame 28-litre Oven Toaster Griller is a versatile cooking companion for baking, toasting, and grilling. Powered by 1600W, it features motorized rotisserie, convection fan, 60-minute timer, and adjustable temperature control from 100°C to 250°C. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Sunflame 36 LTR OTG",
    category: "OTG",
    description: "The Sunflame 36-litre OTG offers ample capacity for baking large batches or roasting whole chickens. Features 1600W power, motorized rotisserie, convection, thermostatic temperature control, and a slide-out crumb tray for easy cleaning. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Sunflame 46 LTR OTG",
    category: "OTG",
    description: "The Sunflame 46-litre OTG is a high-capacity oven designed for avid bakers and large families. Delivering 2000W of cooking power, it features auto shut-off, stay-on function, convection heating, motorized rotisserie, and multiple accessories. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Kettle ---
  {
    name: "Kenngo 1.5 Ltr Electric Kettle",
    category: "Kettle",
    description: "The Kenngo 1.5-litre Electric Kettle is a fast-boiling appliance built with a food-grade stainless steel interior and a cool-touch exterior. Powered by a 1500W heating element, it includes auto shut-off, dry-boil protection, and a 360° swivel base. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Khaitan Orfin Kettle 1.5 Ltr KO-625",
    category: "Kettle",
    description: "The Khaitan Orfin KO-625 is a 1.5-litre electric kettle featuring a sleek stainless steel finish. With a 1500W concealed element, it boils water in minutes. Features automatic shut-off when boiling completes, boil-dry protection, and an LED indicator. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Griller ---
  {
    name: "Nouvetta Jumbo Griller",
    category: "Griller",
    description: "The Nouvetta Jumbo Griller is a powerful 2000W sandwich griller equipped with non-stick grill plates. It features a floating hinge system that adjusts automatically to any size toast, thermostatic control, and a slide-out oil drip tray. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Cookware ---
  {
    name: "Cello IB Tasla 20CM",
    category: "Cookware",
    description: "The Cello Induction Base (IB) Tasla (20cm) is made from high-grade stainless steel with an impact-bonded heavy gauge base for even heat distribution. Suitable for both induction cooktops and gas stoves. Ideal for cooking, boiling, and serving.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Cello TP PRO Casserole 22",
    category: "Cookware",
    description: "The Cello Tri-Ply (TP) PRO Casserole (22cm) is crafted with premium tri-ply stainless steel (Stainless Steel - Aluminum - Stainless Steel). It ensures rapid cooking, saves energy, and prevents food burning. Includes a well-fitting glass lid with steam vent.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Cello TP PRO Kadai 24",
    category: "Cookware",
    description: "The Cello Tri-Ply PRO Kadai (24cm) is a professional-grade frying pan ideal for deep frying, sautéing, and stir-frying. Constructed with tri-ply layers for uniform heat conduction. Comes with a stainless steel lid and sturdy riveted handles.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Cello TP PRO Sauce Pan 16",
    category: "Cookware",
    description: "The Cello Tri-Ply PRO Sauce Pan (16cm) is designed for boiling milk, making tea, soups, and sauces. The tri-ply structure offers high thermal efficiency and prevents hotspots. Features a cool-touch handle and a matching lid.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Cello TP Sauce Pan 14",
    category: "Cookware",
    description: "The Cello Tri-Ply Sauce Pan (14cm) is a compact, highly durable sauce pan suitable for daily kitchen tasks. Built with three layers of metal for quick, uniform heating. Compatible with gas and induction hobs.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Washing Machine ---
  {
    name: "LG FHP1209Z5M - 9 Kg 5 Star AI Direct Drive Steam 6 Motion DD Wi-Fi Fully-Automatic Front Load Washing Machine",
    category: "Washing Machine",
    description: "The LG FHP1209Z5M is a premium 9kg front-load washing machine featuring AI Direct Drive which detects fabric weight and softness to select the optimal wash pattern. Its Steam technology removes allergens by 99.9%, and Wi-Fi SmartThinQ enables remote operation. Energy Rating: 5 Star. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Samsung WW90DG5U24AXTL - 9 kg 5 star AI EcoBubble Super Speed Wi-Fi Hygiene Steam Inbuilt Heater Digital Inverter Fully-Automatic Front Load Washing Machine Inox",
    category: "Washing Machine",
    description: "The Samsung WW90DG5U24AXTL is a smart 9kg front loader with AI EcoBubble which turns detergent into bubbles to remove dirt at low temperatures. Features a Super Speed cycle, built-in heater, hygiene steam, and Wi-Fi SmartThings control. Finish: Inox. Warranty: 3 Years.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Samsung WA90BG4542BDTL - 9 kg 5 star Eco Bubble Technology Wi-Fi Soft Closing Door Fully-Automatic Top Load Washing Machine Versailles Gray",
    category: "Washing Machine",
    description: "The Samsung WA90BG4542BDTL is a 9kg top-load washing machine featuring Eco Bubble technology for deep cleaning, a Soft Closing glass door for safety, and Wi-Fi capability for smart control. Designed in Versailles Gray with a digital inverter motor. Energy Rating: 5 Star.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Samsung WA80BG4441BGTL - 8 kg 5 star Eco Bubble Tech Digital Inverter Motor Soft Closing Door Fully-Automatic Top Load Washing Machine Light Gray",
    category: "Washing Machine",
    description: "The Samsung WA80BG4441BGTL is an 8kg top loader featuring Eco Bubble tech and a quiet, energy-efficient Digital Inverter Motor. It comes with a soft-closing door and multiple wash cycles for delicate care. Color: Light Gray. Energy Rating: 5 Star.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Midea 7kg Semi Automatic Washing Machine",
    category: "Washing Machine",
    description: "The Midea 7kg Semi-Automatic Washing Machine features a durable plastic body, twin-tub design (wash & spin), and a powerful pulsator for thorough scrubbing. Designed for water and energy savings, with an easy-to-use control panel. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "ONIDA S7OOG1 7.0 KG Washing Machine",
    category: "Washing Machine",
    description: "The Onida S7OOG1 is a 7.0kg semi-automatic top-loading washing machine. It comes with a rust-free fiber body, a powerful 270W motor, and a high-speed spin dryer. Offers multiple wash programs for varied fabric types. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Whirlpool 8.5 kg Washing Machine",
    category: "Washing Machine",
    description: "This Whirlpool 8.5kg washing machine features a robust motor and 3D scrub technology for heavy-duty stain removal. Built with a hard water wash cycle and an auto-restart function. Ideal for large households requiring robust daily laundry operations.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Refrigerator ---
  {
    name: "Samsung RT34DG5A4DS8HL - 330 L 3 Star Convertible 5-in-1 Digital Inverter Frost Free Double Door WiFi Enabled Bespoke AI Refrigerator Elegant Inox Silver",
    category: "Refrigerator",
    description: "The Samsung RT34DG5A4DS8HL is a 330-litre Bespoke AI frost-free refrigerator. It features Twin Cooling Plus, a Digital Inverter Compressor with a 20-year warranty, Convertible 5-in-1 modes, and Wi-Fi SmartThings control with AI Energy Mode for power savings. Finish: Elegant Inox Silver.",
    imageUrl: "https://images.unsplash.com/photo-1571175432247-5c2f824c30c8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Whirlpool NEO SP278 PRM LUNAR STEEL 235 L 2 Star Frost-free inverter Double Door Refrigerator 2026 Model",
    category: "Refrigerator",
    description: "The Whirlpool Neo SP278 features a 235L capacity, 2-star rating, and frost-free inverter technology. Built with 6th Sense DeepFreeze and MicroBlock technology to prevent bacterial growth and preserve freshness up to 12 days. Finish: Lunar Steel.",
    imageUrl: "https://images.unsplash.com/photo-1571175432247-5c2f824c30c8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Khaitan Orfin 206 LITERS DIRECT COOL 1 Star Refrigerator",
    category: "Refrigerator",
    description: "The Khaitan Orfin 206L Refrigerator is a direct-cool, single-door refrigerator. Designed for budget-friendly cooling, it features toughened glass shelves, a spacious vegetable crisper, and quick ice-making capability. Energy Rating: 1 Star.",
    imageUrl: "https://images.unsplash.com/photo-1571175432247-5c2f824c30c8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Electrolux ETM3400L-S XIN 700 Series 341 Ltr 1 Star Refrigerator",
    category: "Refrigerator",
    description: "The Electrolux 700 Series refrigerator offers 341L of capacity. Built with NutriFresh Inverter technology, it maintains stable temperatures for crisp, fresh produce while operating quietly and saving power. Energy Rating: 1 Star. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1571175432247-5c2f824c30c8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: AC ---
  {
    name: "Carrier CAI18EE3R36W0 - 1.5 Ton 3 Star Wi-Fi Smart Flexicool Inverter Split AC Copper Convertible 6-in-1 Geo-Fencing ESTER EDGE White",
    category: "AC",
    description: "The Carrier Ester Edge is a 1.5 Ton, 3-Star inverter split AC. Features Flexicool 6-in-1 convertible technology, Wi-Fi smart control, geo-fencing, and a 100% copper condenser. Runs efficiently up to 52°C ambient temperature. Color: White.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Lloyd GLS18I5KWGGW - 1.5 Ton 5 Star Inverter Split AC 5 in 1 Convertible Cools at 52C Smart 4 Way Air Swing Turbo Cool Anti Corrosion Coating 100% Copper",
    category: "AC",
    description: "The Lloyd GLS18I5KWGGW is a 1.5 Ton, 5-Star split AC. It features a 5-in-1 convertible system, smart 4-way air swing, turbo cooling, and anti-corrosion golden fin coating on a 100% copper condenser. Delivers powerful cooling even at 52°C. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Iron ---
  {
    name: "Khaitan Steam Iron Merino",
    category: "Iron",
    description: "The Khaitan Merino is a lightweight steam iron designed for crisp crease removal. It features a non-stick coated soleplate, adjustable thermostat control for different fabrics, and a self-cleaning function. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Khaitan Kreaze Steam Iron 2200W",
    category: "Iron",
    description: "The Khaitan Kreaze is a heavy-duty 2200W steam iron featuring a premium scratch-resistant ceramic soleplate, continuous steam output, vertical steaming capability, and anti-calc features to prevent scale buildup. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Mixer Grinder ---
  {
    name: "Khaitan MG SONET 3 Jar KA221 Mixer Grinder",
    category: "Mixer Grinder",
    description: "The Khaitan MG Sonet KA221 features a robust 500W motor with 100% copper winding. It includes 3 stainless steel jars (dry/wet grinding, blending, chutney), sharp steel blades, and overload protection for motor safety. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Personal Care ---
  {
    name: "Syska Hair Dryer HD-1200",
    category: "Personal Care",
    description: "The Syska HD-1200 is a compact, foldable 1200W hair dryer. It features 2 speed/heat settings for gentle drying, an over-heating protection system, and a narrow concentrator nozzle for focused airflow. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Syska Hair Straightener HS-6810-PRO",
    category: "Personal Care",
    description: "The Syska HS-6810-PRO Hair Straightener features ceramic-coated plates for smooth gliding and hair protection. Built with a rapid 60-second heat-up system, lock function for easy storage, and a 360° swivel cord. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Syska Hair Crimper HCM100",
    category: "Personal Care",
    description: "The Syska HCM100 features wide ceramic crimping plates for adding textured volume to your hair. It has a fast heat-up system, LED indicator, and heat-resistant plates for safe and stylish crimping. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Pressure Cooker ---
  {
    name: "Khaitan White Chef Cooker 3 Ltr Pressure Cooker",
    category: "Pressure Cooker",
    description: "The Khaitan White Chef is a 3-litre outer lid pressure cooker made from virgin aluminum. It features a heavy-gauge base, a metallic safety valve, and food-grade rubber gaskets for safe and quick daily cooking. Warranty: 5 Years.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Khaitan Magic Cook 5 Ltr Pressure Cooker",
    category: "Pressure Cooker",
    description: "The Khaitan Magic Cook is a 5-litre inner lid pressure cooker built for larger families. Constructed from premium-grade aluminum with ergonomic heat-resistant handles and a reliable spring-loaded safety valve. Warranty: 5 Years.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Sandwich Maker ---
  {
    name: "BPL Sandwich Maker",
    category: "Sandwich Maker",
    description: "The BPL Sandwich Maker features non-stick grill plates that can toast two sandwiches simultaneously. It includes power and ready indicators, a cool-touch handle, and a lid lock for compact storage. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Pillow ---
  {
    name: "Livpure Super Soft Pillow",
    category: "Pillow",
    description: "The Livpure Super Soft Pillow is stuffed with premium-grade microfibers to offer ergonomic neck support and pressure relief. It features a breathable cotton cover, hypoallergenic material, and retains shape after long use.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Bottle ---
  {
    name: "Import 1 Ltr Hot and Cold Bottle",
    category: "Bottle",
    description: "A premium 1-litre double-wall vacuum-insulated stainless steel bottle. Keeps drinks hot for up to 12 hours or ice-cold for up to 24 hours. Made from food-grade 304 stainless steel with a leak-proof cap.",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Microwave ---
  {
    name: "Samsung MC28A5145VR Convection Microwave Oven",
    category: "Microwave",
    description: "The Samsung MC28A5145VR is a 28-litre Slim Fry™ convection microwave oven designed for Indian households. It features a ceramic enamel cavity and 134 auto-cook menus. Sensor Cook technology auto-detects humidity to adjust cooking time. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "IFB 30BRC2 Convection Microwave Oven",
    category: "Microwave",
    description: "The IFB 30BRC2 is a 30-litre convection microwave oven featuring 101 standard cook menus, a 360-degree rotisserie, and steam clean mode. Includes a weight defrost system, preheat function, and child lock for safety. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Vacuum Cleaner ---
  {
    name: "Midea 11S 1400W Vacuum Cleaner",
    category: "Vacuum Cleaner",
    description: "The Midea 11S (VCB32A11S) is a compact 1400W bagged canister vacuum cleaner. It features automatic cord rewind, dust bag indicators, and a lightweight body. Comes with a 2-in-1 crevice/brush nozzle for versatile surface cleaning. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Prestige Typhoon-04 Dry Vacuum Cleaner",
    category: "Vacuum Cleaner",
    description: "The Prestige Typhoon-04 is a powerful 1600W dry vacuum cleaner with a HEPA filter. Features an adjustable suction-speed controller, automatic cord winder, and a dust-full indicator. Perfect for deep cleaning rugs, couches, and floors. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Light ---
  {
    name: "Syska Emergency Bulb EMB 0901",
    category: "Light",
    description: "The Syska EMB 0901 is a 9W rechargeable LED emergency bulb. It functions as a normal bulb under power supply and automatically switches to battery backup during power outages, providing up to 4 hours of light. B22 Base. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Syska 20W LED Bulb",
    category: "Light",
    description: "The Syska 20W LED Bulb (B22 base) delivers 2000 lumens of cool daylight. Built with high-grade polycarbonate, it offers up to 90% energy savings over incandescent bulbs and has a rated lifetime of 15,000 hours.",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Syska 22W 3in1 Tubelight",
    category: "Light",
    description: "The Syska 22W 3-in-1 LED Tube Light allows you to switch between warm white, neutral white, and cool daylight using a standard wall switch. Driven by high thermal efficiency LEDs for a long lifespan. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Syska Night Bulb NLP 0.5W",
    category: "Light",
    description: "The Syska 0.5W LED Night Bulb is perfect for bedrooms and hallways. Consuming negligible power, it provides a soft, warm glow that is comfortable for sleeping environments. B22 base plug-and-play.",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Syska PAG 0.5W Bulb",
    category: "Light",
    description: "The Syska PAG 0.5W is a decorative 'zero-watt' LED replacement bulb. Ideal for accent lighting, temples, and night lamps. Available in multiple color options with B22 base configuration.",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Ecolink Table Lamp",
    category: "Light",
    description: "The Ecolink LED Table Lamp is a rechargeable study lamp featuring a built-in 1500mAh lithium-ion battery. It provides up to 6 hours of glare-free study light with adjustable brightness and touch control. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a35b14e12?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Wall Fan ---
  {
    name: "Orient Wall Fan",
    category: "Wall Fan",
    description: "Orient high-speed wall fan offers wide-area cooling with aerodynamically designed blades. It features a 3-speed control system with pull cords, 90-degree oscillation, and thermal overload protection for safety. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Water Dispenser ---
  {
    name: "Voltas Water Dispenser",
    category: "Water Dispenser",
    description: "The Voltas Water Dispenser provides instant hot, cold, and normal water. Featuring food-grade stainless steel tanks, a child lock on the hot water tap, and a high-efficiency compressor cooling system. Warranty: 1 Year.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Table Fan ---
  {
    name: "Bajaj PT01 Table Fan",
    category: "Table Fan",
    description: "The Bajaj Ultima PT01 is a 200mm personal table fan delivering 2300 RPM. Designed with aerodynamically balanced PP blades for low-noise air delivery. Features speed control and a tilting adjustable head. Warranty: 2 Years.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Dinner Set ---
  {
    name: "Borosil Dinner Set",
    category: "Dinner Set",
    description: "The Borosil Larah Dinner Set is made from toughened opalware glass. It is 100% bone-ash free, chip-resistant, scratch-resistant, microwave safe, and dishwasher safe. A beautiful and hygienic dining choice.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Boss 47 Pcs Dinner Set",
    category: "Dinner Set",
    description: "The Boss 47-Piece Dinner Set is a complete opalware glass dinnerware set serving up to 8 people. It includes plates, bowls, and serving dishes that are chip-resistant, microwave-safe, and dishwasher-friendly.",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },

  // --- Category: Water Bottle ---
  {
    name: "Pinnacle Water Bottle",
    category: "Water Bottle",
    description: "Pinnacle double-wall vacuum-insulated stainless steel flask. Built with premium SS 304 food-grade material, it keeps beverages cold for 24 hours or hot for 12 hours. Leak-proof and BPA-free.",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  },
  {
    name: "Kitility Water Bottle",
    category: "Water Bottle",
    description: "The Kitility 1000ml stainless steel vacuum flask features double-wall insulation to maintain temperature. Comes with a silver finish, leak-proof screw cap, and is highly durable for gym, office, or outdoor travel.",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    price: 0,
    stock: 1
  }
];

async function main() {
  console.log("Seeding database...");
  
  // Clear existing products
  await prisma.product.deleteMany({});
  console.log("Cleared existing products.");

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  console.log(`Seeding completed. Seeded ${products.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
