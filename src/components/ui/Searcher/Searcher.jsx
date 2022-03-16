import React from "react";
import './Searcher.css';

function Searcher() {
  return (
    <div className="searcher">
      <i class="fas fa-search searcher__icon"></i>
      <input type="text" className="searcher--inp" placeholder="Поиск" />
    </div>
  );
}

export default Searcher;
