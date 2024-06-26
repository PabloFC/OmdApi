const SearchInput = ({ searchWords, setSearchWords }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={searchWords.value}
        onChange={(e) => setSearchWords(e.target.value)}
        type="text"
        placeholder="Search movie"
      />
    </div>
  );
};

export default SearchInput;
