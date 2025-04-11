
import React from "react";

const ValueProposition = () => {
  const valueProps = [
    {
      gap: "Pravachans too long and dense",
      solution: "Short-form, searchable, visual content"
    },
    {
      gap: "Rituals scattered across unverified sites",
      solution: "Scholar-guided, structured Dharma guide"
    },
    {
      gap: "No platform for centralized festival info",
      solution: "Festival & Forum Central for region-based events"
    },
    {
      gap: "Pandit booking is offline and unclear",
      solution: "Digital tool with regional filters, profiles & contact"
    },
    {
      gap: "Youth uninterested in traditional formats",
      solution: "Reels, quizzes, community interaction, and personalization"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-madhwa-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-madhwa-100 dark:bg-madhwa-800 text-madhwa-600 dark:text-madhwa-300 px-4 py-1 rounded-full text-sm font-medium mb-4">Unique Value Proposition</span>
          <h2 className="font-serif text-3xl font-bold text-madhwa-700 dark:text-madhwa-300 mb-4">How We're Different</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            MadhwaSetu addresses key gaps in how spiritual knowledge is currently shared with the community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl border border-madhwa-100 dark:border-madhwa-700 shadow-lg">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-madhwa-50 dark:bg-madhwa-800 z-0"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white dark:bg-madhwa-700 z-0"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-2">
                <div className="p-4 bg-madhwa-50 dark:bg-madhwa-800 font-medium text-madhwa-700 dark:text-white text-center border-b border-madhwa-100 dark:border-madhwa-600">
                  Gap in Existing Platforms
                </div>
                <div className="p-4 bg-white dark:bg-madhwa-700 font-medium text-madhwa-700 dark:text-white text-center border-b border-madhwa-100 dark:border-madhwa-600">
                  MadhwaSetu Solution
                </div>
              </div>

              {valueProps.map((item, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div className="p-5 bg-madhwa-50 dark:bg-madhwa-800 text-gray-700 dark:text-gray-300 border-b border-madhwa-100 dark:border-madhwa-600">
                    {item.gap}
                  </div>
                  <div className="p-5 bg-white dark:bg-madhwa-700 text-gray-700 dark:text-gray-300 border-b border-madhwa-100 dark:border-madhwa-600">
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
