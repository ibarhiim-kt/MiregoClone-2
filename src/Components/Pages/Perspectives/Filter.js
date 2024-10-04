import React, {useState} from 'react'
import Hero from './Hero';
import CardsCode from './CardsCode';

export default function Filter({cards}) {
    const filters = ["All", "Work", "Development", "AI", "Strategy", "Design"];
      const [selectedFilter, setSelectedFilter] = useState("");
    
      const filteredCards = cards.filter((card) => {        
        return (    
          !selectedFilter ||
          card.btn1?.toLowerCase() === selectedFilter.toLowerCase() ||
          card.btn2?.toLowerCase() === selectedFilter.toLowerCase() ||
          card.btn3?.toLowerCase() === selectedFilter.toLowerCase()
        );
      });
  return (
    <div>
    <Hero filteredCards={filteredCards} />
      <div className="filters text-xs-base font-AlmiregoRegular flex flex-wrap gap-2 tracking-[0.19px] leading-[120%] mb-32 perspectives-h1-gsap">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setSelectedFilter(filter === "All" ? "" : filter)}
        className={`border border-white-primary py-[5px] px-3 hover:bg-white hover:text-black-primary group-hover:mr-2 duration-300 ${
          filter === "All" ? "rounded-[50vh] " : "rounded-md"} ${selectedFilter === filter || (filter === "All" && selectedFilter === "") ? "bg-white text-black-primary" : ""}
          `}>
        {filter}
      </button>
    ))}
  </div>   
    <CardsCode filteredCards={filteredCards} />
    </div>
  )
}
