import { PrismaClient } from '@prisma/client';
import { Product } from '@prisma/client'

class ProductDAO {
  private _prisma: PrismaClient

  constructor(prisma: PrismaClient) {
  }

  public async getProductsList(): Promise<Product[]> {
    return await this._prisma.product.findMany({
      where: {
        salePrice: {
          equals: 0
        }
      }
    })
  }

  
}