const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function main() {
  const cat = await db.category.upsert({
    where: { slug: 'tshirts' },
    update: {},
    create: { slug: 'tshirts', name: 'T-Shirts' },
  })

  const prod = await db.product.upsert({
    where: { slug: 'basic-tee' },
    update: {},
    create: {
      slug: 'basic-tee',
      name: 'Basic Tee',
      description: 'Soft cotton tee',
      category: { connect: { id: cat.id } },
    },
  })

  const variant = await db.productVariant.create({
    data: {
      productId: prod.id,
      name: 'Black / M',
      attributes: { color: 'black', size: 'M' },
    },
  })

  const price = await db.price.create({
    data: { currency: 'INR', amountMinor: 49900 },
  })

  await db.sKU.create({
    data: {
      variantId: variant.id,
      code: 'BT-BLK-M',
      stock: 25,
      priceId: price.id,
    },
  })

  console.log('Seeded:', { product: prod.slug })
}

main().finally(() => db.$disconnect())
