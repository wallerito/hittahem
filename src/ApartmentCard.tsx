import { Apartments } from "../src/__generated__/graphql";

type ApartmentCardProps = {
  apartment: Apartments;
};

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  const {
    Kommun,
    AnnonseradTill,
    KoordinatLatitud,
    KoordinatLongitud,
    AnnonsId,
    AntalRum,
    Gatuadress,
    Hyra,
    Stadsdel,
    Vaning,
    Yta,
  } = apartment;

  console.log(apartment);
  return (
    <>
      <div className="dark:bg-slate-800 p-4 rounded" key={AnnonsId}>
        <h3 className="text-xl">{Gatuadress}</h3>
        <div className="text-gray-400 text-sm">
          {Stadsdel}, {Kommun}
        </div>
        <div>{AntalRum} rum</div>
        {Yta !== null && <div>{Yta} kvm</div>}
        {Hyra !== null && <div>{Hyra} kr/mån</div>}
        {Vaning !== null && <div>{Vaning} tr</div>}
      </div>
    </>
  );
};

export { ApartmentCard };
