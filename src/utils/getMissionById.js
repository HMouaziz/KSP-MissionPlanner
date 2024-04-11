export default function getMissionById(missions, id) {
  return missions.find(mission => mission.id === id);
}