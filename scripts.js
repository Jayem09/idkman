// Modal Functionality
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Room Data
const roomData = {
    "room-a": {
        title: "Room A",
        price: "$500/month",
        location: "Downtown",
        description: "Spacious room with a great view, furnished with modern amenities.",
        image: "room-a.jpg"
    },
    "room-b": {
        title: "Room B",
        price: "$400/month",
        location: "Suburb",
        description: "Cozy room in a quiet neighborhood, ideal for students and professionals.",
        image: "room-b.jpg"
    },
    "room-c": {
        title: "Room C",
        price: "$300/month",
        location: "Rural Area",
        description: "Affordable room surrounded by nature, perfect for relaxation.",
        image: "room-c.jpg"
    }
};

// Handle View Details Button Click
document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", (e) => {
        const roomKey = e.target.closest(".room-card").dataset.room;
        const room = roomData[roomKey];

        document.getElementById("modal-room-title").innerText = room.title;
        document.getElementById("modal-room-price").innerText = `Price: ${room.price}`;
        document.getElementById("modal-room-location").innerText = `Location: ${room.location}`;
        document.getElementById("modal-room-description").innerText = `Description: ${room.description}`;
        document.getElementById("modal-room-image").src = room.image;

        modal.style.display = "flex";
    });
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal by Clicking Outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
