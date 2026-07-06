export async function getAddress(lat, lng) {
    try {

        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );

        const data = await response.json();

        return data.display_name;

    } catch (error) {

        console.error(error);

        return "Unknown Location";

    }
}