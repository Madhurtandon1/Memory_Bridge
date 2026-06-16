import { useEffect, useState } from "react";

import {
  getInsights
} from "../../services/memory.api";

export default function Insights() {

  const [
    insights,
    setInsights
  ] = useState(null);

  const [
    loading,
    setLoading
  ] = useState(true);

  useEffect(() => {

    fetchInsights();

  }, []);

  const fetchInsights =
    async () => {

      try {

        const res =
          await getInsights();

        setInsights(
          res.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  if (loading) {

    return (
      <div className="p-8">
        Loading insights...
      </div>
    );
  }

  return (

    <div
      className="
      max-w-7xl
      mx-auto
      py-8
      pb-10
      space-y-8"
    >

      <div>

        <h1
          className="
          text-4xl
          font-bold"
        >
          Insights
        </h1>

        <p
          className="
          text-gray-500
          mt-2"
        >
          Understand your memories
        </p>

      </div>

      {/* Stats */}

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6"
      >

        <div
          className="
          bg-white
          rounded-3xl
          p-6
          border"
        >

          <p
            className="
            text-gray-500"
          >
            Total Memories
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3"
          >
            {insights.totalMemories}
          </h2>

        </div>

        <div
          className="
          bg-white
          rounded-3xl
          p-6
          border"
        >

          <p
            className="
            text-gray-500"
          >
            Stories Generated
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3"
          >
            {insights.totalStories}
          </h2>

        </div>

      </div>

      {/* People */}

      <div
        className="
        bg-white
        rounded-3xl
        p-6
        border"
      >

        <h2
          className="
          text-2xl
          font-semibold
          mb-4"
        >
          Top People
        </h2>

        <div
          className="
          space-y-3"
        >

          {insights.topPeople?.map(
            (person) => (

              <div
                key={person.name}
                className="
                flex
                justify-between"
              >

                <span>
                  {person.name}
                </span>

                <span>
                  {person.count}
                </span>

              </div>

            )
          )}

        </div>

      </div>

      {/* Emotions */}

      <div
        className="
        bg-white
        rounded-3xl
        p-6
        border"
      >

        <h2
          className="
          text-2xl
          font-semibold
          mb-4"
        >
          Top Emotions
        </h2>

        <div
          className="
          space-y-3"
        >

          {insights.topEmotions?.map(
            (emotion) => (

              <div
                key={emotion.emotion}
                className="
                flex
                justify-between"
              >

                <span>
                  {emotion.emotion}
                </span>

                <span>
                  {emotion.count}
                </span>

              </div>

            )
          )}

        </div>

      </div>

      {/* Events */}

      <div
        className="
        bg-white
        rounded-3xl
        p-6
        border"
      >

        <h2
          className="
          text-2xl
          font-semibold
          mb-4"
        >
          Top Events
        </h2>

        <div
          className="
          space-y-3"
        >

          {insights.topEvents?.map(
            (event) => (

              <div
                key={event.event}
                className="
                flex
                justify-between"
              >

                <span>
                  {event.event}
                </span>

                <span>
                  {event.count}
                </span>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}