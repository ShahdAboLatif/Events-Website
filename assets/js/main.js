// ============================================
// DATA: Our events (like a small database)
// ============================================
let events = [
    {
        id: 1,
        title: "رحلة إلى قرية قنوات الآثار",
        category: "رياضة",
        date: "2026-04-30",
        location: "قنوات",
        image: "./assets/img/qanauat1.jpg",
        mapImg: "./assets/img/qanauatmap.jpg",
        description: "استكشاف ساحر لآثار مدينة قنوات التاريخية (كاناثا القديمة)، حيث تأخذكم هذه الرحلة عبر الزمن بين المعابد الرومانية، الكنائس البيزنطية، والقصور الأثرية التي تعكس عراقة العمارة في جبل العرب.",
        gallery: ["./assets/img/qanauat1.jpg", "./assets/img/qanauat2.jpg", "./assets/img/qanauat3.jpg", "./assets/img/qanauat4.jpg", "./assets/img/qanauatmap.jpg"]
    },
    {
        id: 2,
        title: "رحلة إلى سد الرحى",
        category: "رياضة",
        date: "2026-04-28",
        location: "الرحى",
        image: "./assets/img/dam1.jpg",
        mapImg: "./assets/img/dammap.jpg",
        description: "يوم مخصص للاستجمام والاستمتاع بالطبيعة الخلابة عند سد الرحى. تشمل الرحلة جولات مشي حول البحيرة، وفرصاً لالتقاط أجمل الصور الطبيعية بعيداً عن ضجيج المدينة في أجواء ربيعية منعشة.",
        gallery: ["./assets/img/dam1.jpg", "./assets/img/dam2.jpg", "./assets/img/dam3.jpg", "./assets/img/dammap.jpg"]
    },
    {
        id: 3,
        title: "ملتقى الجامعات العربية",
        category: "ثقافة",
        date: "2026-05-02",
        location: "مركز دبي التجاري",
        image: "./assets/img/syevent1.jpg",
        mapImg: "./assets/img/syevent_map.jpg",
        description: "حدث أكاديمي رائد يجمع كبرى الجامعات والمؤسسات التعليمية من مختلف أنحاء الوطن العربي، لتبادل الخبرات ومناقشة مستقبل التعليم العالي وفتح آفاق جديدة للطلاب والباحثين.",
        gallery: ["./assets/img/syevent1.jpg", "./assets/img/syevent2.jpg", "./assets/img/syevent3.jpg", "./assets/img/syevent4.jpg", "./assets/img/syevent_map.jpg"]
    },
    {
        id: 4,
        title: "معرض الكتاب",
        category: "ثقافة",
        date: "2026-03-02",
        location: "دمشق",
        image: "./assets/img/book1.jpg",
        mapImg: "./assets/img/book_map.jpg",
        description: "مشاركة الجامعة الافتراضية السورية في معرض دمشق الدولي للكتاب 2026، حيث تقدم عرضاً مفصلاً عن خدماتها الأكاديمية والتعريف بالبرامج المتاحة عبر تقنية QR Code.",
        gallery: ["./assets/img/book1.jpg", "./assets/img/book2.jpg", "./assets/img/book3.jpg", "./assets/img/book4.jpg", "./assets/img/book5.jpg", "./assets/img/book_map.jpg"]
    },
    {
        id: 5,
        title: "ماراثون البرمجة",
        category: "تعليمي",
        date: "2026-05-18",
        location: "دمشق",
        image: "./assets/img/quiz2.jpg",
        mapImg: "./assets/img/quiz_map.jpg",
        description: "استضافة المسابقة البرمجية التأهيلية لأكاديمية Time Door اليابانية بمشاركة 360 طالباً، لتعزيز المهارات التقنية وربط التعليم الجامعي بخدمة المجتمع.",
        gallery: ["./assets/img/quiz1.jpg", "./assets/img/quiz2.jpg", "./assets/img/quiz3.jpg", "./assets/img/quiz_map.jpg"]
    },
    {
        id: 6,
        title: "امسية مويسقية",
        category: "موسيقى",
        date: "2026-04-18",
        location: "دمشق",
        image: "./assets/img/opera1.jpg",
        mapImg: "./assets/img/opera_map.jpg",
        description: "عرض مسرحي بعنوان 'أصل الحكاية' لفرقة آشتي للتراث الكردي بدار الأوبرا، يجسد لوحات راقصة وغنائية تراثية برعاية وزارة الثقافة السورية.",
        gallery: ["./assets/img/opera1.jpg", "./assets/img/opera2.jpg", "./assets/img/opera3.jpg", "./assets/img/opera4.jpg", "./assets/img/opera5.jpg", "./assets/img/opera_map.jpg"]
    }

];


//contact page
function validateInputs(event) {

    // prevent the page from refreshing
    event.preventDefault();

    // get alert items
    let errAlert = document.getElementById("errorAlert");
    let emailErrAlert = document.getElementById("emailAlert");
    let successAlert = document.getElementById("successAlert");

    // HIDE ALL ALERTS FIRST (add this)
    errAlert.classList.add("d-none");
    emailErrAlert.classList.add("d-none");
    successAlert.classList.add("d-none");

    //    get values
    let inputs = [
        document.getElementById('fullName').value,
        document.getElementById('email').value,
        document.getElementById('message').value
    ];

    // the correct email pattern to check with the email value 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check if all values are not empty 
    let isEmpty = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].trim() === "") {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
        errAlert.classList.remove("d-none");

    }
    else if (!emailPattern.test(inputs[1])) {
        emailErrAlert.classList.remove("d-none");
    }
    else {
        successAlert.classList.remove("d-none");
    }
}

//events page
// an array of all events we have
// const allEvents = [
//     { title: "ندوة تقنية", date: "2024-05", category: "تعليمي", img: "event01.jpg" },
//     { title: "بطولة تنس", date: "2024-06", category: "رياضي", img: "event02.jpg" },
//     { title: "ماراثون البرمجة", date: "2024-07", category: "تقني", img: "event03.jpg" },
//     { title: "دورة في الذكاء الاصطناعي", date: "2024-08", category: "تعليمي", img: "event04.jpg" },
//     { title: "معرض مشاريع التخرج التقنية", date: "2024-09", category: "أكاديمي", img: "event05.jpg" },
//     { title: "منتدى المحاسبة والتدقيق", date: "2024-10", category: "مهني", img: "event06.jpg" },
//     { title: "دورة التحليل المالي ", date: "2024-11", category: "تعليمي", img: "event07.jpg" },
//     { title: "حفل تخرج الدفعة الجديدة", date: "2024-09", category: "احتفالي", img: "event08.jpg" }
// ];

// function showEvents(events) {
//     const list = document.getElementById("eventsList");

// }



function displayEvents() {
    const container = document.getElementById("eventsContainer");
    if (!container) return;

    container.innerHTML = ''; // Clear existing content

    events.forEach(event => {
        const cardHTML =
            `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text text-muted">التاريخ: ${event.date}</p>
                        <p class="card-text text-muted">المكان: ${event.location}</p>
                        <p class="card-text text-muted">التصنيف: ${event.category}</p>
                        <p class="card-text text-muted text-truncate">الوصف: ${event.description}</p>
                        <button class="btn btn-primary" onclick="goToEvent(${event.id})">
                            عرض التفاصيل
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ============================================
// NAVIGATION TO EVENT DETAILS
// ============================================
function goToEvent(eventId) {
    localStorage.setItem("selectedEventId", eventId);
    window.location.href = "event.html";
}

// display filtered events 

function displayFilteredEvents() {
    // get filters values 
    var selectedPlace = document.getElementById("placeFilter").value;
    var selectedDate = document.getElementById("dateFilter").value;
    var selectedCategory = document.getElementById("categoryFilter").value;
    // get the event's container and empty it 
    var container = document.getElementById("eventsContainer");
    container.innerHTML = '';

    // declare a new array for the filtered events 
    var filteredResults = [];

    //  fill the filtered list 
    for (var i = 0; i < events.length; i++) {
        var currentEvent = events[i];


        var placeMatch = (selectedPlace === "all" || currentEvent.location === selectedPlace);
        var categoryMatch = (selectedCategory === "all" || currentEvent.category === selectedCategory);
        var dateMatch = (selectedDate === "" || currentEvent.date === selectedDate);

        if (placeMatch && categoryMatch && dateMatch) {
            filteredResults.push(currentEvent);
        }
    }

    // fill the container with the filtered events 
    filteredResults.forEach(event => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text text-muted">التاريخ: ${event.date}</p>
                        <p class="card-text text-muted">المكان: ${event.location}</p>
                        <p class="card-text text-muted">التصنيف: ${event.category}</p>
                        <p class="card-text text-muted text-truncate">الوصف: ${event.description}</p>
                        <button class="btn btn-primary" onclick="goToEvent(${event.id})">
                            عرض التفاصيل
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

}


// EVENT DETAILS PAGE

function displayEventDetails() {
    const detailsDiv = document.getElementById("eventDetails");
    if (!detailsDiv) return;

    const savedId = localStorage.getItem("selectedEventId");
    const event = events.find(e => e.id == savedId);

    if (event) {

        let galleryHTML = "";
        for (let i = 0; i < event.gallery.length; i++) {
            galleryHTML += `
                <div class="col-4">
                    <img src="${event.gallery[i]}" class="img-fluid rounded" alt="صورة ${i + 1}">
                </div>
            `;
        }

        detailsDiv.innerHTML = `
            <div class="card shadow">
                <img src="${event.image}" class="card-img-top" alt="${event.title}">
                
                <div class="card-body">
                    <h2 class="card-title">${event.title}</h2>
                    <p><strong>التاريخ:</strong> ${event.date}</p>
                    <p><strong>المكان:</strong> ${event.location}</p>
                    <hr>
                    <p class="card-text">${event.description}</p>
                    <h4 class="mt-4 mb-3">معرض الصور</h4>
                    <div class="row g-2">
                        ${galleryHTML}
                    </div>
                    <button class="btn btn-success">إضافة إلى التقويم</button>
                    <button class="btn btn-outline-primary">المشاركة</button>
                </div>
            </div>
        `;
    } else {
        detailsDiv.innerHTML = `<div class="alert alert-danger">الفعالية غير موجودة!</div>`;
    }
}

function showStaticRelated() {
    const relatedContainer = document.getElementById("staticRelatedEvents");
    if (!relatedContainer) return;

    const staticList = events.slice(0, 3);

    relatedContainer.innerHTML = "";

    staticList.forEach(e => {
        relatedContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${e.image}" class="card-img-top" alt="${e.title}" style="height: 160px; object-fit: cover;">
                    
                    <div class="card-body text-center">
                        <h6 class="card-title text-truncate">${e.title}</h6>
                        
                        <button class="btn btn-sm btn-primary mt-2" onclick="goToEvent(${e.id})">
                            عرض التفاصيل
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// home page

function showWeeklyEvents() {
    // call the container
    const container = document.getElementById("weeklyEventsList");
    if (!container) return;

    // empty the container
    container.innerHTML = "";

    // range of the current week dates
    const startDate = "2026-04-28";
    const endDate = "2026-05-02";


    // get the current week events from the events array
    events.forEach(event => {
        // check if the date of the current event is in the range 
        if (event.date >= startDate && event.date <= endDate) {

            // the template of the events cards using bootstarp 
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                            <p class="card-text text-muted small">${event.date}</p>
                            <p class="card-text text-truncate">${event.description}</p>
                            <button class="btn btn-outline-primary w-100" onclick="goToEvent(${event.id})">
                                عرض التفاصيل
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    // if there is no events in this range give back this sentance
    if (container.innerHTML === "") {
        container.innerHTML = "<p class='text-center'>لا توجد فعاليات بارزة في هذا النطاق الزمني.</p>";
    }
}

// badges filters
function filterByBadge(category) {
    const container = document.getElementById("weeklyEventsList");
    container.innerHTML = ""; 

    events.forEach(event => {
        if (category === 'all' || event.category === category) {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${event.image}" class="card-img-top" style="height: 180px; object-fit: cover;">
                        <div class="card-body">
                            <h6 class="card-title">${event.title}</h6>
                            <span class="badge bg-info text-dark mb-2">${event.category}</span>
                            <button class="btn btn-sm btn-primary w-100 d-block" onclick="goToEvent(${event.id})">عرض</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}
// current week imgs 
function loadWeeklyGallery() {
    const galleryContainer = document.getElementById("weeklyGallery");
    if (!galleryContainer) return;

    // the current week range
    const startDate = "2026-04-28";
    const endDate = "2026-05-02";

    let allImagesHTML = "";

    events.forEach(event => {
        // check event date
        if (event.date >= startDate && event.date <= endDate) {
            
            // the template
            event.gallery.forEach(imgUrl => {
                allImagesHTML += `
                    <div class="col-lg-3 col-md-4 col-6 mb-2">
                        <div class="gallery-item">
                            <img src="${imgUrl}" class="img-fluid rounded shadow-sm" 
                                 alt="صورة فعالية" 
                                 style="height: 180px; width: 100%; object-fit: cover; cursor: pointer;">
                        </div>
                    </div>
                `;
            });
        }
    });

    // وضع كل الصور في الحاوية
    galleryContainer.innerHTML = allImagesHTML || "<p class='text-center'>لا توجد صور متوفرة لهذا الأسبوع.</p>";
}