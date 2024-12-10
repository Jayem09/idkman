// Room Data
const roomData = {
    "room-a": {
        title: "Room A",
        price: "₱500/month",
        location: "Downtown",
        description: "Spacious room with a great view, furnished with modern amenities.",
        image: "images/room-1.jpeg"
    },
    "room-b": {
        title: "Room B",
        price: "₱400/month",
        location: "Suburb",
        description: "Cozy room in a quiet neighborhood, ideal for students and professionals.",
        image: "images/room-2.jpeg"
    },
    "room-c": {
        title: "Room C",
        price: "₱300/month",
        location: "Rural Area",
        description: "Affordable room surrounded by nature, perfect for relaxation.",
        image: "images/room-3.jpeg"
    },
    "room-d": {
        title: "Room D",
        price: "₱600/month",
        location: "City Center",
        description: "Modern room with a city view.",
        image: "images/room-4.jpeg"
    },
    "room-e": {
        title: "Room E",
        price: "₱450/month",
        location: "Uptown",
        description: "Stylish room in a vibrant area.",
        image: "images/room-5.jpeg"
    },
    "room-f": {
        title: "Room F",
        price: "₱550/month",
        location: "Near Park",
        description: "Room with easy access to green spaces.",
        image: "images/room-6.jpeg"
    },
    "room-g": {
        title: "Room G",
        price: "₱350/month",
        location: "Suburban Area",
        description: "Comfortable room with a friendly atmosphere.",
        image: "images/room-7.jpeg"
    },
    "room-h": {
        title: "Room H",
        price: "₱700/month",
        location: "Luxury District",
        description: "High-end room with premium facilities.",
        image: "images/room-8.jpeg"
    },
    "room-i": {
        title: "Room I",
        price: "₱400/month",
        location: "Near University",
        description: "Ideal for students, close to campus.",
        image: "images/room-9.jpeg"
    },
    "room-j": {
        title: "Room J",
        price: "₱500/month",
        location: "Business District",
        description: "Perfect for professionals, centrally located.",
        image: "images/room-10.jpeg"
    },
    "room-k": {
        title: "Room K",
        price: "₱300/month",
        location: "Countryside",
        description: "Peaceful room with scenic views.",
        image: "images/room-11.jpeg"
    },
    "room-l": {
        title: "Room L",
        price: "₱650/month",
        location: "Coastal Area",
        description: "Room with ocean views and fresh air.",
        image: "images/room-12.jpeg"
    },
    "room-m": {
        title: "Room M",
        price: "₱375/month",
        location: "Historic District",
        description: "Charming room with vintage decor.",
        image: "images/room-13.jpeg"
    },
    "room-n": {
        title: "Room N",
        price: "₱425/month",
        location: "Cultural Hub",
        description: "Vibrant room near art galleries and theaters.",
        image: "images/room-14.jpeg"
    }
};


// Function to populate room details on the details page
function populateRoomDetails() {
    // Retrieve the room key from the URL (e.g., ?room=room-a)
    const urlParams = new URLSearchParams(window.location.search);
    const roomKey = urlParams.get("room");

    if (roomKey && roomData[roomKey]) {
        const room = roomData[roomKey];

        // Populate room details
        document.getElementById("room-title").textContent = room.title;
        document.getElementById("room-price").textContent = `Price: ${room.price}`;
        document.getElementById("room-location").textContent = `Location: ${room.location}`;
        document.getElementById("room-description").textContent = `Description: ${room.description}`;
        document.getElementById("room-image").src = room.image;
        document.getElementById("room-image").alt = room.title;
    } else {
        alert("Room details not found!");
    }
}

// Add event listener for the back button
document.getElementById("back-button").addEventListener("click", () => {
    window.history.back(); // Navigate back to the previous page
});



// Populate room details when the page loads
document.addEventListener("DOMContentLoaded", populateRoomDetails);


// Filter room cards based on selected type
roomTypeDropdown.addEventListener("change", function () {
    const selectedType = this.value;

    roomCards.forEach(card => {
        const roomType = card.getAttribute("data-room-type"); // Assuming each room card has a data attribute for type
        card.style.display = (selectedType === "all" || roomType === selectedType) ? "block" : "none"; // Show or hide the card
    });
});

