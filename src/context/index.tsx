"use client";

import { createContext, useContext, useMemo, useState } from "react";

const FeedbackUiContext = createContext({});

export const FeedbackUiLayoutProvider = ({ children }: any) => {
  const [restaurantData, setRestaurantData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    checkInDate: "",
    checkOutDate: "",
    hearAbout: "",
    welcomeOnArrival: "",
  });

  // 0597463174

  const [restaurantQuestion, setRestaurantQuestions] = useState({
    welcome: "",
    waiterService: "",
    beverageVariety: "",
    foodQuality: "",
    foodVariety: "",
    ambiance: "",
    billPresentation: "",
    managementVisibility: "",
    overallExperience: "",
    commendStaff: "",
    comments: "",
  });

  const [money, setMoney] = useState(100);

  const memoValues = useMemo(
    () => ({
      restaurantData,
      setRestaurantData,
      restaurantQuestion,
      setRestaurantQuestions,
      money,
      setMoney,
    }),
    [
      restaurantData,
      setRestaurantData,
      money,
      restaurantQuestion,
      setRestaurantQuestions,
    ]
  );

  return (
    <FeedbackUiContext.Provider value={memoValues}>
       {children}
    </FeedbackUiContext.Provider>
  );
};

export const MainStateProvider = () => useContext(FeedbackUiContext)

// export function useFeedbackUiContext() {
// return useContext(FeedbackUiContext);}
