const packageDatabase = {
    "2S3G0SHR746U": {
        status: "processing",
        weight: "24kg",
        description: "Bulk package CATINA",
        receiver: "Catina Taylor",
        destination: "218 Thomas St, Bldg 4, Apt 29, Tallulah, LA 71282, United States"
    },
    "TRACK990011": {
        status: "transit",
        weight: "5kg",
        description: "Electronics Box Jetset",
        receiver: "John Doe",
        destination: "123 Main Street, New York, NY 10001"
    },
    "TRACK554433": {
        status: "delivered",
        weight: "12kg",
        description: "Secure Business Documents Vault",
        receiver: "Sarah Smith",
        destination: "456 Corporate Way, London, UK"
    }
};

function trackPackage() {
    const rawInput = document.getElementById("tracking-id").value;
    const searchCode = rawInput.trim().toUpperCase(); 
    const resultsPanel = document.getElementById("result-page");

    if (packageDatabase[searchCode]) {
        const item = packageDatabase[searchCode];

        // Inject content safely
        document.getElementById("res-code").innerText = searchCode;
        document.getElementById("res-status").innerText = item.status.toUpperCase();
        document.getElementById("res-weight").innerText = item.weight;
        document.getElementById("res-desc").innerText = item.description;
        document.getElementById("res-receiver").innerText = item.receiver;
        document.getElementById("res-destination").innerText = item.destination;

        // Clear active classes completely
        const targetNodes = ["step-confirmed", "step-processing", "step-transit", "step-delivered"];
        targetNodes.forEach(id => document.getElementById(id).classList.remove("step-active"));

        // Waterfall neon step lighting engine logic
        document.getElementById("step-confirmed").classList.add("step-active");

        if (item.status === "processing" || item.status === "transit" || item.status === "delivered") {
            document.getElementById("step-processing").classList.add("step-active");
        }
        if (item.status === "transit" || item.status === "delivered") {
            document.getElementById("step-transit").classList.add("step-active");
        }
        if (item.status === "delivered") {
            document.getElementById("step-delivered").classList.add("step-active");
        }

        // Animate visibility smoothly on layout
        resultsPanel.classList.remove("hidden");
        setTimeout(() => {
            resultsPanel.classList.add("show-dashboard");
            resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);

    } else {
        alert("Invalid Identification String. Try tracking: 2S3G0SHR746U");
    }
}
