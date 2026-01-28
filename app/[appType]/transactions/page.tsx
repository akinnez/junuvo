"use client";
import { useState } from "react";
import { mockTransactions } from "@/lib/mock-transaction-data";
import Pagination from "./Pagination";
import Table from "@/components/Table";
import { columns } from "./column";
import TransactionDetails from "./details";
import TransactionHeader from "./headers";

function Transaction() {
  const [currentPage, setCurrentPage] = useState(1); // Start at page 3 for the screenshot
  const totalPages = 6;
  const pageSize = 7;

  const data = mockTransactions;
  // Simulated data slice for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIndex, startIndex + pageSize);

  return (
    <div className="space-y-10 py-7 ">
      <TransactionHeader />
      <TransactionDetails />
      <Table data={currentData} columns={columns} loading={false} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default Transaction;
