const smartphones = [
  {
    "id": 1,
    "title": "Apple iPhone 16 Pro",
    "brand": "Apple",
    "category": "Smartphone",
    "price": 129999,
    "rating": 4.9,
    "reviews": 3850,
    "highlights": [
      "48MP Pro Camera",
      "Super Retina XDR Display",
      "A18 Pro Chip",
      "Premium Titanium Design",
      "Wireless Charging"
    ],
    "specifications": {
      "Camera": "48MP + 48MP + 12MP",
      "Battery": "3582mAh",
      "Display": "6.3-inch OLED 120Hz",
      "Processor": "Apple A18 Pro",
      "Charging": "27W Wired + MagSafe"
    }
  },
  {
    "id": 2,
    "title": "Samsung Galaxy S25 Ultra",
    "brand": "Samsung",
    "category": "Smartphone",
    "price": 124999,
    "rating": 4.9,
    "reviews": 4120,
    "highlights": [
      "200MP Camera",
      "AMOLED 2X Display",
      "Snapdragon 8 Elite",
      "5000mAh Battery",
      "45W Fast Charging"
    ],
    "specifications": {
      "Camera": "200MP + 50MP + 50MP + 10MP",
      "Battery": "5000mAh",
      "Display": "6.9-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8 Elite",
      "Charging": "45W Wired"
    }
  },
  {
    "id": 3,
    "title": "Google Pixel 10a",
    "brand": "Google",
    "category": "Smartphone",
    "price": 32999,
    "rating": 4.7,
    "reviews": 1950,
    "highlights": [
      "AI Camera",
      "Tensor G5 Processor",
      "OLED Display",
      "5100mAh Battery",
      "30W Fast Charging"
    ],
    "specifications": {
      "Camera": "50MP + 13MP",
      "Battery": "5100mAh",
      "Display": "6.3-inch OLED 120Hz",
      "Processor": "Tensor G5",
      "Charging": "30W Wired"
    }
  },
  {
    "id": 4,
    "title": "OnePlus 13",
    "brand": "OnePlus",
    "category": "Smartphone",
    "price": 69999,
    "rating": 4.8,
    "reviews": 2840,
    "highlights": [
      "6000mAh Battery",
      "100W SUPERVOOC Charging",
      "Snapdragon 8 Elite",
      "120Hz AMOLED Display",
      "Hasselblad Camera"
    ],
    "specifications": {
      "Camera": "50MP + 50MP + 50MP",
      "Battery": "6000mAh",
      "Display": "6.82-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8 Elite",
      "Charging": "100W Wired"
    }
  },
  {
    "id": 5,
    "title": "Xiaomi 15 Ultra",
    "brand": "Xiaomi",
    "category": "Smartphone",
    "price": 89999,
    "rating": 4.8,
    "reviews": 2130,
    "highlights": [
      "Leica Camera",
      "Snapdragon 8 Elite",
      "AMOLED Display",
      "5410mAh Battery",
      "90W Fast Charging"
    ],
    "specifications": {
      "Camera": "50MP + 50MP + 200MP + 50MP",
      "Battery": "5410mAh",
      "Display": "6.73-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8 Elite",
      "Charging": "90W Wired"
    }
  },
  {
    "id": 6,
    "title": "Nothing Phone (3)",
    "brand": "Nothing",
    "category": "Smartphone",
    "price": 52999,
    "rating": 4.6,
    "reviews": 1680,
    "highlights": [
      "Glyph Interface",
      "AMOLED Display",
      "Snapdragon Processor",
      "5150mAh Battery",
      "50W Fast Charging"
    ],
    "specifications": {
      "Camera": "50MP + 50MP",
      "Battery": "5150mAh",
      "Display": "6.77-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8s Gen 4",
      "Charging": "50W Wired"
    }
  },
  {
    "id": 7,
    "title": "Motorola Edge 60 Ultra",
    "brand": "Motorola",
    "category": "Smartphone",
    "price": 47999,
    "rating": 4.5,
    "reviews": 1450,
    "highlights": [
      "6000mAh Battery",
      "125W Turbo Charging",
      "Curved OLED Display",
      "AI Camera",
      "Water Resistant"
    ],
    "specifications": {
      "Camera": "50MP + 50MP + 10MP",
      "Battery": "6000mAh",
      "Display": "6.7-inch OLED 144Hz",
      "Processor": "Dimensity 9400",
      "Charging": "125W Wired"
    }
  },
  {
    "id": 8,
    "title": "Vivo X300 Pro",
    "brand": "Vivo",
    "category": "Smartphone",
    "price": 79999,
    "rating": 4.8,
    "reviews": 1840,
    "highlights": [
      "ZEISS Camera",
      "AMOLED Display",
      "5500mAh Battery",
      "Dimensity 9500",
      "90W Flash Charging"
    ],
    "specifications": {
      "Camera": "50MP + 200MP + 50MP",
      "Battery": "5500mAh",
      "Display": "6.8-inch AMOLED 120Hz",
      "Processor": "Dimensity 9500",
      "Charging": "90W Wired"
    }
  },
  {
    "id": 9,
    "title": "OPPO Find X9 Pro",
    "brand": "OPPO",
    "category": "Smartphone",
    "price": 84999,
    "rating": 4.7,
    "reviews": 1760,
    "highlights": [
      "100W SUPERVOOC",
      "Periscope Camera",
      "AMOLED Display",
      "Snapdragon 8 Elite",
      "5600mAh Battery"
    ],
    "specifications": {
      "Camera": "50MP + 50MP + 50MP",
      "Battery": "5600mAh",
      "Display": "6.82-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8 Elite",
      "Charging": "100W Wired"
    }
  },
  {
    "id": 10,
    "title": "Realme GT 8 Pro",
    "brand": "Realme",
    "category": "Smartphone",
    "price": 58999,
    "rating": 4.6,
    "reviews": 1530,
    "highlights": [
      "6500mAh Battery",
      "120W Ultra Charging",
      "Snapdragon 8 Elite",
      "144Hz AMOLED Display",
      "50MP Sony Camera"
    ],
    "specifications": {
      "Camera": "50MP + 50MP",
      "Battery": "6500mAh",
      "Display": "6.78-inch AMOLED 144Hz",
      "Processor": "Snapdragon 8 Elite",
      "Charging": "120W Wired"
    }
  }
]

export default smartphones;