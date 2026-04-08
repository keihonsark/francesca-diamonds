"use client";

import { useState, useCallback } from "react";

interface Diamond {
  id: string;
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  cut: string;
  price: number;
  lab: string;
  depth?: number;
  table?: number;
  polish?: string;
  symmetry?: string;
  fluorescence?: string;
  certificate_number?: string;
  certificate_lab?: string;
  measurements?: string;
}

interface Filters {
  shape: string;
  caratMin: number;
  caratMax: number;
  color: string;
  clarity: string;
  cut: string;
  priceMin: number;
  priceMax: number;
  labGrown: boolean;
}

const shapes = [
  "Round",
  "Oval",
  "Cushion",
  "Emerald",
  "Pear",
  "Marquise",
  "Radiant",
];

const colors = ["D", "E", "F", "G", "H", "I", "J", "K"];
const clarities = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2"];
const cuts = ["Ideal", "Excellent", "Very Good", "Good"];

const shapeIcons: Record<string, string> = {
  Round: "●",
  Oval: "⬮",
  Cushion: "▢",
  Emerald: "▭",
  Pear: "◇",
  Marquise: "◆",
  Radiant: "◈",
};

function DiamondDetailModal({
  diamond,
  onClose,
}: {
  diamond: Diamond;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formspree.io/f/xpqodbdv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right text-muted hover:text-foreground text-xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <span className="text-4xl">{shapeIcons[diamond.shape] || "◆"}</span>
          <h3 className="font-cormorant text-2xl mt-2">
            {diamond.carat}ct {diamond.shape}
          </h3>
          <p className="text-accent text-lg font-medium mt-1">
            ${diamond.price.toLocaleString()}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            ["Shape", diamond.shape],
            ["Carat", diamond.carat.toString()],
            ["Color", diamond.color],
            ["Clarity", diamond.clarity],
            ["Cut", diamond.cut || "—"],
            ["Type", diamond.lab === "Lab Grown" ? "Lab Grown" : "Natural"],
            ["Polish", diamond.polish || "—"],
            ["Symmetry", diamond.symmetry || "—"],
            ["Fluorescence", diamond.fluorescence || "—"],
            ["Certificate", diamond.certificate_lab || "—"],
            ["Measurements", diamond.measurements || "—"],
            ["Depth", diamond.depth ? `${diamond.depth}%` : "—"],
            ["Table", diamond.table ? `${diamond.table}%` : "—"],
          ].map(([label, value]) => (
            <div key={label} className="bg-card p-2">
              <span className="text-[10px] uppercase tracking-[0.08em] text-muted block">
                {label}
              </span>
              <span className="text-sm">{value}</span>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <h4 className="font-cormorant text-xl mb-2">Thank You</h4>
            <p className="text-sm text-muted">
              We&apos;ll be in touch about this diamond soon.
            </p>
          </div>
        ) : showForm ? (
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="form_source" value="diamond_inquiry" />
            <input
              type="hidden"
              name="diamond"
              value={`${diamond.carat}ct ${diamond.shape} ${diamond.color} ${diamond.clarity} - $${diamond.price.toLocaleString()}`}
            />
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={3}
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary mt-6 w-full text-center disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary w-full text-center"
          >
            Inquire About This Diamond
          </button>
        )}
      </div>
    </div>
  );
}

export default function DiamondSearch() {
  const [filters, setFilters] = useState<Filters>({
    shape: "",
    caratMin: 0.3,
    caratMax: 5,
    color: "",
    clarity: "",
    cut: "",
    priceMin: 0,
    priceMax: 100000,
    labGrown: false,
  });
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Diamond | null>(null);
  const [searched, setSearched] = useState(false);

  const fetchDiamonds = useCallback(async () => {
    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const params = new URLSearchParams();
      if (filters.shape) params.append("shape", filters.shape);
      if (filters.color) params.append("color", filters.color);
      if (filters.clarity) params.append("clarity", filters.clarity);
      if (filters.cut) params.append("cut", filters.cut);
      params.append("carat_min", filters.caratMin.toString());
      params.append("carat_max", filters.caratMax.toString());
      params.append("price_min", filters.priceMin.toString());
      params.append("price_max", filters.priceMax.toString());
      if (filters.labGrown) params.append("lab_grown", "true");
      params.append("page_size", "40");
      params.append("page_number", "1");

      const response = await fetch(
        `https://apiservices.vdbapp.com/v2/diamonds?${params.toString()}`,
        {
          headers: {
            Authorization: `Token token="iltz_Ie1tN0qm-ANqF7X6SRjwyhmMtzZsmqvyWOZ83I"`,
            "api-key": "_eTAh9su9_0cnehpDpqM9xA",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch diamonds");

      const data = await response.json();
      const items = (data.response?.body?.diamonds || data.diamonds || data || []).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (d: any) => ({
          id: d.id || d.stock_num || Math.random().toString(),
          shape: d.shape || "Round",
          carat: parseFloat(d.carat) || 0,
          color: d.color || "",
          clarity: d.clarity || "",
          cut: d.cut || d.cut_grade || "",
          price: parseFloat(d.total_sales_price) || parseFloat(d.price) || 0,
          lab: d.lab_grown ? "Lab Grown" : "Natural",
          depth: parseFloat(d.depth_percent) || undefined,
          table: parseFloat(d.table_percent) || undefined,
          polish: d.polish || undefined,
          symmetry: d.symmetry || undefined,
          fluorescence: d.fluorescence_intensity || d.fluorescence || undefined,
          certificate_number: d.certificate_number || undefined,
          certificate_lab: d.certificate_lab || d.lab || undefined,
          measurements: d.measurements || undefined,
        })
      );
      setDiamonds(items);
    } catch {
      setError(
        "Unable to load diamonds at the moment. Please try again later."
      );
      setDiamonds([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  return (
    <div>
      {/* Shape Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {shapes.map((shape) => (
          <button
            key={shape}
            onClick={() =>
              setFilters((f) => ({
                ...f,
                shape: f.shape === shape ? "" : shape,
              }))
            }
            className={`flex flex-col items-center gap-1 px-4 py-3 transition-all ${
              filters.shape === shape
                ? "bg-foreground text-white"
                : "bg-card text-foreground hover:bg-card/80"
            }`}
          >
            <span className="text-lg">{shapeIcons[shape]}</span>
            <span className="text-[10px] uppercase tracking-[0.08em]">
              {shape}
            </span>
          </button>
        ))}
      </div>

      {/* Other Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Carat Min
          </label>
          <input
            type="number"
            min="0.1"
            max="10"
            step="0.1"
            value={filters.caratMin}
            onChange={(e) =>
              setFilters((f) => ({ ...f, caratMin: parseFloat(e.target.value) || 0.1 }))
            }
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Carat Max
          </label>
          <input
            type="number"
            min="0.1"
            max="20"
            step="0.1"
            value={filters.caratMax}
            onChange={(e) =>
              setFilters((f) => ({ ...f, caratMax: parseFloat(e.target.value) || 5 }))
            }
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Color
          </label>
          <select
            value={filters.color}
            onChange={(e) => setFilters((f) => ({ ...f, color: e.target.value }))}
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">All</option>
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Clarity
          </label>
          <select
            value={filters.clarity}
            onChange={(e) => setFilters((f) => ({ ...f, clarity: e.target.value }))}
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">All</option>
            {clarities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Cut
          </label>
          <select
            value={filters.cut}
            onChange={(e) => setFilters((f) => ({ ...f, cut: e.target.value }))}
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">All</option>
            {cuts.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.labGrown}
              onChange={(e) =>
                setFilters((f) => ({ ...f, labGrown: e.target.checked }))
              }
              className="accent-accent"
            />
            <span className="text-xs uppercase tracking-[0.08em]">
              Lab Grown
            </span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm">
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Price Min
          </label>
          <input
            type="number"
            min="0"
            step="100"
            value={filters.priceMin}
            onChange={(e) =>
              setFilters((f) => ({
                ...f,
                priceMin: parseInt(e.target.value) || 0,
              }))
            }
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.08em] text-muted block mb-1">
            Price Max
          </label>
          <input
            type="number"
            min="0"
            step="100"
            value={filters.priceMax}
            onChange={(e) =>
              setFilters((f) => ({
                ...f,
                priceMax: parseInt(e.target.value) || 100000,
              }))
            }
            className="w-full bg-card border-0 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="text-center mb-12">
        <button onClick={fetchDiamonds} className="btn-primary" disabled={loading}>
          {loading ? "Searching..." : "Search Diamonds"}
        </button>
      </div>

      {/* Results */}
      {loading && (
        <div className="text-center py-16">
          <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-muted text-sm mt-4">Searching diamonds...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-16">
          <p className="text-muted">{error}</p>
        </div>
      )}

      {!loading && !error && searched && diamonds.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted">
            No diamonds found matching your criteria. Try adjusting your
            filters.
          </p>
        </div>
      )}

      {!loading && diamonds.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {diamonds.map((diamond) => (
            <button
              key={diamond.id}
              onClick={() => setSelected(diamond)}
              className="bg-card p-4 text-left hover:shadow-md transition-shadow group"
            >
              <div className="text-center mb-3">
                <span className="text-2xl text-muted group-hover:text-accent transition-colors">
                  {shapeIcons[diamond.shape] || "◆"}
                </span>
              </div>
              <div className="text-center">
                <p className="font-cormorant text-lg">
                  {diamond.carat}ct {diamond.shape}
                </p>
                <p className="text-xs text-muted mt-1">
                  {diamond.color} &middot; {diamond.clarity}
                  {diamond.cut ? ` · ${diamond.cut}` : ""}
                </p>
                <p className="text-accent font-medium mt-2">
                  ${diamond.price.toLocaleString()}
                </p>
                <span className="text-[10px] uppercase tracking-[0.1em] text-muted mt-2 inline-block">
                  {diamond.lab}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <DiamondDetailModal
          diamond={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
