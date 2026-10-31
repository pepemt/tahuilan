import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/** Burbuja flotante "Sitio demo por tahuilan.com" para las páginas de muestra. Se puede cerrar. */
export default function DemoBadge({ accent = "#8d9b80", link = "#1f4a35", text = "#7d7168" }) {
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border border-black/10 bg-white/90 py-1.5 pl-3 pr-1.5 text-xs shadow-lg backdrop-blur"
          style={{ color: text }}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
          <span>
            Sitio demo por{" "}
            <a
              href="https://tahuilan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline-offset-2 hover:underline"
              style={{ color: link }}
            >
              tahuilan.com
            </a>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar aviso"
            className="flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-black/5"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
