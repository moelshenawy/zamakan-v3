import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

// Create a context with an initial value (default value)
const MapContext = createContext();

// Create a custom hook to simplify using the context
export const useMapContext = () => {
  return useContext(MapContext);
};

// Create a provider component that will wrap your application
export const MapContextProvider = ({ children }) => {
  const [someValue, setSomeValue] = useState("Default Value");

  const updateValue = (newValue) => {
    setSomeValue(newValue);
  };

  // The value prop of the Provider will be available to all descendants
  const contextValue = {
    someValue,
    updateValue,
  };

  const containerRef = useRef(null);
  const handleClick = () => {
    // Navigate to the specified route
    router.push("/city");
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".city-name");
    const container = containerRef.current;

    elements.forEach((element) => {
      element.addEventListener("click", () => {
        handleClick();
      });
    });
  }, []);

  // SVG ZOOM
  const [landElments, setLandElemnts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLand, setActiveLand] = useState(null);

  const [isPointsActive, seIsPointsActive] = useState(false);

  const [cityNames, setCityNames] = useState([]);
  useEffect(() => {
    // Select all elements with the class name .land
    const elements = document.querySelectorAll(".land");
    const city = document.querySelectorAll(".city-name");
    setCityNames(city);
    setLandElemnts(elements);

    // Add dynamic IDs to the selected elements
    elements.forEach((element, index) => {
      element.setAttribute("id", `land-${index}`);
    });
  }, []);

  const transformComponentRef = useRef(null);
  const handleZoomToLand = (landIndex) => {
    const elementId = `land-${landIndex}`;
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(elementId);
    }
    setActiveIndex(landIndex); // Set the active index
    seIsPointsActive(false);
  };

  useEffect(() => {
    const dataIndex = document.querySelectorAll(`#land-${activeIndex}`)[0];
    const elementsWithLandClassOnly = document.querySelectorAll(
      ".land:not(.activeLand)"
    );

    if (activeLand) {
      activeLand.classList.remove("activeLand");
      seIsPointsActive(false);
    }

    if (dataIndex) {
      setActiveLand(dataIndex);
      dataIndex.classList.add("activeLand");
      seIsPointsActive(true);
    }

    if (isPointsActive === true) {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.add("hiddenPoints");
      });
    } else {
      elementsWithLandClassOnly.forEach((element) => {
        element.classList.remove("hiddenPoints");
      });
    }
  }, [activeIndex, activeLand]);

  const textContents = Array.from(cityNames).map((city) => city.textContent);

  const resetTransform = () => {
    if (transformComponentRef.current) {
      const { resetTransform } = transformComponentRef.current;
      resetTransform();
      setActiveIndex(null);
      setActiveLand(null);
      seIsPointsActive(false);

      landElments.forEach((element) => {
        element.classList.remove("activeLand", "hiddenPoints");
      });
    }
  };

  return (
    <MapContext.Provider
      value={{
        contextValue,
        landElments,
        setLandElemnts,
        activeIndex,
        setActiveIndex,
        activeLand,
        setActiveLand,
        resetTransform,
        isPointsActive,
        seIsPointsActive,
        cityNames,
        setCityNames,
        handleZoomToLand,
        transformComponentRef,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
