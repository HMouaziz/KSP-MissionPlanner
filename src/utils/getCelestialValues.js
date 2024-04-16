import celestialBodies from "@/data/json/celestialBodies.json";

export function getCelestialValues(objectIds = [], keys = []) {
  const data = celestialBodies;
  if (objectIds.length === 0 || objectIds.includes('all')) {
    objectIds = data.map(item => item.id);
  }

  if (keys.length === 0 || keys.includes('all')) {
    keys = Object.keys(data.reduce((acc, cur) => ({ ...acc, ...cur }), {}));
  }

  return objectIds.map(objectId => {
    const object = data.find(item => item.id === objectId);
    if (!object) {
      return { id: objectId, error: "Object with the specified ID not found." };
    }

    const values = keys.reduce((acc, key) => {
      const value = key.split('.').reduce((o, k) => (o || {})[k], object);
      if (value !== undefined) {
        acc[key] = value;
      } else {
        acc[key] = `Key '${key}' not found.`;
      }
      return acc;
    }, {});

    return { id: objectId, ...values };
  });
}
