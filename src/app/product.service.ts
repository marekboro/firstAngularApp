export class ProductService {
    getProducts() {
        // return ['Learning Angst-ular', 'Become a Typescript', 'ASP.NET', 'WHY -Hello World- ALL THE TIME!!!?']; //! OLD
        return [
            {
            imageUrl: "http://loremflickr.com/150/150?random=1",
            productName: "product 1",
            releaseDate: `Date of release for product 1 `,
            description: `A description for product 1`,
            rating: 4,
            numOfReviews: 2 
            },
            {
            imageUrl: "http://loremflickr.com/150/150?random=2",
            productName: "product 2",
            releaseDate: "Date of release for product 2",
            description: `A description for product 2`,
            rating: 2,
            numOfReviews: 12 
            },
            {
            imageUrl: "http://loremflickr.com/150/150?random=3",
            productName: "product 3",
            releaseDate: "Date of release for product 3",
            description: `A description for product 3`,
            rating: 5,
            numOfReviews: 2 
            },
        ]

    }

}