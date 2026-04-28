//contact page
function validateInputs(event){

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
const allEvents = [
    { title: "ندوة تقنية", date: "2024-05", category: "تعليمي", img: "event01.jpg" },
    { title: "بطولة تنس", date: "2024-06", category: "رياضي", img: "event02.jpg" },
    { title: "ماراثون البرمجة", date: "2024-07", category: "تقني", img: "event03.jpg" },
    { title: "دورة في الذكاء الاصطناعي", date: "2024-08", category: "تعليمي", img: "event04.jpg" },
    { title: "معرض مشاريع التخرج التقنية", date: "2024-09", category: "أكاديمي", img: "event05.jpg" },
    { title: "منتدى المحاسبة والتدقيق", date: "2024-10", category: "مهني", img: "event06.jpg" },
    { title: "دورة التحليل المالي ", date: "2024-11", category: "تعليمي", img: "event07.jpg" },
    { title: "حفل تخرج الدفعة الجديدة", date: "2024-09", category: "احتفالي", img: "event08.jpg" }
];

function showEvents(events) {
    const list = document.getElementById("eventsList");

}

// ============================================
// DATA: Our events (like a small database)
// ============================================
let events = [
    {
        id: 1,
        title: "رحلة إلى قرية قنوات الآثار",
        catagory:"رياضة",
        date: "26/04/2026",
        location: "قنوات",
        image: "./assets/img/qanauat1.jpg",
        mapImg: "./assets/img/qanauatmap.jpg",
        description: "استكشاف ساحر لآثار مدينة قنوات التاريخية (كاناثا القديمة)، حيث تأخذكم هذه الرحلة عبر الزمن بين المعابد الرومانية، الكنائس البيزنطية، والقصور الأثرية التي تعكس عراقة العمارة في جبل العرب.",
        gallery: ["./assets/img/qanauat1.jpg","./assets/img/qanauat2.jpg","./assets/img/qanauat3.jpg","./assets/img/qanauat4.jpg"]
    },
    {
        id: 2,
        title: "رحلة إلى سد الرحى",
        catagory:"رياضة",
        date: "28/04/2026",
        location: "الرحى",
        image: "./assets/img/dam1.jpg",
        mapImg: "./assets/img/dammap.jpg",
        description: "يوم مخصص للاستجمام والاستمتاع بالطبيعة الخلابة عند سد الرحى. تشمل الرحلة جولات مشي حول البحيرة، وفرصاً لالتقاط أجمل الصور الطبيعية بعيداً عن ضجيج المدينة في أجواء ربيعية منعشة.",
        gallery: ["./assets/img/dam1.jpg","./assets/img/dam2.jpg","./assets/img/dam3.jpg"]
    },
    {
        id: 3,
        title: "ملتقى الجامعات العربية",
        catagory:"ثقافة",
        date: "02/05/2026",
        location: "مركز دبي التجاري",
        image: "./assets/img/book1.jpg",
        mapImg: "./assets/img/qanauatmap.jpg",
        description: "حدث أكاديمي رائد يجمع كبرى الجامعات والمؤسسات التعليمية من مختلف أنحاء الوطن العربي، لتبادل الخبرات ومناقشة مستقبل التعليم العالي وفتح آفاق جديدة للطلاب والباحثين.",
        gallery: ["./assets/img/book1.jpg","./assets/img/book2.jpg","./assets/img/book3.jpg","./assets/img/book4.jpg","./assets/img/book5.jpg"]
    }
];

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
                        <p class="card-text text-muted">${event.date}</p>
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

// ============================================
// EVENT DETAILS PAGE
// ============================================
function displayEventDetails() {
    const detailsDiv = document.getElementById("eventDetails");
    if (!detailsDiv) return;

    const savedId = localStorage.getItem("selectedEventId");
    const event = events.find(e => e.id == savedId);

    if (event) {
        detailsDiv.innerHTML = `
            <div class="card shadow">
                <img src="${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body">
                    <h2 class="card-title">${event.title}</h2>
                    <p><strong>التاريخ:</strong> ${event.date}</p>
                    <p><strong>المكان:</strong> ${event.location}</p>
                    <hr>
                    <p class="card-text">${event.description}</p>
                    <button class="btn btn-success">إضافة إلى التقويم</button>
                    <button class="btn btn-outline-primary">المشاركة</button>
                </div>
            </div>
        `;
    } else {
        detailsDiv.innerHTML = `<div class="alert alert-danger">الفعالية غير موجودة!</div>`;
    }
}