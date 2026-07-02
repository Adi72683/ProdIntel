import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateTopFeatures(products, category) {
  try {
    const prompt = `Analyze these ${category} products.

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
export async function generateBattleRoyaleChallengers(
  selectedProduct,
  products
) {
  try {

    const simplifiedProducts = products.map(product => ({
      id: product.id,
      title: product.title,
      brand: product.brand,
      category: product.category,
      price: product.price,
      rating: product.rating,
      reviews: product.reviews,
      highlights: product.highlights,
      specifications: product.specifications,
    }));

    const prompt = `
You are an AI Product Intelligence Expert.

Your job is to recommend THREE challengers for the selected product.

Selected Product:

${JSON.stringify(selectedProduct, null, 2)}

Available Products:

${JSON.stringify(simplifiedProducts, null, 2)}

IMPORTANT RULES

1. Recommend ONLY products from the Available Products list.

2. Return EXACTLY three challengers.

3. Challenger Types

Ultimate Rival
- Similar flagship product
- Better in one or two important features

Closest Rival
- Similar overall experience
- Better suited for another type of user

Value Pick
- Nearly the same experience
- Noticeably lower price

Return ONLY valid JSON.

Each challenger MUST contain:

- id
- reason

IMPORTANT:
"reason" MUST be an array of exactly 4 concise bullet points.
Each point should be one sentence only.

Example:

{
  "ultimateRival": {
    "id": 0,
    "reason": [
      "",
      "",
      "",
      ""
    ]
  },
  "closestRival": {
    "id": 0,
    "reason": [
      "",
      "",
      "",
      ""
    ]
  },
  "valuePick": {
    "id": 0,
    "reason": [
      "",
      "",
      "",
      ""
    ]
  }
}
`;

    console.log("Generating Battle Royale Challengers...");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");
    text = text.trim();

    console.log("Gemini Challenger Response:", text);

    return JSON.parse(text);

  } catch (error) {

    console.error("Gemini Challenger Error:", error);

    return {
    
      ultimateRival: {
        id: products[1]?.id ?? products[0]?.id,
        reason: [
        "Competes directly with the selected product.",
        "Offers premium flagship performance.",
        "Excels in one or more important features.",
        "Ideal for users seeking top-tier specifications."
        ]
      },

      closestRival: {
      id: products[2]?.id ?? products[0]?.id,
      reason: [
        "Provides a similar overall experience.",
        "Better suited for a different type of user.",
        "Comparable ratings and specifications.",
        "Strong alternative in the same category."]
},

      valuePick: {
      id: products[3]?.id ?? products[0]?.id,
      reason: [
          "Costs noticeably less.",
          "Retains most premium features.",
          "Excellent value for money.",
          "Great option for budget-conscious buyers."]
}

    };

  }

}
export async function generateBattleRoyale(
  selectedProduct,
  challenger
) {
  try {
    const prompt = `
You are an unbiased Product Intelligence Expert.

Compare these two products.

Selected Product:

${JSON.stringify(selectedProduct, null, 2)}

Challenger:

${JSON.stringify(challenger, null, 2)}

Your job is to create a 5-round Battle Royale.

Rules:

1. Choose the FIVE most important comparison categories.
2. Categories should depend on the products.
3. Use information from specifications, highlights, ratings, reviews, titles and descriptions.
4. Infer missing details intelligently.
5. Choose ONE winner for every round.
6. Winner must be either:
   "selected"
   OR
   "challenger"

Return ONLY valid JSON.

IMPORTANT RULES

1. The "reason" field MUST be a JSON array.
2. Do NOT return "reason" as a string or paragraph.
3. The array MUST contain EXACTLY 3 bullet points.
4. Each bullet point MUST be one short sentence (maximum 15 words).
5. Do NOT use numbering (1., 2., 3.) or "-" inside the strings.
6. The "summary" MUST remain a single paragraph.

Expected JSON format:

{
  "rounds": [
    {
      "title": "Performance",
      "winner": "selected",
      "reason": [
        "Faster processor for demanding tasks.",
        "Higher benchmark performance.",
        "Smoother multitasking experience."
      ]
    },
    {
      "title": "Battery Life",
      "winner": "challenger",
      "reason": [
        "Larger battery capacity.",
        "Longer screen-on time.",
        "More efficient power management."
      ]
    }
  ],
  "summary": "Provide a concise paragraph summarizing why the overall winner was selected."
}
`;

    console.log("Generating Battle Royale...");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");
    text = text.trim();

    console.log("Battle Royale Response:", text);

    return JSON.parse(text);

  } catch (error) {

    console.error("Battle Royale Error:", error);

    return {

      rounds: [

    {
      title: "Performance",
      winner:
        selectedProduct.rating >= challenger.rating
          ? "selected"
          : "challenger",
      reason: [
        "Delivers faster overall performance.",
        "Handles demanding tasks more efficiently.",
        "Provides a smoother everyday experience."
      ]
    },

    {
      title: "Display",
      winner: "selected",
      reason: [
        "Offers sharper visuals and vibrant colors.",
        "Provides a more immersive viewing experience.",
        "Improves readability in everyday use."
      ]
    },

    {
      title: "Battery Life",
      winner: "challenger",
      reason: [
        "Lasts longer on a single charge.",
        "Consumes power more efficiently.",
        "Better suited for extended daily usage."
      ]
    },

    {
      title: "Camera",
      winner: "selected",
      reason: [
        "Captures sharper and more detailed photos.",
        "Produces better images in different lighting conditions.",
        "Delivers a stronger overall camera experience."
      ]
    },

    {
      title: "Value for Money",
      winner:
        selectedProduct.price <= challenger.price
          ? "selected"
          : "challenger",
      reason: [
        "Offers an excellent balance of price and features.",
        "Provides better overall value for most buyers.",
        "Delivers premium capabilities at a competitive cost."
      ]
    }

  ],

 summary:
    selectedProduct.rating >= challenger.rating
      ? `${selectedProduct.title} wins the Battle Royale by offering a stronger overall flagship experience while maintaining excellent value. It consistently performed better across the most important comparison categories, making it the recommended choice for users seeking the best overall package.`
      : `${challenger.title} wins the Battle Royale thanks to its balanced performance, competitive features, and excellent overall user experience. It proved to be the stronger choice across key comparison categories, making it the recommended product for most users.`
    };

  }
}
export async function enrichProducts(products) {

    try {

        const prompt = `
You are a Product Intelligence Expert.

For every product below, generate:

1. Short Description
2. Five Highlights
3. Specifications

Return ONLY JSON.

Example:

[
  {
    "id":1,
    "description":"...",
    "highlights":[...],
    "specifications":{
      ...
    }
  }
]

Products:

${JSON.stringify(products)}

`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        let text = response.text;

        text = text.replace(/```json/g, "");
        text = text.replace(/```/g, "");

        return JSON.parse(text);

    } catch (e) {

        console.log(e);

        return [];

    }

}