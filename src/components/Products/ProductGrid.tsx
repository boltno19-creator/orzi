import { products } from '../../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onProductSelect?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  onOrderFormOpen?: () => void;
}

export default function ProductGrid({
  onProductSelect,
  onAddToCart,
  onOrderFormOpen,
}: ProductGridProps) {
  const availableProducts = products.filter((p) => p.status === 'available' && p.collection !== 'bracelets');

  return (
    <section className="py-16 md:py-24 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-4 product-name">
            ORZI مجموعة
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            إكتشف سحر أساورنا المصاغة يدوياً
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.filter((p) => p.collection !== 'bracelets').map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onProductSelect}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOrderFormOpen}
            className="px-12 py-4 bg-[#243247] text-[#e7ddcc] font-bold text-lg rounded-lg hover:bg-[#e7ddcc] hover:text-[#243247] transition-all duration-300 transform hover:scale-105"
          >
            أُطلب اللي يناسبك من مجموعتنا الإستثنائية دلوقتي.
          </button>
        </div>

        {availableProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              لا توجد منتجات متاحة في الوقت الحالي.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
