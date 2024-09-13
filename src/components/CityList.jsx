import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message.jsx";
import CityItem from "./CityItem.jsx";
import { useCiites } from "../Context/CitiesContext.jsx";

/* eslint-disable react/prop-types */

function CityList() {
  const { cities, isLoading } = useCiites();
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Please add your first city by clicking on map." />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
