import React from "react";

/**
 * Architectural Croquis & Topographic Sketch Components
 * Provides authentic architectural hand-sketch and blueprint drawings:
 * - Topographic contour lines with elevation heights
 * - Masterplan croquis with tree canopies, stone walls, and dimension lines
 * - Section elevation sketch with terrain slopes
 * - Compass rose & graphic scale bars
 */

// 1. TOPOGRAPHIC CONTOUR LINES BACKGROUND (Eşyükselti / Topoğrafya Krokisi)
export function TopoContourBackground({
  className = "",
  opacity = 0.18,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id="topo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#738B5B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D46F4C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E3B84B" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Contour Isolines with organic landscape curvature */}
        <path
          d="M-50,220 C240,180 380,340 680,260 C980,180 1180,320 1500,210"
          stroke="url(#topo-grad)"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />
        <text x="320" y="245" fill="#738B5B" fontSize="10" fontFamily="monospace" letterSpacing="2">
          +42.50m
        </text>

        <path
          d="M-50,340 C180,290 320,440 640,370 C960,300 1220,440 1500,320"
          stroke="url(#topo-grad)"
          strokeWidth="1.5"
        />
        <text x="720" y="345" fill="#D46F4C" fontSize="10" fontFamily="monospace" letterSpacing="2">
          +40.00m
        </text>

        <path
          d="M-50,470 C220,410 420,560 760,490 C1100,420 1260,540 1500,450"
          stroke="url(#topo-grad)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <text x="480" y="475" fill="#738B5B" fontSize="10" fontFamily="monospace" letterSpacing="2">
          +37.50m
        </text>

        <path
          d="M-50,600 C160,540 380,680 720,610 C1060,540 1280,660 1500,580"
          stroke="url(#topo-grad)"
          strokeWidth="1.8"
        />
        <text x="890" y="585" fill="#E3B84B" fontSize="10" fontFamily="monospace" letterSpacing="2">
          +35.00m — ANA TERAS KOTU
        </text>

        <path
          d="M-50,730 C200,670 440,820 800,740 C1160,660 1340,780 1500,710"
          stroke="url(#topo-grad)"
          strokeWidth="1.2"
        />
        <text x="240" y="715" fill="#738B5B" fontSize="10" fontFamily="monospace" letterSpacing="2">
          +32.50m
        </text>

        <path
          d="M-50,860 C260,810 520,940 880,870 C1240,800 1380,900 1500,840"
          stroke="url(#topo-grad)"
          strokeWidth="1.4"
          strokeDasharray="8 6"
        />

        {/* Blueprint coordinate grid crosses (+) */}
        {[
          [160, 180],
          [520, 180],
          [880, 180],
          [1240, 180],
          [160, 480],
          [520, 480],
          [880, 480],
          [1240, 480],
          [160, 780],
          [520, 780],
          [880, 780],
          [1240, 780],
        ].map(([cx, cy], i) => (
          <g key={i} stroke="currentColor" strokeWidth="1" opacity="0.4">
            <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} />
            <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} />
          </g>
        ))}
      </svg>
    </div>
  );
}

// 2. MASTERPLAN CROQUIS (Vaziyet Planı & Kroki Çizimi)
export function MasterplanCroquis({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/15 bg-[#121814]/90 p-6 backdrop-blur-xl sm:p-8 ${className}`}
    >
      {/* Blueprint corner registrations */}
      <div className="pointer-events-none absolute left-3 top-3 font-mono text-[11px] text-white/40">
        ⌜ TERRA / SKETCH 01
      </div>
      <div className="pointer-events-none absolute right-3 top-3 font-mono text-[11px] text-white/40">
        1:200 ⌝
      </div>
      <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[11px] text-white/40">
        ⌞ KESİT A-A'
      </div>
      <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[11px] text-white/40">
        KOT +42.00 ⌟
      </div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-moss">
            Vaziyet Krokisi & Peyzaj Kurgusu
          </span>
          <h4 className="font-display text-lg font-bold text-offwhite sm:text-xl">
            Mimari Vaziyet Planı & Teras Şeması
          </h4>
        </div>
        <GraphicScaleBar />
      </div>

      {/* Interactive Architectural SVG Sketch */}
      <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0b100d] p-3">
        <svg
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Subtle Grid */}
          <defs>
            <pattern id="croquis-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="800" height="450" fill="url(#croquis-grid)" />

          {/* Topo lines on the site */}
          <path
            d="M 40,80 Q 200,40 400,90 T 760,60"
            stroke="#738b5b"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />
          <path
            d="M 40,160 Q 240,110 460,170 T 760,130"
            stroke="#738b5b"
            strokeWidth="1"
            opacity="0.7"
          />
          <path
            d="M 40,240 Q 280,180 500,250 T 760,210"
            stroke="#738b5b"
            strokeWidth="1.2"
            opacity="0.8"
          />
          <path
            d="M 40,320 Q 260,260 520,330 T 760,290"
            stroke="#738b5b"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* Architectural Building Mass Outline */}
          <rect
            x="180"
            y="110"
            width="220"
            height="150"
            fill="#18231c"
            stroke="#d46f4c"
            strokeWidth="2"
            rx="4"
          />
          {/* Building internal cross-hatch */}
          <line
            x1="180"
            y1="110"
            x2="400"
            y2="260"
            stroke="#d46f4c"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <line
            x1="400"
            y1="110"
            x2="180"
            y2="260"
            stroke="#d46f4c"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <text
            x="245"
            y="190"
            fill="#e8dcc6"
            fontSize="11"
            fontFamily="sans-serif"
            fontWeight="bold"
            letterSpacing="1.5"
          >
            KONUT KÜTLESİ
          </text>
          <text x="260" y="210" fill="#738b5b" fontSize="9" fontFamily="monospace">
            ±0.00 (KOT +42.00)
          </text>

          {/* Reflection Pool / Water Feature */}
          <rect
            x="440"
            y="130"
            width="160"
            height="90"
            fill="#132b24"
            stroke="#738b5b"
            strokeWidth="1.5"
            rx="3"
          />
          <path d="M 460,160 Q 520,150 580,160" stroke="#90c8a8" strokeWidth="0.8" opacity="0.5" />
          <path d="M 470,180 Q 530,170 590,180" stroke="#90c8a8" strokeWidth="0.8" opacity="0.5" />
          <text
            x="475"
            y="175"
            fill="#e8dcc6"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="1"
          >
            YANSIMA HAVUZU
          </text>

          {/* Terraced Stone Walkways (Krokisel Çizgiler) */}
          <path
            d="M 140,280 L 680,280"
            stroke="#e8dcc6"
            strokeWidth="2"
            strokeDasharray="6 2"
            opacity="0.9"
          />
          <path d="M 140,290 L 680,290" stroke="#e8dcc6" strokeWidth="1" opacity="0.6" />
          <text x="145" y="272" fill="#d46f4c" fontSize="8" fontFamily="monospace">
            DOĞAL KAYRAK TERAS HATTI
          </text>

          {/* Stepped Pergola & Deck */}
          <rect
            x="420"
            y="240"
            width="180"
            height="70"
            fill="none"
            stroke="#e3b84b"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
          {[440, 470, 500, 530, 560, 590].map((x) => (
            <line
              key={x}
              x1={x}
              y1="240"
              x2={x}
              y2="310"
              stroke="#e3b84b"
              strokeWidth="0.8"
              opacity="0.4"
            />
          ))}
          <text x="460" y="278" fill="#e3b84b" fontSize="8" fontFamily="monospace">
            AHŞAP GÖLGELİK DECK
          </text>

          {/* Croquis Tree Symbols (Anıt Ağaçlar) */}
          {/* Tree 1: Large Olive Tree */}
          <g transform="translate(130, 160)">
            <circle
              cx="0"
              cy="0"
              r="32"
              stroke="#738b5b"
              strokeWidth="1.5"
              strokeDasharray="3 2"
              fill="#192b20"
              opacity="0.8"
            />
            <circle cx="0" cy="0" r="22" stroke="#738b5b" strokeWidth="1" fill="none" />
            <circle cx="0" cy="0" r="8" stroke="#d46f4c" strokeWidth="1.5" fill="#18231c" />
            <line x1="-32" y1="0" x2="32" y2="0" stroke="#738b5b" strokeWidth="0.8" />
            <line x1="0" y1="-32" x2="0" y2="32" stroke="#738b5b" strokeWidth="0.8" />
            <text x="38" y="5" fill="#e8dcc6" fontSize="8" fontFamily="monospace">
              ANIT ZEYTİN (Olea europaea)
            </text>
          </g>

          {/* Tree 2: Cypress Cluster */}
          <g transform="translate(680, 120)">
            <circle cx="0" cy="0" r="16" stroke="#738b5b" strokeWidth="1.2" fill="#16291e" />
            <circle cx="0" cy="0" r="4" fill="#738b5b" />
          </g>
          <g transform="translate(710, 135)">
            <circle cx="0" cy="0" r="14" stroke="#738b5b" strokeWidth="1.2" fill="#16291e" />
            <circle cx="0" cy="0" r="4" fill="#738b5b" />
          </g>
          <g transform="translate(690, 155)">
            <circle cx="0" cy="0" r="15" stroke="#738b5b" strokeWidth="1.2" fill="#16291e" />
            <circle cx="0" cy="0" r="4" fill="#738b5b" />
          </g>
          <text x="650" y="185" fill="#738b5b" fontSize="8" fontFamily="monospace">
            SERVİ GRUBU
          </text>

          {/* Dimension Lines (Ölçülendirme Çizgileri) */}
          <g stroke="#d46f4c" strokeWidth="1" opacity="0.8">
            {/* Horizontal Dimension */}
            <line x1="180" y1="75" x2="400" y2="75" />
            <line x1="180" y1="68" x2="180" y2="82" />
            <line x1="400" y1="68" x2="400" y2="82" />
            <text
              x="270"
              y="70"
              fill="#d46f4c"
              fontSize="9"
              fontFamily="monospace"
              textAnchor="middle"
            >
              22.00 m
            </text>
          </g>

          {/* Section Cut Line A-A' */}
          <g stroke="#e3b84b" strokeWidth="1.5">
            <line x1="60" y1="200" x2="740" y2="200" strokeDasharray="12 4 3 4" opacity="0.6" />
            <polygon points="60,195 50,200 60,205" fill="#e3b84b" />
            <polygon points="740,195 750,200 740,205" fill="#e3b84b" />
            <text
              x="35"
              y="204"
              fill="#e3b84b"
              fontSize="10"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              A
            </text>
            <text
              x="755"
              y="204"
              fill="#e3b84b"
              fontSize="10"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              A'
            </text>
          </g>

          {/* Compass / North Arrow */}
          <g transform="translate(740, 60)">
            <circle cx="0" cy="0" r="22" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
            <path d="M 0,-18 L 6,0 L 0,-4 L -6,0 Z" fill="#d46f4c" />
            <path d="M 0,18 L 6,0 L 0,4 L -6,0 Z" fill="#e8dcc6" opacity="0.4" />
            <text
              x="-4"
              y="-22"
              fill="#d46f4c"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
            >
              K
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
        <span className="font-mono text-[10px] uppercase tracking-wider text-moss">
          • Kademeli Gabion Duvarlar & Kuru Dere Yatağı
        </span>
        <span className="font-mono text-[10px] text-white/40">
          TERRA Dış Mekân Kurgu Çizimi · Proje Rev. 04
        </span>
      </div>
    </div>
  );
}

// 3. GRAPHIC SCALE BAR (Mimari Çizim Ölçeği)
export function GraphicScaleBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[10px] text-sand ${className}`}>
      <span className="text-white/50">0</span>
      <div className="flex h-1.5 w-24 overflow-hidden border border-white/30">
        <div className="w-1/4 bg-white" />
        <div className="w-1/4 bg-transparent" />
        <div className="w-1/4 bg-white" />
        <div className="w-1/4 bg-transparent" />
      </div>
      <span>20m</span>
      <span className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-moss">1:200</span>
    </div>
  );
}

// 4. SECTION ELEVATION CROQUIS (Arazi Kesit Krokisi)
export function ElevationSectionCroquis({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/15 bg-[#121614]/85 p-5 backdrop-blur-md ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-yellow">
          Kesit A-A' Arazi Eğim Şeması
        </span>
        <span className="font-mono text-[10px] text-white/50">KOT +48.00 / +32.00</span>
      </div>

      <div className="mt-4 aspect-[21/9] w-full">
        <svg
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Natural ground line */}
          <path
            d="M 20,40 C 140,50 220,90 320,130 C 420,160 520,170 580,180"
            stroke="#d46f4c"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x="50" y="30" fill="#d46f4c" fontSize="8" fontFamily="monospace">
            ÖZGÜN DOĞAL TOPOĞRAFYA HATTI
          </text>

          {/* Designed Terraces Profile */}
          <path
            d="M 20,60 L 140,60 L 140,100 L 280,100 L 280,140 L 440,140 L 440,175 L 580,175"
            stroke="#738b5b"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Earth Fill / Hatching below terraces */}
          <path
            d="M 20,60 L 140,60 L 140,100 L 280,100 L 280,140 L 440,140 L 440,175 L 580,175 L 580,195 L 20,195 Z"
            fill="url(#earth-gradient)"
            opacity="0.25"
          />

          <defs>
            <linearGradient id="earth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#738b5b" />
              <stop offset="100%" stopColor="#111613" />
            </linearGradient>
          </defs>

          {/* Retaining Wall Markers */}
          {[140, 280, 440].map((x, i) => (
            <g key={x}>
              <rect
                x={x - 4}
                y={60 + i * 40}
                width="8"
                height="40"
                fill="#d46f4c"
                opacity="0.8"
                rx="1"
              />
              <text x={x + 8} y={75 + i * 40} fill="#e8dcc6" fontSize="7" fontFamily="monospace">
                İSTİNAT DUVARI
              </text>
            </g>
          ))}

          {/* Tree Profiles on Terraces */}
          <g transform="translate(80, 25)">
            {/* Tree trunk & canopy sketch */}
            <line x1="0" y1="35" x2="0" y2="15" stroke="#738b5b" strokeWidth="2" />
            <path
              d="M -15,15 C -20,0 20,0 15,15 Z"
              fill="#1f3829"
              stroke="#738b5b"
              strokeWidth="1.5"
            />
            <text x="-25" y="-5" fill="#738b5b" fontSize="7" fontFamily="monospace">
              +48.00 KOTU
            </text>
          </g>

          <g transform="translate(210, 65)">
            <line x1="0" y1="35" x2="0" y2="15" stroke="#738b5b" strokeWidth="2" />
            <circle cx="0" cy="5" r="14" fill="#1f3829" stroke="#738b5b" strokeWidth="1.5" />
            <text x="-20" y="-12" fill="#738b5b" fontSize="7" fontFamily="monospace">
              +44.00 KOTU
            </text>
          </g>

          <g transform="translate(360, 105)">
            <line x1="0" y1="35" x2="0" y2="15" stroke="#738b5b" strokeWidth="2" />
            <path
              d="M -12,15 C -15,5 15,5 12,15 Z"
              fill="#1f3829"
              stroke="#738b5b"
              strokeWidth="1.5"
            />
            <text x="-20" y="-8" fill="#738b5b" fontSize="7" fontFamily="monospace">
              +40.00 KOTU
            </text>
          </g>

          {/* Level indicators */}
          <g fill="#e3b84b">
            <polygon points="135,50 145,50 140,58" />
            <text x="145" y="55" fontSize="8" fontFamily="monospace">
              +48.00
            </text>
            <polygon points="275,90 285,90 280,98" />
            <text x="285" y="95" fontSize="8" fontFamily="monospace">
              +44.00
            </text>
            <polygon points="435,130 445,130 440,138" />
            <text x="445" y="135" fontSize="8" fontFamily="monospace">
              +40.00
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
