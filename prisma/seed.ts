import { PrismaClient } from "@prisma/client";

export async function seed() {
  const prisma = new PrismaClient();

  try {
    const categoryResult = await prisma.category.createMany({
      data: [
        {
          key: "food",
          name: "Food"
        },
        {
          key: "beverages",
          name: "Beverages",
          parentCategoryKey: "food"
        },
        {
          key: "coffee",
          name: "Coffee",
          parentCategoryKey: "beverages"
        },
        {
          key: "accessories",
          name: "Accessories"
        },
        {
          key: "phone-accessories",
          name: "Phone accessories"
        },
        {
          key: "wearables",
          name: "Wearables"
        },
        {
          key: "bags",
          name: "Bags",
          parentCategoryKey: "wearables"
        },
        {
          key: "shoes",
          name: "Shoes",
          parentCategoryKey: "wearables"
        },
        {
          key: "shirts",
          name: "Shirts",
          parentCategoryKey: "wearables"
        },
        {
          key: "pants",
          name: "Pants",
          parentCategoryKey: "wearables"
        },
      ]
    })
    console.log(categoryResult.count, ' categories created')

    const productResult = await prisma.product.createMany({
      data: [
        {
          name: "Ismae iPhone Case",
          price: 3800,
          categoryKey: "phone-accessories",
          stock: 54
        },
        {
          name: "Ismae Grocery Bag",
          price: 1400,
          categoryKey: "accessories",
          stock: 40
        },
        {
          name: "Ismae Tumbler Mug",
          price: 1800,
          categoryKey: "accessories",
          stock: 0
        },
        {
          name: "Ismae Ceramic Mug",
          price: 1000,
          salePrice: 800,
          categoryKey: "accessories",
          stock: 12
        }
      ]
    })
    console.log(productResult.count, ' products created')

    const customerResult = await prisma.customer.create({
      data: {
        fullName: "Spiros Martzoukos",
        email: "martzoukos@prisma.io",
        address: {
          create: {
            addressLine1: "KO 9",
            zipCode: "12345",
            city: "Athens",
            country: "Greece"
          }
        }
      }
    })
    console.log("Customer and address created.", customerResult)
  } catch (error) {
    console.error('Error', error)
  }
}

seed()