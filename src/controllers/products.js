exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: 'Create Product Succes',
            data: {
                id: 1,
                name: 'Espresso',
                price: 10000
            }
        }
    );
    next();
}

exports.getAllProduct = (req, res, next) => {
    res.json (
        {
            message: 'Get All Product Succes',
            data: [
                {
                    id: 1,
                    name: 'Espresso',
                    price: 10000
                }
            ]
        }
    );
    next();
}