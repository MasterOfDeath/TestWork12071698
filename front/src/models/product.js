class Product {
    id = null
    name = null
    description = null
    created_at = null
    updated_at = null

    constructor(data = {}) {
        this.id = parseInt(data['id'])
        this.name = data['name']
        this.description = data['description']

        if (data['created_at']) {
            this.created_at = new Date(Date.parse(data['created_at']))
        }

        if (data['updated_at']) {
            this.updated_at = new Date(Date.parse(data['updated_at']))
        }
    }
}

export default Product
