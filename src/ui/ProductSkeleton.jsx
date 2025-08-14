const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        <div className="h-5 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
