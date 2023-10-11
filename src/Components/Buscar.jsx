function Buscar({ buscar, handleChange }) {
  const style = {
    search: {
      marginBottom: "10px",
    },
  };
  return (
    <div>
      <input
        style={style.search}
        type="text"
        name="buscar"
        value={buscar}
        onChange={handleChange}
      />
    </div>
  );
}

export default Buscar;
