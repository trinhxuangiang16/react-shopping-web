import { json, useLoaderData } from "react-router-dom";
import ProductList from "../component/shop/ProductList";
import SideBar from "../component/shop/SideBar";
import { useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";

const ITEMS_PER_PAGE = 8;

const ShopPage = () => {
  const request = useLoaderData();
  const dataShop = useSelector((state) => state.cart.listItem);
  const storeCategory = useSelector((state) => state.cart.category);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default-sort");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, storeCategory]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...dataShop];

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      const cleanSearchNum = search.replace(/[\.\sđ₫vnd]/g, "");

      result = result.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(search);
        const descMatch = product.shortDesc?.toLowerCase().includes(search);
        const priceMatch = product.price.toString().includes(search) ||
                           (cleanSearchNum && product.price.toString().includes(cleanSearchNum));

        return nameMatch || descMatch || priceMatch;
      });
    }

    switch (sortOption) {
      case "name-sort":
        result.sort((a, b) => a.name.localeCompare(b.name, "vi"));
        break;
      case "low-price":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high-price":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [dataShop, searchTerm, sortOption]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">
          ALL TECH PRODUCTS
        </p>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Boutique Shop
        </h1>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-start pb-20">
        <SideBar data={request} />
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 z-10" />
              <input
                className="w-full h-11 rounded-none bg-white border border-slate-200 pl-10 pr-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Search products by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative shrink-0">
              <select
                name="sort-product"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full sm:w-auto h-11 appearance-none rounded-none border border-slate-200 bg-white pl-4 pr-10 text-xs sm:text-sm text-slate-700 font-semibold shadow-2xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer transition-all"
              >
                <option value="default-sort">Default Sorting</option>
                <option value="name-sort">Name (A-Z)</option>
                <option value="low-price">Price: Low to High</option>
                <option value="high-price">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500 pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {paginatedProducts.length === 0 ? (
              <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <p className="text-base font-semibold text-slate-700 mb-1">
                  No products found
                </p>
                <p className="text-xs text-slate-400">
                  {searchTerm ? "Please try searching with another keyword." : "This category has no items."}
                </p>
              </div>
            ) : (
              paginatedProducts.map((list, index) => (
                <ProductList key={index} data={list} request={request} />
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="size-9 rounded-none border border-slate-200 bg-white grid place-items-center text-slate-600 hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={cn(
                      "size-9 rounded-none text-xs font-bold border transition-all cursor-pointer",
                      currentPage === pageNum
                        ? "bg-blue-600 border-blue-600 text-white shadow-xs"
                        : "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600",
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="size-9 rounded-none border border-slate-200 bg-white grid place-items-center text-slate-600 hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}

          <div className="mt-6 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            Showing {filteredAndSortedProducts.length === 0 ? 0 : ((currentPage - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} products
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;

export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch product." }, { status: 500 });
  } else {
    const data = await response.json();
    console.log(data);

    const request = data.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: parseInt(product.price),
        category: product.category,
        shortDesc: product.short_desc,
        longDesc: product.long_desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        img4: product.img4,
      };
    });

    return request;
  }
}
