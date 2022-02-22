import React, { lazy, Suspense } from "react";
import { isWithinInterval } from "date-fns";

import Season from "./components/Season/Season";
import data from './data/data.json'
import Modal from "./components/Modal/Modal";

const NextSeason = lazy(() => import("./components/NextSeason/NextSeason"));
const season = current(data.seasons);

function App() {
  return (
    <div>
      <div data-testid="content">
        <Season name={season[0]} />
      </div>

      <div data-testid="actions">
        <Modal label="Saison suivante">
          <Suspense fallback={<div>Loading...</div>}>
            <NextSeason name={season[1].next} />
          </Suspense>
        </Modal>
      </div>
      
    </div>
    )
}

export function current(seasons) {
  return Object.entries(seasons).filter(([name, season]) => {
    const currentYear = new Date().getFullYear();
    if (name === "winter") {
      return (
        isWithinInterval(new Date(), {
          start: new Date(
            currentYear - 1,
            season.beginAt.month - 1,
            season.beginAt.day
          ),
          end: new Date(currentYear, season.endAt.month - 1, season.endAt.day),
        }) ||
        isWithinInterval(new Date(), {
          start: new Date(
            currentYear,
            season.beginAt.month - 1,
            season.beginAt.day
          ),
          end: new Date(
            currentYear + 1,
            season.endAt.month - 1,
            season.endAt.day
          ),
        })
      );
    }
    return isWithinInterval(new Date(), {
      start: new Date(
        currentYear,
        season.beginAt.month - 1,
        season.beginAt.day
      ),
      end: new Date(currentYear, season.endAt.month - 1, season.endAt.day),
    });
  })[0];
}

export default App;
