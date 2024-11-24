'use client';

import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    
    <div className="flex flex-wrap justify-center gap-6 w-full p-4 mt-6 md:mt-8 lg:mt-12 ">
      <div
        className="flex flex-col items-center bg-white rounded-lg border border-gray-200 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300
         basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div className="relative w-[200px] h-[200px] mb-4">
          <Image
            src="/Images/product1.jpg"
            fill
            style={{ objectFit: 'contain' }}
            alt="Product One"
            className="rounded-md"
            priority
          />
        </div>
        <div className="mb-2">
          <h2 className="text-xl font-medium text-gray-800">MacBook Pro</h2>
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">Rs.250,000</span>
        </div>
        <div className="w-full">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
            Buy Now
          </button>
        </div>
      </div>

      <div
        className="flex flex-col items-center bg-white rounded-lg border border-gray-200 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300
         basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div className="relative w-[200px] h-[200px] mb-4">
          <Image
            src="/Images/product2.jpg"
            fill
            style={{ objectFit: 'contain' }}
            alt="Product Two"
            className="rounded-md"
          />
        </div>
        <div className="mb-2">
          <h2 className="text-xl font-medium text-gray-800">Vivo Y56</h2>
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">Rs.25,000</span>
        </div>
        <div className="w-full">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
            Buy Now
          </button>
        </div>
      </div>

      <div
        className="flex flex-col items-center bg-white rounded-lg border border-gray-200 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300
         basis-1/2 md:basis-1/3 lg:basis-1/4"
      >
        <div className="relative w-[200px] h-[200px] mb-4">
          <Image
            src="/Images/product3.jpg"
            fill
            style={{ objectFit: 'contain' }}
            alt="Product Three"
            className="rounded-md"
          />
        </div>
        <div className="mb-2">
          <h2 className="text-xl font-medium text-gray-800">Airpods Pro</h2>
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">Rs.35,000</span>
        </div>
        <div className="w-full">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;