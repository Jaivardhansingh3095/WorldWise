import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";
import { useCiites } from "../Context/CitiesContext.jsx";

function CountryList() {
  const { cities, isLoading } = useCiites();

  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Please add your first city by clicking on map." />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.cityList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}

export default CountryList;
