export default function ProductCard({ product, addToCart, actionLabel = "View Product" }) {
  return (
    <div className="bg-white border border-[#dddddd] rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-gray-500 mb-1">
          Category: <strong>{product.category}</strong>
        </p>
        <h3 className="font-semibold text-[#1f3864] text-lg mb-1">{product.name}</h3>
        <p className="text-[#555] text-sm mb-2 flex-1">{product.description}</p>
        <p className="text-[#e8b84b] font-bold text-xl mb-3">${product.price.toFixed(2)}</p>
        {addToCart ? (
          <button
            onClick={() => addToCart(product.id, product.name)}
            className="bg-[#1f3864] hover:bg-[#e8b84b] hover:text-[#1f3864] text-white font-semibold text-sm px-4 py-2 rounded transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          <a
            href="/products"
            className="inline-block text-center bg-[#1f3864] hover:bg-[#e8b84b] hover:text-[#1f3864] text-white font-semibold text-sm px-4 py-2 rounded transition-colors"
          >
            {actionLabel}
          </a>
        )}
      </div>
    </div>
  );
}
