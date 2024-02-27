function LoadingCountriesAndCities({ type }) {
  return (
    <option style={{ color: "var(--color-grey-400)" }}>
      Loading {type}...
    </option>
  );
}

export default LoadingCountriesAndCities;
