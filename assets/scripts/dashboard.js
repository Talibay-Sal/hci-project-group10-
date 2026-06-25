// Fetch and display data for recent bookings
document.addEventListener('DOMContentLoaded', () => {
    fetchRecentBookings();
    renderCharts();
});

function fetchRecentBookings() {
    fetch('../backend/fetch_recent_bookings.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('recentBookingsTable');
            tableBody.innerHTML = data.map(booking => `
                <tr>
                    <td>${booking.customer_name}</td>
                    <td>${booking.pickup}</td>
                    <td>${booking.destination}</td>
                    <td>${booking.date_time}</td>
                    <td>${booking.status}</td>
                    <td>
                        <span class="action-btn">View</span> |
                        <span class="action-btn">Edit</span> |
                        <span class="action-btn">Delete</span>
                    </td>
                </tr>
            `).join('');
        });
}

function renderCharts() {
    const bookingsCtx = document.getElementById('bookingsChart').getContext('2d');
    const destinationsCtx = document.getElementById('destinationsChart').getContext('2d');

    new Chart(bookingsCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{ label: 'Bookings', data: [5, 10, 8, 15, 6], backgroundColor: '#007bff' }]
        },
        options: { responsive: true }
    });

    new Chart(destinationsCtx, {
        type: 'pie',
        data: {
            labels: ['Paris', 'New York', 'London', 'Dubai', 'Tokyo'],
            datasets: [{ label: 'Popular Destinations', data: [12, 19, 3, 5, 2], backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6c757d'] }]
        },
        options: { responsive: true }
    });
}
