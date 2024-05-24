import celestialBodies from '../data/json/celestialBodies.json';
import CelestialObject from "@/Classes/CelestialObject.js";

async function fetchDataGroups() {
    try {
        return celestialBodies.map(body => {
                return new CelestialObject(body);
            });
    } catch (error) {
        console.error("Failed to process celestial bodies:", error);
        return [];
    }
}

export default fetchDataGroups