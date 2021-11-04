export class Cart {
  constructor(
    id,
    name,
    brand,
    description,
    image,
    price,
    category,
    attributes
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.image = image;
    this.attributes = attributes;
    this.category = category;

    this.description = description;
  }
}
