import Image from 'next/image';

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const DestinationPicker = ({destinations}: Destination[] ) => {

  const { name, images, description, distance, travel } = destinations[0];
  const destinationNames = destinations.map(dest => {
    return dest.name;
  });

  return (
    <div className="flex flex-row">
      <Image src={images.webp} alt="planet" width={300} height={300}/>
      <aside className="grow">
        <nav>
          <ul className="flex flew-row">
          {
            destinationNames.map(name => {
              return <li className="uppercase" key={name}>{name}</li>
            })
          }
          </ul>
        </nav>
        <h2 className="text-xl font-serif uppercase">{name}</h2>
        <div className="font-sans">{description}</div>
        <div className="flex flex-1 flex-row">
          <div className="grow">
            <div className="font-sansCondensed">Avg. Distance</div>
            <div>{distance}</div>
          </div>
          <div className="grow">
            <div className="font-sansCondensed">Est. Travel Time</div>
            <div>{travel}</div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default DestinationPicker;