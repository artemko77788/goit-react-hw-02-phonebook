const Contacts = ({ data }) => {
  return (
    <ul>
      {data.map(el => {
        const { name, id, number } = el;
        return (
          <li key={id}>
            {name} :{number}
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
