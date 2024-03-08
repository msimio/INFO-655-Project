export default function HeightDisplay({ unitvalue }) {
    if (unitvalue === "US") {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
   
          <p>Inches</p>
        </div>
      );
    } else {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Centimeters</p>
        </div>
      );
    }
  }
  