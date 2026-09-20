// Nomor WhatsApp Tujuan (Ganti sesuai nomor WhatsApp Anda)
const WHATSAPP_NUMBER = "6281234567890";

// Data Paket Tour Sesuai tugas.txt + Harga Lengkap
const tourPackages = [
    {
        id: "ubud",
        name: "Tour Ubud Bali",
        badge: "PALING POPULER",
        price: 500000,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        itinerary: [
            "Tegenungan / Kanto Lampo Waterfall",
            "Coffee Plantation (Kopi Luwak)",
            "Sacred Monkey Forest Sanctuary",
            "Saraswati Temple Ubud",
            "Tegalalang Ricefield Terraces"
        ]
    },
    {
        id: "east",
        name: "East Bali Tour",
        badge: "BEST SELLER",
        price: 650000,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        itinerary: [
            "Lempuyang Temple (Gates of Heaven)",
            "Tirta Gangga Water Palace",
            "Besakih Mother Temple",
            "Candi Dasa Beach Area"
        ]
    },
    {
        id: "uluwatu",
        name: "Uluwatu Beach Tour",
        badge: "FAVORIT SUNSET",
        price: 550000,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
        itinerary: [
            "Pantai Melasti",
            "Pantai Padang Padang",
            "Dreamland Beach",
            "Pura Uluwatu & Pertunjukan Tari Kecak"
        ]
    },
    {
        id: "bedugul",
        name: "Bedugul Tour",
        badge: "INDAH & SEJUK",
        price: 550000,
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",
        itinerary: [
            "Taman Ayun Temple Mengwi",
            "Tanah Lot Temple Sunset",
            "Ulun Danu Beratan Temple",
            "Pasar Tradisional Candi Kuning"
        ]
    },
    {
        id: "volcano",
        name: "Volcano Tour",
        badge: "VIEW GUNUNG",
        price: 600000,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        itinerary: [
            "Tampaksiring (Pura Tirta Empul)",
            "Kintamani (View Gunung & Danau Batur)",
            "Pura Goa Gajah",
            "Kanto Lampo / Air Terjun Bali"
        ]
    }
];

// Data Aktivitas di Bali Sesuai tugas.txt + Harga
const activities = [
    { id: "tracking", name: "Mount Batur Sunrise Tracking", price: 350000, icon: "fa-person-hiking", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" },
    { id: "tubing", name: "River Tubing Adventure", price: 250000, icon: "fa-water", image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=500&q=80" },
    { id: "rafting", name: "White Water Rafting (Ayung)", price: 300000, icon: "fa-ship", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=500&q=80" },
    { id: "quadbike", name: "Quad Bike (ATV Ride)", price: 400000, icon: "fa-motorcycle", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80" },
    { id: "dolphin", name: "Lovina Dolphin Watching", price: 200000, icon: "fa-fish", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" },
    { id: "watersport", name: "Tanjung Benoa Watersport", price: 350000, icon: "fa-swimmer", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=80" },
    { id: "swing", name: "Bali Jungle Swing", price: 150000, icon: "fa-child", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80" },
    { id: "paintball", name: "Paintball Battle", price: 200000, icon: "fa-crosshairs", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=500&q=80" },
    { id: "dirtybike", name: "Dirty Bike / Dirt Trail", price: 500000, icon: "fa-bicycle", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80" },
    { id: "balisafari", name: "Bali Safari & Marine Park", price: 450000, icon: "fa-hippo", image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=500&q=80" },
    { id: "balizoo", name: "Bali Zoo Explorer", price: 300000, icon: "fa-paw", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80" }
];

let selectedTour = null;
let selectedActivitiesInModal = [];

function formatRupiah(amount) {
    return "Rp " + amount.toLocaleString("id-ID");
}

// Render Paket Tour
function renderTours() {
    const container = document.getElementById("tour-container");
    container.innerHTML = "";

    tourPackages.forEach(tour => {
        const itineraryHtml = tour.itinerary.map(item => `
            <li><i class="fa-solid fa-circle-check"></i> ${item}</li>
        `).join('');

        container.innerHTML += `
            <div class="tour-card">
                <span class="tour-badge-tag">${tour.badge}</span>
                <div class="tour-img-wrapper">
                    <img src="${tour.image}" alt="${tour.name}">
                </div>
                <div class="tour-body">
                    <h3 class="tour-title">${tour.name}</h3>
                    <ul class="itinerary-preview">
                        ${itineraryHtml}
                    </ul>
                    <div class="tour-footer">
                        <div class="price-tag">
                            <span>Harga Paket Car:</span>
                            <strong>${formatRupiah(tour.price)}</strong>
                        </div>
                        <button class="btn-detail-tour" onclick="openTourModal('${tour.id}')">
                            <i class="fa-solid fa-plus"></i> Custom / Pesan
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Render Aktivitas
function renderActivities() {
    const container = document.getElementById("activity-container");
    container.innerHTML = "";

    activities.forEach(act => {
        container.innerHTML += `
            <div class="activity-card">
                <div class="activity-img-wrapper">
                    <img src="${act.image}" alt="${act.name}">
                </div>
                <div class="activity-body">
                    <h4 class="activity-title">${act.name}</h4>
                    <div class="activity-price">${formatRupiah(act.price)} <small style="font-size: 0.75rem; color:#94a3b8;">/pax</small></div>
                    <button class="btn-act-wa" onclick="orderSingleActivityToWA('${act.name}', ${act.price})">
                        <i class="fa-brands fa-whatsapp"></i> Pesan Aktivitas
                    </button>
                </div>
            </div>
        `;
    });
}

// Buka Modal Tour
function openTourModal(tourId) {
    selectedTour = tourPackages.find(t => t.id === tourId);
    selectedActivitiesInModal = [];

    // Header Modal
    document.getElementById("modal-header").style.backgroundImage = `url('${selectedTour.image}')`;
    document.getElementById("modal-header").innerHTML = `<h2>${selectedTour.name}</h2>`;

    // Itinerary Modal
    const itineraryContainer = document.getElementById("modal-itinerary");
    itineraryContainer.innerHTML = selectedTour.itinerary.map(item => `<li>${item}</li>`).join('');

    // Opsi Checklist Aktivitas
    const optionsContainer = document.getElementById("modal-activity-options");
    optionsContainer.innerHTML = activities.map(act => `
        <label class="activity-option-item">
            <div>
                <input type="checkbox" value="${act.id}" onchange="toggleModalActivity('${act.id}')">
                <span>${act.name}</span>
            </div>
            <strong>+${formatRupiah(act.price)}</strong>
        </label>
    `).join('');

    // Set Default Tanggal ke Besok
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById("order-date").valueAsDate = tomorrow;

    updateModalPrice();
    document.getElementById("tour-modal").classList.add("active");
}

function closeModal() {
    document.getElementById("tour-modal").classList.remove("active");
}

// Toggle Tambah Aktivitas di Modal
function toggleModalActivity(actId) {
    const index = selectedActivitiesInModal.indexOf(actId);
    if (index > -1) {
        selectedActivitiesInModal.splice(index, 1);
    } else {
        selectedActivitiesInModal.push(actId);
    }
    updateModalPrice();
}

// Hitung Total Harga di Modal
function updateModalPrice() {
    const basePrice = selectedTour ? selectedTour.price : 0;
    let extraPrice = 0;

    selectedActivitiesInModal.forEach(actId => {
        const act = activities.find(a => a.id === actId);
        if (act) extraPrice += act.price;
    });

    const totalPrice = basePrice + extraPrice;

    document.getElementById("base-price-display").innerText = formatRupiah(basePrice);
    document.getElementById("extra-price-display").innerText = formatRupiah(extraPrice);
    document.getElementById("total-price-display").innerText = formatRupiah(totalPrice);
}

// Kirim Order Paket Tour + Custom Aktivitas ke WhatsApp
function submitTourOrderToWA() {
    const dateVal = document.getElementById("order-date").value;
    const paxVal = document.getElementById("order-pax").value || 2;
    const noteVal = document.getElementById("order-note").value || "-";

    const basePrice = selectedTour.price;
    let extraPrice = 0;
    let extraListText = "";

    if (selectedActivitiesInModal.length > 0) {
        extraListText = "\n📌 *Aktivitas Tambahan:*";
        selectedActivitiesInModal.forEach((actId, i) => {
            const act = activities.find(a => a.id === actId);
            if (act) {
                extraPrice += act.price;
                extraListText += `\n   ${i + 1}. ${act.name} (${formatRupiah(act.price)})`;
            }
        });
    } else {
        extraListText = "\n📌 *Aktivitas Tambahan:* Tidak Ada";
    }

    const totalPrice = basePrice + extraPrice;

    const message = `Halo Bali Scenic Tours! Saya ingin memesan paket tour privat:\n\n` +
        `🚗 *Paket Tour:* ${selectedTour.name}\n` +
        `📅 *Tanggal:* ${dateVal}\n` +
        `👥 *Jumlah Peserta:* ${paxVal} orang\n` +
        `${extraListText}\n\n` +
        `💰 *Harga Base Car:* ${formatRupiah(basePrice)}\n` +
        `💰 *Total Estimasi:* ${formatRupiah(totalPrice)}\n` +
        `📝 *Catatan:* ${noteVal}\n\n` +
        `Mohon konfirmasi ketersediaan armada dan penjemputan. Terima kasih!`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

// Kirim Order Single Aktivitas ke WhatsApp
function orderSingleActivityToWA(actName, actPrice) {
    const message = `Halo Bali Scenic Tours! Saya ingin pesan voucher aktivitas berikut:\n\n` +
        `🎯 *Aktivitas:* ${actName}\n` +
        `💰 *Harga:* ${formatRupiah(actPrice)} / pax\n\n` +
        `Mohon info ketersediaan slot dan penjemputan. Terima kasih!`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

// Mobile Nav Menu Handler
document.getElementById("mobile-toggle").addEventListener("click", () => {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
});

function closeMobileNav() {
    document.getElementById("mobile-nav").style.display = "none";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => {
    renderTours();
    renderActivities();
};