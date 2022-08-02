import offer1 from "../images/offer1.png";
import offer6 from "../images/offer6.png";


export async function getSpeciallOffers() {
    const offers = [
        {
            "id" : 1,
            "name": "Composé spécial",
            "price": "20 $",
            "image": offer1
        },
        {
            "id" : 2,
            "name": "French tacos",
            "price": "50 $",
            "image": offer6
        },
        {
            "id" : 3,
            "name": "Poulet grillé",
            "price": "10 $",
            "image": offer1
        },
        {
            "id" : 4,
            "name": "French tacos",
            "price": "5 $",
            "image": offer6
        },
        {
            "id" : 5,
            "name": "Burger master",
            "price": "30 $",
            "image": offer1
        },
        {
            "id" : 6,
            "name": "Pizza continentale",
            "price": "20 $",
            "image": offer6
        }
    ]

    return offers
} 