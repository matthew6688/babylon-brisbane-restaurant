export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuSection {
  title: string;
  note: string;
  items: MenuItem[];
}

export interface RestaurantData {
  key: string;
  name: string;
  cuisine: string;
  menuSourceLabel: string;
  menuSourceUrl: string;
  bookingUrl: string;
  hours: string[];
  heroImage: string;
  sections: MenuSection[];
}

export const restaurantData: RestaurantData = {
  "key": "babylon",
  "name": "Babylon Brisbane",
  "cuisine": "Levantine-inspired food cooked over open fire and hot charcoal",
  "menuSourceLabel": "Official Babylon restaurant menu PDF",
  "menuSourceUrl": "https://babylonbrisbane.com.au/wp-content/uploads/2026/01/BABB_0625_Restaurant-Menu-1.pdf",
  "bookingUrl": "https://www.sevenrooms.com",
  "hours": [
    "Sunday-Thursday 11:30am-9:00pm",
    "Friday-Saturday 11:30am-10:00pm"
  ],
  "heroImage": "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=1400&q=85",
  "sections": [
    {
      "title": "Meze",
      "note": "Generous, vibrant plates designed to share.",
      "items": [
        {
          "name": "House Made Bread",
          "description": "Za'atar spiced butter",
          "price": "$12"
        },
        {
          "name": "Hummus",
          "description": "Macadamia dukkah, olive oil, leblebi",
          "price": "$16"
        },
        {
          "name": "Taramasalata",
          "description": "Olive oil, dill, salmon roe",
          "price": "$16"
        },
        {
          "name": "Pan Fried Halloumi",
          "description": "Locally sourced honey, fig jam, wild herb flowers, persimmon",
          "price": "$28"
        }
      ]
    },
    {
      "title": "From Fire",
      "note": "Wood-fired seafood, chicken and lamb.",
      "items": [
        {
          "name": "Wood Fired Octopus",
          "description": "Sujuk, chickpea puree, sesame, chermoula yoghurt, paprika oil, dill",
          "price": "$42"
        },
        {
          "name": "Prawns",
          "description": "Sujuk, yellow split pea, bisque, lemon, chilli butter, dill",
          "price": "$48"
        },
        {
          "name": "Shish Tawook",
          "description": "Wood fired chicken skewers, kisir, tomato, garlic yoghurt",
          "price": "$40"
        },
        {
          "name": "Slow Cooked Lamb",
          "description": "Garlic labneh, carrots, black garlic, hot honey",
          "price": "$58"
        }
      ]
    },
    {
      "title": "Taste Menus",
      "note": "Set-menu pathways for groups and celebrations.",
      "items": [
        {
          "name": "Meze Taste",
          "description": "Minimum two guests",
          "price": "$89pp"
        },
        {
          "name": "Premium Taste",
          "description": "Includes scallop, swordfish, shish tawook and slow cooked lamb",
          "price": "$99pp"
        },
        {
          "name": "Deluxe Taste",
          "description": "A larger shared progression with seafood, beef and dessert",
          "price": "$109pp"
        }
      ]
    }
  ]
};
