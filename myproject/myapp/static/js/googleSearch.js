const GoogleSearch = () => (
  <div>
      <h2>Google Search</h2>
      <input type="text" placeholder="Search Google..." onKeyPress={(e) => {
          if (e.key === 'Enter') {
              window.open(`https://www.google.com/search?q=${e.target.value}`);
          }
      }} />
  </div>
);

export default GoogleSearch;
