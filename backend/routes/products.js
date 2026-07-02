import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const query = req.query.query;

    if (!query) {

      return res.status(400).json({
        message: "Search query is required."
      });

    }

    console.log(`Searching for ${query}`);

    const response = await axios.get( "https://serpapi.com/search.json",
      {

        params: {

          engine: "google_shopping",

          q: query,

          api_key: process.env.SERP_API_KEY,

        },

      }

    );

    console.log(JSON.stringify(response.data.shopping_results[0], null, 2));
    res.json(response.data.shopping_results || []);
  }

  catch (error) {

    console.error(error.response?.data || error.message);

    res.status(500).json({message: "Unable to fetch products from SERP API."});
  }
});

export default router;