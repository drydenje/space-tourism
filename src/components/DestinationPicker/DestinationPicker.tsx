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

  const { name, imagesCollection, description, distance, travel } = destinations[0];
  const image = imagesCollection.items[1];
  console.log('image:', image)

  const destinationNames = destinations.map(dest => {
    return dest.name;
  });

  return (
    <div className="flex flex-row">
      <Image src={`${image.url}`} alt="planet" width={`${image.width}`} height={`${image.height}`}/>
      <aside className="grow">
        <nav>
          <ul className="flex flew-row">
          {
            destinationNames.map(name => {
              return <li className="font-sansCondensed text-xs uppercase" key={name}>{name}</li>
            })
          }
          </ul>
        </nav>
        <h2 className="font-serif text-7xl uppercase">{name}</h2>
        <div className="font-sans text-sm">{description}</div>
        <div className="flex flex-1 flex-row">
          <div className="grow">
            <div className="font-sansCondensed text-xs uppercase">Avg. Distance</div>
            <div className="font-serif text-2xl uppercase">{distance}</div>
          </div>
          <div className="grow">
            <div className="font-sansCondensed text-xs uppercase">Est. Travel Time</div>
            <div className="font-serif text-2xl uppercase">{travel}</div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default DestinationPicker;