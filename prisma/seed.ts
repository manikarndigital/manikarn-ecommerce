import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  // Category
  const category = await db.category.upsert({
    where: { slug: "tshirts" },
    update: {},
    create: { slug: "tshirts", name: "T-Shirts" },
  });

  // Product
  const product = await db.product.upsert({
    where: { slug: "basic-tee" },
    update: {},
    create: {
      slug: "basic-tee",
      name: "Basic Tee",
      description: "Soft cotton tee",
      category: { connect: { id: category.id } },
    },
  });

  // Variant
  const variant = await db.productVariant.create({
    data: {
      productId: product.id,
      name: "Black / M",
      attributes: { color: "black", size: "M" },
    },
  });

  // Price
  const price = await db.price.create({
    data: { currency: "INR", amountMinor: 49900 },
  });

  // SKU
  await db.sKU.upsert({
    where: { code: "BT-BLK-M" },
    update: {}, // agar already exist hai to kuch update nahi karega
    create: {
      variantId: variant.id,
      code: "BT-BLK-M",
      stock: 25,
      priceId: price.id,
    },
  });

  console.log("✅ Seeded product:", product.slug);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
