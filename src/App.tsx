import "./App.css";
import { useState } from "react";
import { useQuery } from "@apollo/client";

import { gql } from "../src/__generated__/gql";

import { ApartmentCard } from "./ApartmentCard";

const GET_APARTMENTS = gql(`
  query Apartments($annonseradTill: date_comparison_exp, $kommun: String_comparison_exp) {
    Apartments(where: {AnnonseradTill: $annonseradTill, Kommun: $kommun}, order_by: {AnnonseradTill: desc}, limit: 10) {
      AnnonsId
      KoordinatLatitud
      KoordinatLongitud
      AnnonseradTill
      Kommun
      AntalRum
      Gatuadress
      Hyra
      Stadsdel
      Vaning
      Yta
    }
  }
`);

const GET_MUNICIPALITIES = gql(`
  query Municipalities {
    Municipalities {
      Kommun
    }
  }
`);

const GET_USER_APARTMENTS = gql(`
query MyQuery {
  Users {
    UserId
    UserApartments {
      Apartment {
        AnnonsId
        AnnonseradFran
        AnnonseradTill
        Kommun
      }
    }
  }
}
`);

function DisplayLocations({ kommun }: { kommun: string | undefined }) {
  const { loading, error, data } = useQuery(GET_APARTMENTS, {
    variables: {
      // annonseradTill: { _gt: "2024-03-25" },
      annonseradTill: {},
      kommun: kommun ? { _eq: kommun } : {},
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: userData } = useQuery(GET_USER_APARTMENTS);

  console.log("userData: ", userData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data!.Apartments.map((apartment) => (
    <ApartmentCard key={apartment.AnnonsId} apartment={apartment} />
  ));
}

function App() {
  const [selectedMun, setSelectetMun] = useState<string | undefined>(undefined);
  const {
    loading: munLoading,
    error: munError,
    data: munData,
  } = useQuery(GET_MUNICIPALITIES);

  return (
    <>
      <div className="dark dark:bg-slate-900 dark:text-white h-screen flex">
        <div className="max-h-screen overflow-y-auto w-64 min-w-64 p-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Ngtskit
              </label>
              <input
                className="
                appearance-none 
                block w-full 
                dark:bg-slate-800 
                text-gray-200 
                border 
                border-gray-600 
                rounded 
                py-2 
                px-3 
                mb-3 
                leading-tight 
                focus:outline-none 
                focus:border-teal-200
                "
                placeholder="hero"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Kommun
              </label>
              <select
                className="appearance-none block w-full dark:bg-slate-800 text-gray-200 border border-gray-600 rounded py-2 px-3 pr-8 leading-tight focus:outline-none focus:border-teal-200"
                value={selectedMun}
                onChange={(e) => setSelectetMun(e.target.value)}
              >
                <option disabled value={undefined}>
                  Välj kommun
                </option>
                {munData?.Municipalities.length && (
                  <>
                    {munData.Municipalities.map((mun) => (
                      <option key={mun.Kommun} value={mun.Kommun}>
                        {mun.Kommun}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="max-h-screen overflow-y-auto w-full p-4 flex flex-col gap-4">
          <DisplayLocations kommun={selectedMun} />
        </div>
        <div className="max-h-screen overflow-y-auto w-full p-4">
          <DisplayLocations kommun={selectedMun} />
        </div>
      </div>
    </>
  );
}

export default App;
