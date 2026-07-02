import axios from "axios";

export async function searchProducts(query) {

  try {

    const response = await axios.get(

      "http://localhost:5000/api/products",

      {
        params: {
          query,
        },
      }

    );

    console.log("SERP Products:", response.data);

    return response.data;

  } catch (error) {

    console.error("Backend Error:", error);

    return null;

  }

}