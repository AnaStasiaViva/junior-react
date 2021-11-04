export class Product {
  constructor(
    id,
    name,
    brand,
    image,
    description,
    price,
    category,
    attributes
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.image = image;

    this.description = description;
    this.attributes = attributes;
    this.category = category;
  }
}
