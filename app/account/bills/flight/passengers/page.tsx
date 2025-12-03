"use client";
import React, { useState, useEffect, useMemo } from "react";
import { PassengerData } from "@/types/flight";
import PassengerForm from "@/views/Bills/PassengerForm";
import PassengerList from "@/views/Bills/PassengerList";

// --- Types and Interfaces ---

type ViewState = "list" | "form";

// --- Utility Functions for Local Storage ---

const LOCAL_STORAGE_KEY = "flightAppPassengers";

const loadPassengersFromStorage = (N: number): PassengerData[] => {
  if (typeof window === "undefined") return [];

  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    try {
      const data: PassengerData[] = JSON.parse(savedData);
      // Ensure the loaded data matches the expected N count
      if (data.length === N) {
        return data.map((p) => ({
          ...p,
          // Ensure age is stored as a number/null, not just string
          age: p.age ? Number(p.age) : null,
        }));
      }
    } catch (e) {
      console.error("Could not parse saved passenger data:", e);
    }
  }

  // Fallback: Generate initial empty passenger list
  return Array.from({ length: N }, (_, i) => ({
    id: i + 1,
    name: "",
    age: null,
    isFilled: false,
  }));
};

const DEFAULT_N = 1;

export default function App() {
  const [N, setN] = useState(DEFAULT_N);
  const [passengers, setPassengers] = useState<PassengerData[]>([]);
  const [view, setView] = useState<ViewState>("list");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load data from localStorage and initialize on component mount
  useEffect(() => {
    // Check if N is already saved in storage
    const savedN = localStorage.getItem("flightAppN");
    const initialN = savedN ? parseInt(savedN, 10) : DEFAULT_N;

    setN(initialN);
    setPassengers(loadPassengersFromStorage(initialN));
    setIsLoaded(true);
  }, []);

  // 2. Persist data to localStorage whenever passengers or N changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(passengers));
      localStorage.setItem("flightAppN", String(N));
    }
  }, [passengers, N, isLoaded]);

  // 3. Handle change in total passenger count
  //   const handleNChange = (newN: number) => {
  //     if (newN === N) return;

  //     // Load existing data
  //     const existingData = passengers.slice(0, Math.min(N, newN));

  //     // If increasing N, add new empty slots
  //     if (newN > N) {
  //       const newPassengers = Array.from({ length: newN - N }, (_, i) => ({
  //         id: N + 1 + i,
  //         name: "",
  //         age: null,
  //         isFilled: false,
  //       }));
  //       setPassengers([...existingData, ...newPassengers]);
  //     } else {
  //       // If decreasing N, truncate the array
  //       setPassengers(existingData);
  //     }
  //     setN(newN);
  //   };

  // --- View Control Handlers ---

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setView("form");
  };

  const handleSaveDetails = (data: Omit<PassengerData, "id">) => {
    if (editingIndex === null) return;

    setPassengers((prev) =>
      prev.map((p, i) => (i === editingIndex ? { ...p, ...data } : p))
    );
    setView("list");
    setEditingIndex(null);
  };

  const handleBack = () => {
    setView("list");
    setEditingIndex(null);
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-pulse text-indigo-500 font-medium">
          Loading passenger data...
        </div>
      </div>
    );
  }

  // --- Render based on View State ---
  return (
    <div className="container mx-auto">
      {view === "list" && (
        <PassengerList
          passengers={passengers}
          onEdit={handleEdit}
          N={N}
          //   onNChange={handleNChange}
        />
      )}

      {view === "form" && editingIndex !== null && (
        <PassengerForm
          passenger={passengers[editingIndex]}
          onSave={handleSaveDetails}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
