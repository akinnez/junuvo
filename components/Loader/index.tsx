"use client";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../Spinner";

export const JunuvoOverlay = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/40 backdrop-blur-md"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Logo-inspired geometric loader */}
            <div className="relative h-20 w-24">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 flex"
              >
                {/* Visual representation of your logo triangles */}
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-white shadow-xl" />
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[50px] border-t-blue-300 -ml-8 mt-2 opacity-80" />
              </motion.div>
            </div>

            <div className="text-center">
              <h2 className="text-white font-bold tracking-[0.2em] text-xl">
                JUNUVO
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Spinner size="sm" color="white" />
                <span className="text-blue-200 text-xs uppercase tracking-widest font-semibold">
                  Processing Securely
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
