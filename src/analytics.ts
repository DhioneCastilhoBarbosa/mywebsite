import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-ENHJ93BM3Q"; // Substitua pelo seu ID do Google Analytics

export const initGA = (): void => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (): void => {
  ReactGA.send("pageview");
};
