// import {TextureLoader} from "three";
// import {useLoader} from "@react-three/fiber";

const CelestialObjectMesh = ({ celestialObject, parentPosition, onDoubleClick}) => {
    if (!celestialObject) {
        console.error("Invalid or incomplete celestialObject prop provided.");
        return null;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const texture = useLoader(TextureLoader, 'src/assets/circle-512.png');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [isHovered, setIsHovered] = useState(false);

    const { position, size, color } = celestialObject;

    const safeParentPosition = parentPosition || { x: 0, y: 0, z: 0 };
    console.log(position)
    console.log(safeParentPosition)
    const realPosition = {
        x: celestialObject.position.x + safeParentPosition.x,
        y: celestialObject.position.y + safeParentPosition.y,
        z: celestialObject.position.z + safeParentPosition.z,
    };
    console.log(realPosition)
    return (
        <>
            <mesh position={realPosition}
                  onDoubleClick={(e) => onDoubleClick(e, celestialObject)}
                  // onPointerOver={(e) => {
                  //     e.stopPropagation();
                  //     console.log(`${celestialObject.name}`);
                  //     setIsHovered(true);
                  // }}
                  // onPointerOut={(e) => {
                  //     e.stopPropagation();
                  //     setIsHovered(false);
                  // }}
            >
                <sphereGeometry args={[size, 32, 32]}/>
                <meshStandardMaterial color={color} />
                {/*{isHovered && (*/}
                {/*    <Html position={[0, size * 10, 0]} transform occlude>*/}
                {/*        <div style={{*/}
                {/*            color: 'white',*/}
                {/*            background: 'rgba(0, 0, 0, 0.75)',*/}
                {/*            padding: '2px 5px',*/}
                {/*            borderRadius: '4px'*/}
                {/*        }}>*/}
                {/*            {name}*/}
                {/*        </div>*/}
                {/*    </Html>*/}
                {/*)}*/}
            </mesh>
            {/*<sprite position={position} scale={50}>*/}
            {/*    <spriteMaterial map={texture} color={color}/>*/}
            {/*</sprite>*/}
        </>
    );
};
export default CelestialObjectMesh;