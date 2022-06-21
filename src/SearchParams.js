import { useState } from "react";

const ANIMALS = ["dog", "cat", "bird", "cow", "goat", "pig"];

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = ["labrador", "poodle", "pug", "bulldog"];
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location {location}
          <input
            type="text"
            id="location"
            defaultValue={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            defaultValue={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            defaultValue={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((allBreed) => (
              <option key={allBreed} value={allBreed}>
                {allBreed}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
