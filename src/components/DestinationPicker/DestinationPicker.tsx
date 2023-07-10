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

const DestinationPicker = (destinations: Destination[]) => {
  // console.log(destinations);
  return (
    <div>
      <nav>
        <ul>
          <li>moon</li>
        </ul>
      </nav>
    </div>
  )
}

export default DestinationPicker;