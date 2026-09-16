import villaImg from "@/assets/proj-villa.jpg";
import coastalImg from "@/assets/proj-coastal.jpg";
import parkImg from "@/assets/proj-park.jpg";
import hotelImg from "@/assets/proj-hotel.jpg";
import officeImg from "@/assets/proj-office.jpg";
import courtyardImg from "@/assets/proj-courtyard.jpg";
import detailLight from "@/assets/detail-light.jpg";

import villaVideo from "../../public/videos/villa-garden.mp4.asset.json";
import parkVideo from "../../public/videos/urban-park.mp4.asset.json";
import verticalCoastal from "../../public/videos/vertical-coastal.mp4.asset.json";
import verticalGarden from "../../public/videos/vertical-garden.mp4.asset.json";

export const videos = {
  villa: villaVideo.url,
  park: parkVideo.url,
  verticalCoastal: verticalCoastal.url,
  verticalGarden: verticalGarden.url,
};

export const detailImage = detailLight;

export type PlantItem = {
  name: string;
  botanical: string;
  tag: string;
};

export type MaterialItem = {
  name: string;
  texture: string;
  color: string;
};

export type LandscapeTemplate = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  climateZone: string;
  maintenanceLevel: "Düşük" | "Orta" | "Yüksek";
  waterNeed: "Çok Düşük (%60 Tasarruf)" | "Düşük (%45 Tasarruf)" | "Dengeli";
  image: string;
  features: string[];
  keyPlants: string[];
  materials: string[];
  description: string;
};

export type Project = {
  slug: string;
  plateNo: string;
  title: string;
  location: string;
  year: string;
  category: string;
  area: string;
  scope: string[];
  cover: string;
  gallery: string[];
  video?: string;
  verticalVideo?: string;
  summary: string;
  story: string[];
  coordinates: string;
  elevation: string;
  drawingScale: string;
  templateName: string;
  plants: PlantItem[];
  materials: MaterialItem[];
  detailImage?: string;
};

export const landscapeTemplates: LandscapeTemplate[] = [
  {
    id: "akdeniz-kurakcil-villa",
    title: "Akdeniz Teraslı Villa Şablonu",
    subtitle: "Zeytinlik, Doğal Taş & Sonsuzluk Havuzu",
    category: "Özel Konut",
    climateZone: "Akdeniz / Ege Kıyı Bandı",
    maintenanceLevel: "Düşük",
    waterNeed: "Düşük (%45 Tasarruf)",
    image: villaImg,
    features: [
      "Kademe taş istinat duvarları",
      "Gölge verandaları & ahşap pergolalar",
      "Düşük armatürlü gece aydınlatması",
      "Damla sulama & yüzey drenajı",
    ],
    keyPlants: [
      "Olea europaea (Zeytin)",
      "Lavandula angustifolia",
      "Rosmarinus officinalis",
      "Cupressus sempervirens",
    ],
    materials: [
      "Foça Taşı Plak",
      "Emprenye Iroko Ahşap",
      "Taranmış Dere Çakılı",
      "Kortikal Toprak",
    ],
    description:
      "Kuru yazlara tam uyumlu, arazinin kot farklarını seyir teraslarına dönüştüren heykelsi villa bahçesi kurgusu.",
  },
  {
    id: "kiyi-ruzgar-rezidans",
    title: "Kıyı Şeridi & Rüzgâr Şablonu",
    subtitle: "Tuzcul Süs Otları & Havada Asılı Güverte",
    category: "Özel Konut",
    climateZone: "Rüzgâra Açık Kıyı Kuşağı",
    maintenanceLevel: "Düşük",
    waterNeed: "Çok Düşük (%60 Tasarruf)",
    image: coastalImg,
    features: [
      "Zemine basmayan kazıklı ahşap güverteler",
      "Tuzlu rüzgârı filtreleyen çalı hatları",
      "Doğal kum & çakıl geçiş zonları",
      "Karanlık gökyüzü uyumlu yönlendirme ışıkları",
    ],
    keyPlants: [
      "Pennisetum alopecuroides",
      "Stipa tenuissima",
      "Tamarix smyrnensis",
      "Limonium sinuatum",
    ],
    materials: ["Gri Patinalı Tik", "Yerel Granit Bloklar", "Sıkıştırılmış Stabilize Toprak"],
    description:
      "Denizden gelen tuzlu esintiye karşı koymak yerine onunla dalgalanan, minimal bakım gerektiren dinamik peyzaj.",
  },
  {
    id: "kentsel-yagmur-parki",
    title: "Ekolojik Yağmur Parkı Şablonu",
    subtitle: "Biyo-Gölet & Geçirgen Kamusal Omurga",
    category: "Kamusal Alan",
    climateZone: "Karasal & Ilıman Şehir Kuşağı",
    maintenanceLevel: "Orta",
    waterNeed: "Düşük (%45 Tasarruf)",
    image: parkImg,
    features: [
      "Yağmur suyu tutma bahçeleri (Rain gardens)",
      "Geçirgen beton & ahşap oturma amfileri",
      "Kentsel yaban hayatı destekleyen arı koridorları",
      "Gölgeli yürüyüş ve bisiklet rotaları",
    ],
    keyPlants: ["Iris pseudacorus", "Carex pendula", "Platanus orientalis", "Salix babylonica"],
    materials: ["Brüt Mimari Beton", "Corten Çelik Sınır Elemanı", "Geçirgen Doğal Parke"],
    description:
      "Ani sağanak sularını filtreleyerek yer altı sularını besleyen, kent sakinlerine serin mikro-klima sağlayan kamusal şablon.",
  },
  {
    id: "avlu-isik-yansima",
    title: "İçe Dönük Avlu & Işık Şablonu",
    subtitle: "Yansıma Havuzu, Gölge & Heykelsi Odak",
    category: "Konaklama / Otel",
    climateZone: "Ege İklimi / Alaçatı Dokusu",
    maintenanceLevel: "Düşük",
    waterNeed: "Düşük (%45 Tasarruf)",
    image: hotelImg,
    features: [
      "Sığ ayna yansıma havuzu",
      "Tırmanıcı begonvil & asma saçaklar",
      "Ses yutucu mineral kırma taş yüzey",
      "Dramatik gövde aydınlatması",
    ],
    keyPlants: [
      "Bougainvillea spectabilis",
      "Ficus carica",
      "Jasminum officinale",
      "Agave americana",
    ],
    materials: ["Alaçatı Doğal Taşı", "Bazalt Su Yatağı", "El Yapımı Terrakotta Saksılar"],
    description:
      "Sıcak yaz günlerinde serin ve dingin bir mikro-vaha oluşturan, iç mekânla sınırları eriten avlu kompozisyonu.",
  },
  {
    id: "surdurulebilir-cati-bahcesi",
    title: "Biyo-Çeşitli Çatı Bahçesi Şablonu",
    subtitle: "Hafifletilmiş Substrat & Modüler Vaha",
    category: "Kurumsal / Ofis",
    climateZone: "Metropol / Çatı Kotu",
    maintenanceLevel: "Düşük",
    waterNeed: "Çok Düşük (%60 Tasarruf)",
    image: officeImg,
    features: [
      "Ekstra hafif volkanik tüf substratı",
      "Rüzgâr dayanımlı modüler çelik saksılar",
      "Toplanan klima yoğuşma suyuyla damlama sulama",
      "Çalışanlar için açık hava toplantı kabinleri",
    ],
    keyPlants: ["Sedum album", "Festuca glauca", "Salvia nemorosa", "Helichrysum italicum"],
    materials: ["Eloksallı Alüminyum Saksı", "Kompozit Ahşap Deck", "Pomza ve Tüf Karışımı"],
    description:
      "Betonarme çatıları ısı adası etkisinden kurtaran, çalışan verimliliğini artıran yeşil kurumsal teras çözümü.",
  },
];

export const projects: Project[] = [
  {
    slug: "villa-bahcesi",
    plateNo: "LEVHA 01",
    title: "Yalıkavak Villa Bahçesi",
    location: "Bodrum, Muğla",
    year: "2025",
    category: "Özel Konut",
    area: "3.400 m²",
    scope: [
      "Peyzaj mimarlığı",
      "Sonsuzluk havuzu",
      "Kurakçıl bitkilendirme",
      "Gece aydınlatma senaryosu",
    ],
    cover: villaImg,
    gallery: [villaImg, courtyardImg, detailLight],
    video: villaVideo.url,
    verticalVideo: verticalGarden.url,
    coordinates: "37° 05' 22\" N · 27° 17' 44\" E",
    elevation: "+28.40 m Kotu",
    drawingScale: "1:100 / Masterplan",
    templateName: "Akdeniz Teraslı Villa Şablonu",
    plants: [
      { name: "Asırlık Zeytin", botanical: "Olea europaea", tag: "Ana Karakter Ağacı" },
      { name: "İngiliz Lavantası", botanical: "Lavandula angustifolia", tag: "Mevsimlik Renk" },
      { name: "Biberiye Çalısı", botanical: "Rosmarinus officinalis", tag: "Koku & Doku" },
      { name: "Sütun Servi", botanical: "Cupressus sempervirens", tag: "Dikey Aks Vurgusu" },
    ],
    materials: [
      { name: "Bodrum Kayrak Taşı", texture: "Doğal Yarıklı Yüzey", color: "#B8ADA0" },
      { name: "Teak Ahşap Güverte", texture: "Fırçalanmış Mat Doku", color: "#8E6B4F" },
      { name: "Bazalt Havuz Kenarı", texture: "Honlu Koyu Yüzey", color: "#3B403D" },
    ],
    detailImage: "/images/detail-lighting.jpg",
    summary:
      "Zeytin ağaçlarıyla tanımlanan teraslı arazide, denize açılan sakin bir yaşam sekansı.",
    story: [
      "Arazinin mevcut zeytinlik dokusunu koruyarak kurgulanan tasarım, evin iç mekân aksını doğrudan denize taşıyan bir su yüzeyiyle tamamlanıyor.",
      "Kuru iklime uyumlu Akdeniz bitki paleti; lavanta, biberiye, kekik ve sedir dokularıyla mevsimsel bir ritim kuruyor.",
      "Gece senaryosu, sadece yürüme yüzeylerini ve gövdeleri aydınlatan düşük seviyeli armatürlerle kurgulandı; gökyüzü karanlık kaldı.",
    ],
  },
  {
    slug: "kiyi-evi",
    plateNo: "LEVHA 02",
    title: "Kıyı Evi Peyzajı",
    location: "Urla, İzmir",
    year: "2025",
    category: "Özel Konut",
    area: "1.850 m²",
    scope: [
      "Arazi kurgusu",
      "Kazıklı ahşap teras",
      "Tuzcul bitkilendirme",
      "Rüzgâr kırıcı tasarım",
    ],
    cover: coastalImg,
    gallery: [coastalImg, detailLight, villaImg],
    verticalVideo: verticalCoastal.url,
    coordinates: "38° 19' 11\" N · 26° 46' 30\" E",
    elevation: "+4.10 m Kıyı Kotu",
    drawingScale: "1:150 / Kesit & Plan",
    templateName: "Kıyı Şeridi & Rüzgâr Şablonu",
    plants: [
      { name: "Ilgın Ağacı", botanical: "Tamarix smyrnensis", tag: "Tuzcul Rüzgâr Kırıcı" },
      { name: "Tüylü Süs Otu", botanical: "Stipa tenuissima", tag: "Rüzgâr Hareketi" },
      { name: "Kum Zambağı", botanical: "Pancratium maritimum", tag: "Koruma Altında Tür" },
    ],
    materials: [
      { name: "Gri Patinalı Iroko", texture: "Doğal Eskitme Ahşap", color: "#7B7A75" },
      { name: "Urla Doğal Taşı", texture: "Kumlu Kireçtaşı", color: "#D7CBB5" },
      { name: "Kortikal Çakıl", texture: "Yuvarlak Kıyı Çakılı", color: "#A8A297" },
    ],
    detailImage: "/images/detail-planting.jpg",
    summary: "Rüzgâra açık kıyı bandında, doğal otlarla iç içe geçen minimal bir teras dizisi.",
    story: [
      "Tuzlu rüzgâra dayanıklı yerel türlerle çalışıldı; peyzaj, zamanla kendi kendini onaran bir sistem olarak tasarlandı.",
      "Ahşap platformlar, mevcut topografyayı bozmadan farklı kotlarda oturma ve seyir noktaları üretiyor.",
      "Malzeme paleti sade: gri-doğal ahşap, yerel taş ve otlar.",
    ],
  },
  {
    slug: "kent-parki",
    plateNo: "LEVHA 03",
    title: "Kent Parkı",
    location: "Ankara",
    year: "2024",
    category: "Kamusal Alan",
    area: "24.000 m²",
    scope: ["Kentsel tasarım", "Yağmur bahçeleri", "Geçirgen zemin", "Kent mobilyası tasarımı"],
    cover: parkImg,
    gallery: [parkImg, officeImg, courtyardImg],
    video: parkVideo.url,
    coordinates: "39° 55' 40\" N · 32° 51' 10\" E",
    elevation: "+850.00 m Plato Kotu",
    drawingScale: "1:500 / Kentsel Omurga",
    templateName: "Ekolojik Yağmur Parkı Şablonu",
    plants: [
      { name: "Doğu Çınarı", botanical: "Platanus orientalis", tag: "Geniş Taç Gölge" },
      { name: "Sarı Bataklık Süseni", botanical: "Iris pseudacorus", tag: "Biyo-Filtre Bitkisi" },
      { name: "Gümüşi Ihlamur", botanical: "Tilia tomentosa", tag: "Mevsimlik Koku" },
    ],
    materials: [
      { name: "Geçirgen Mimari Beton", texture: "Yıkanmış Agregalı", color: "#9E9D97" },
      { name: "Corten Çelik Levha", texture: "Oksitli Pas Dokusu", color: "#B85D36" },
      { name: "Granit Parke Taşı", texture: "Alevli Kaymaz Yüzey", color: "#6A6E6B" },
    ],
    detailImage: "/images/detail-water.jpg",
    summary: "Yağmur suyunu yüzeyde tutan, uzun oturma bantlarıyla tanımlanmış bir kamusal peyzaj.",
    story: [
      "Park, sert zeminden bitkisel yüzeye kademeli geçen bir kesit üzerine kuruldu.",
      "Yağmur bahçeleri yüzey akışını toplayarak sulama ihtiyacını belirgin biçimde düşürüyor.",
      "Beton oturma bantları, gölge veren ağaç dizileriyle birlikte gün boyu kullanım üretiyor.",
    ],
  },
  {
    slug: "butik-otel",
    plateNo: "LEVHA 04",
    title: "Butik Otel Avlusu",
    location: "Alaçatı, İzmir",
    year: "2024",
    category: "Konaklama",
    area: "2.100 m²",
    scope: [
      "Avlu mimarisi",
      "Yansıma su havuzu",
      "Pergola & gölge tasarımı",
      "Peyzaj aydınlatması",
    ],
    cover: hotelImg,
    gallery: [hotelImg, detailLight, courtyardImg],
    verticalVideo: verticalGarden.url,
    coordinates: "38° 16' 50\" N · 26° 22' 15\" E",
    elevation: "+16.00 m Avlu Kotu",
    drawingScale: "1:100 / İç Mekân - Avlu",
    templateName: "İçe Dönük Avlu & Işık Şablonu",
    plants: [
      {
        name: "Bodrum Begonvili",
        botanical: "Bougainvillea spectabilis",
        tag: "Gölge Saçak Örtüsü",
      },
      { name: "İncir Ağacı", botanical: "Ficus carica", tag: "Heykelsi Yaprak Dokusu" },
      { name: "Kokulu Yasemin", botanical: "Jasminum officinale", tag: "Akşam Kokusu" },
    ],
    materials: [
      { name: "Alaçatı Kireçtaşı", texture: "El Kırımı Yontma Taş", color: "#ECE3D2" },
      { name: "Siyah Mermer Havuz", texture: "Cilalı Ayna Yansıma", color: "#1F2321" },
      { name: "Masif Kestane Ahşap", texture: "Doğal Yağlı Yüzey", color: "#7A5636" },
    ],
    detailImage: "/images/detail-lighting.jpg",
    summary: "Yansıma havuzu ve gölge dokusuyla kurulan içe dönük bir konukluk deneyimi.",
    story: [
      "Avlu, uzun bir yansıma havuzu etrafında simetrisi kırılmış bir düzende kurgulandı.",
      "Tırmanıcı bitkiler ve pergola gölgesi, sıcak iklimde gün ortası kullanımını mümkün kılıyor.",
      "Akşam aydınlatması, malzeme dokularını öne çıkaran sıcak bir tonda tutuldu.",
    ],
  },
  {
    slug: "yesil-ofis",
    plateNo: "LEVHA 05",
    title: "Yeşil Ofis Terası",
    location: "İstanbul",
    year: "2023",
    category: "Kurumsal",
    area: "1.200 m²",
    scope: [
      "Çatı peyzajı",
      "Modüler saksı omurgası",
      "Hafifletilmiş substrat",
      "Sürdürülebilir sulama",
    ],
    cover: officeImg,
    gallery: [officeImg, parkImg, detailLight],
    coordinates: "41° 04' 30\" N · 29° 01' 20\" E",
    elevation: "+112.00 m Çatı Kotu",
    drawingScale: "1:200 / Teras Planı",
    templateName: "Biyo-Çeşitli Çatı Bahçesi Şablonu",
    plants: [
      { name: "Sedum Damkoruğu", botanical: "Sedum album", tag: "Ekstansif Çatı Örtüsü" },
      { name: "Mavi Koyun Yumağı", botanical: "Festuca glauca", tag: "Rüzgâra Dayanıklı" },
      { name: "Adaçayı Otu", botanical: "Salvia nemorosa", tag: "Mevsimlik Mor Çiçek" },
    ],
    materials: [
      { name: "Antrasit Alüminyum Saksı", texture: "Elektrostatik Toz Boya", color: "#2B302D" },
      { name: "Hafifletilmiş Pomza Taşı", texture: "Gözeli Drenaj Katmanı", color: "#878C88" },
      { name: "Geri Dönüşümlü Kompozit", texture: "Kaymaz Zemin Plakası", color: "#54524C" },
    ],
    detailImage: "/images/detail-water.jpg",
    summary: "Çatı katında, düşük bakım gerektiren süs otlarıyla kurulmuş bir çalışma bahçesi.",
    story: [
      "Yapısal yük sınırları içinde çalışan hafif substrat ve modüler saksı sistemi geliştirildi.",
      "Süs otları, rüzgârlı kotta hareket ve mevsimsel renk sağlıyor.",
      "Toplanan yağmur suyu, damlama sulama hattını besliyor.",
    ],
  },
  {
    slug: "modern-avlu",
    plateNo: "LEVHA 06",
    title: "Modern Avlu",
    location: "Çeşme, İzmir",
    year: "2023",
    category: "Özel Konut",
    area: "260 m²",
    scope: ["Avlu tasarımı", "Heykelsi tek ağaç kurgusu", "Mineral yüzey", "Monolitik duvar"],
    cover: courtyardImg,
    gallery: [courtyardImg, villaImg, detailLight],
    coordinates: "38° 18' 40\" N · 26° 18' 10\" E",
    elevation: "+9.00 m Avlu Kotu",
    drawingScale: "1:50 / Detay Kesiti",
    templateName: "İçe Dönük Avlu & Işık Şablonu",
    plants: [
      {
        name: "Monolitik Bonsai Zeytin",
        botanical: "Olea europaea 'Forma'",
        tag: "Heykelsi Merkez",
      },
      { name: "Siyah Bambu", botanical: "Phyllostachys nigra", tag: "Rüzgâr Sesi Bariyeri" },
    ],
    materials: [
      { name: "Taranmış Beyaz Kuvars Çakıl", texture: "Kuru Bahçe Deseni", color: "#F0EAE1" },
      { name: "Brüt Beton Duvar", texture: "Pürüzsüz Kalıp Dokusu", color: "#8E918E" },
      { name: "Koyu Bazalt Plak", texture: "Ateşlenmiş Adım Taşları", color: "#282B29" },
    ],
    detailImage: "/images/detail-planting.jpg",
    summary: "Tek bir heykelsi ağaç, taranmış çakıl ve beton duvarla kurulan sessiz bir boşluk.",
    story: [
      "Avlu, evin iç mekânından bakıldığında değişmeyen ama gün içinde gölgesiyle dönüşen bir kompozisyon.",
      "Mineral yüzey, bakım yükünü neredeyse sıfıra indiriyor.",
      "Tasarımın tamamı tek bir ağacın oranları üzerinden kuruldu.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
