import { getProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/date-picker";
import { protocol, rootDomain } from "@/lib/utils";

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    product: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: productSlug } = await params;
  const products = getProducts();
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `${protocol}://${rootDomain}/p/${productSlug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: productSlug } = await params;
  const products = getProducts();
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg font-medium">
                Product Image
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {product.description}
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  ${product.price}
                </p>
              </div>

              {/* Delivery Date */}
              <DatePicker />

              {/* Gift Message */}
              <div className="space-y-2">
                <Label htmlFor="gift-message" className="text-lg font-medium">
                  Gift Message (Optional)
                </Label>
                <Textarea
                  id="gift-message"
                  placeholder="Enter a special message for your gift..."
                  className="w-full min-h-24"
                />
              </div>

              {/* Add to Cart Button */}
              <Button className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
