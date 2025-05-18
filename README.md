# OpenFoodDataset
This is our own api interface for the data provided by [Open Food Facts](https://github.com/openfoodfacts), an open, collaborative, and free dataset for food products.

### Motivation 
The OpenFoodFacts website and API are quite slow to use and would not work for our intended purposes. Additionally, we did not want to further stress the network nor compete with their open source product (which is totally awesome), which is why we host our own mirror of the API with our own functionality implemented.

### Accessing the API
We do not have any restrictions or requirements for accessing the API.

### Rules for the API
There is no reason to scrape the API for the product data since it is both available from Open Food Facts as well as us in our own format [(OFDJson)](docs/OFDJSON.md). There is a rate limit of 50 requests per minute. If that is not fast enough, setup your own [mirror](docs/MIRRORING.md) and change the rate in ``src/index.ts``. See [mirror](docs/MIRRORING.md) for more details.

### API Methods
All methods can be found under the ``/spec`` url, which is powered by [``@elysiajs/swagger``](https://elysiajs.com/plugins/swagger.html).

### Credits
Thank you to [Open Food Facts](https://github.com/openfoodfacts) for the comprehensive data and ease of downloading such information.