import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateTopFeatures(products, category) {
  try {
    const prompt = `
Analyze these ${category} products.

From their highlights and specifications, identify the 5 BROAD feature categories that customers care about.

Convert specific specifications into general feature names.

Examples:

50MP Camera → Camera
5500mAh Battery → Battery Life
120Hz OLED Display → Display
Flagship Processor → Performance
Fast Charging → Charging

DO NOT return exact specifications.

BAD OUTPUT:

{
  "features": [
    "50MP Camera",
    "5500mAh Battery",
    "120Hz OLED Display"
  ]
}

GOOD OUTPUT:

{
  "features": [
    "Camera",
    "Battery Life",
    "Display",
    "Performance",
    "Charging"
  ]
}

Return ONLY valid JSON in this format:

{
  "features": []
}

Products:

${JSON.stringify(products)}
`;
console.log("Gemini API called");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");
    text = text.trim();

    console.log("Gemini response:", text);

    return text;

  } catch (error) {

    console.error("Gemini Error:", error);

    const fallbackFeatures = {

      smartphone: [
        "Camera",
        "Battery Life",
        "Display",
        "Performance",
        "Charging"
      ],

      smartphones: [
        "Camera",
        "Battery Life",
        "Display",
        "Performance",
        "Charging"
      ],

      laptop: [
        "Performance",
        "Battery Life",
        "Display",
        "Build Quality",
        "Portability"
      ],

      laptops: [
        "Performance",
        "Battery Life",
        "Display",
        "Build Quality",
        "Portability"
      ],

      headphone: [
        "Sound Quality",
        "Noise Cancellation",
        "Comfort",
        "Battery Life",
        "Connectivity"
      ],

      headphones: [
        "Sound Quality",
        "Noise Cancellation",
        "Comfort",
        "Battery Life",
        "Connectivity"
      ],

      tablet: [
        "Display",
        "Battery Life",
        "Performance",
        "Stylus Support",
        "Portability"
      ],

      tablets: [
        "Display",
        "Battery Life",
        "Performance",
        "Stylus Support",
        "Portability"
      ],

      smartwatch: [
        "Health Tracking",
        "Battery Life",
        "Fitness Features",
        "Display",
        "Connectivity"
      ],

      smartwatches: [
        "Health Tracking",
        "Battery Life",
        "Fitness Features",
        "Display",
        "Connectivity"
      ]

    };

    return JSON.stringify({
      features:
        fallbackFeatures[category] || [
          "Performance",
          "Battery Life",
          "Design",
          "Features",
          "Value for Money"
        ]
    });
  }
}