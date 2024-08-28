"use client"
import React, { useState, useEffect } from 'react';
import OrdersTable from '@/components/OrdersTable';

async function fetchOrders(page = 1, limit = 10) {
  const res = await fetch(`https://order-status-46s3.onrender.com/orders?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch orders');
  }
  return res.json();
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const totalPages = 10;

  const loadOrders = async (page: number) => {
    const fetchedOrders = await fetchOrders(page, 5);
    setOrders(fetchedOrders);
  };

  useEffect(() => {
    loadOrders(currentPage);
  }, [currentPage]);

  const handleNext = () => setCurrentPage(prev => prev + 1);
  const handlePrevious = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto p-6">
      <OrdersTable orders={orders} />
      <div className="flex items-center justify-center mt-6 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Previous
        </button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
