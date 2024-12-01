// Room Data
const roomData = {
    "room-a": {
        title: "Room A",
        price: "$500/month",
        location: "Downtown",
        description: "Spacious room with a great view, furnished with modern amenities.",
        image: "images/room-a.jpg"
    },
    "room-b": {
        title: "Room B",
        price: "$400/month",
        location: "Suburb",
        description: "Cozy room in a quiet neighborhood, ideal for students and professionals.",
        image: "images/room-b.jpg"
    },
    "room-c": {
        title: "Room C",
        price: "$300/month",
        location: "Rural Area",
        description: "Affordable room surrounded by nature, perfect for relaxation.",
        image: "images/room-c.jpg"
    },
    "room-d": {
        title: "Room D",
        price: "$600/month",
        location: "City Center",
        description: "Modern room with a city view.",
        image: "images/room-d.jpg"
    },
    "room-e": {
        title: "Room E",
        price: "$450/month",
        location: "Uptown",
        description: "Stylish room in a vibrant area.",
        image: "images/room-e.jpg"
    },
    "room-f": {
        title: "Room F",
        price: "$550/month",
        location: "Near Park",
        description: "Room with easy access to green spaces.",
        image: "images/room-f.jpg"
    },
    "room-g": {
        title: "Room G",
        price: "$350/month",
        location: "Suburban Area",
        description: "Comfortable room with a friendly atmosphere.",
        image: "images/room-g.jpg"
    },
    "room-h": {
        title: "Room H",
        price: "$700/month",
        location: "Luxury District",
        description: "High-end room with premium facilities.",
        image: "images/room-h.jpg"
    },
    "room-i": {
        title: "Room I",
        price: "$400/month",
        location: "Near University",
        description: "Ideal for students, close to campus.",
        image: "images/room-i.jpg"
    },
    "room-j": {
        title: "Room J",
        price: "$500/month",
        location: "Business District",
        description: "Perfect for professionals, centrally located.",
        image: "images/room-j.jpg"
    },
    "room-k": {
        title: "Room K",
        price: "$300/month",
        location: "Countryside",
        description: "Peaceful room with scenic views.",
        image: "images/room-k.jpg"
    },
    "room-l": {
        title: "Room L",
        price: "$650/month",
        location: "Coastal Area",
        description: "Room with ocean views and fresh air.",
        image: "images/room-l.jpg"
    },
    "room-m": {
        title: "Room M",
        price: "$375/month",
        location: "Historic District",
        description: "Charming room with vintage decor.",
        image: "images/room-m.jpg"
    },
    "room-n": {
        title: "Room N",
        price: "$425/month",
        location: "Cultural Hub",
        description: "Vibrant room near art galleries and theaters.",
        image: "images/room-n.jpg"
    }
};

// Modal functionality
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", (e) => {
        const roomKey = e.target.closest(".room-card").dataset.room;
        const room = roomData[roomKey];

        // Clear existing room details
        const modalContent = document.getElementById("modal-room-content");
        modalContent.innerHTML = ""; // Clear existing content

        // Display the selected room
        const selectedRoomHTML = `
            <h2>${room.title}</h2>
            <p>Price: ${room.price}</p>
            <p>Location: ${room.location}</p>
            <p>Description: ${room.description}</p>
            <img src="${room.image}" alt="${room.title}" />
        `;
        modalContent.innerHTML += selectedRoomHTML;

        // Display other rooms
        for (const key in roomData) {
            if (key !== roomKey) {
                const otherRoom = roomData[key];
                const otherRoomHTML = `
                    <div class="other-room">
                        <h3>${otherRoom.title}</h3>
                        <p>Price: ${otherRoom.price}</p>
                        <p>Location: ${otherRoom.location}</p>
                        <img src="${otherRoom.image}" alt="${otherRoom.title}" />
                    </div>
                `;
                modalContent.innerHTML += otherRoomHTML;
            }
        }

        modal.style.display = "flex"; // Show modal
    });
});

// Close modal functionality
closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // Hide modal
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal if clicked outside
    }
});