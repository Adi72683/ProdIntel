import Chip from "../../atoms/Chip/Chip";

function FeatureChipList({
  features = [],
  selectedFeatures,
  onFeatureClick
}) {

  return (

    <div className="flex gap-8 flex-wrap justify-center">

      {features.map((feature, index) => (

        <Chip
          key={index}
          label={feature}
          selected={selectedFeatures.includes(feature)}
          onClick={() => onFeatureClick(feature)}
        />

      ))}

    </div>

  );

}

export default FeatureChipList;