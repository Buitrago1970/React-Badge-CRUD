import React from "react";
import "./styles/BadgeList.css";
import { Link } from "react-router-dom";

import { AiOutlineTwitter } from "react-icons/ai";
import Gravatar from "./Gravatar";

function useFilterBadges(badges) {
  // hooks
  const [query, setQuery] = React.useState("");
  const [filterBadges, setFilterBadges] = React.useState(badges);
  // filter badge list
  //usamos la funcion useMemo de react para gusrdar la busqueda
  React.useMemo(() => {
    //busquamos la lista de los badges y gurdamos el resultado ya filtrado en result
    const result = badges.filter((badges) => {
      return ` ${badges.lastName}${badges.firstName} `
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    // filterBadges tiene el valor de toda la lista de badges (5)
    //pasamos el resultado de la lista a filterBadges
    setFilterBadges(result);
    //guardamos los resultados de la busqueda para usarlos despues
  }, [query, badges]);
  //retornamos el query (palabra a buscar), setQuery(para guardar el valor de la busqueda) y la lista ya filtrada
  return { query, setQuery, filterBadges };
}

function BadgeList(props) {
  const badges = props.listValues;

  // llamamos al hook personalizado, le pasamos la lista (badges) y recibimos: query, setQuery, filterBadges
  const { query, setQuery, filterBadges } = useFilterBadges(badges);

  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Serch Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
      </div>
    );
  }

  return (
    <ul className="list-unstyled">
      {/* search */}
      <div className="form-group">
        <label>Serch Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      {/* iterar cada persona en la lista */}
      {filterBadges.reverse().map((persona) => {
        return (
          <li key={persona.id} className="list-group-item">
            <div className="BadgeList__section-name">
              <Gravatar email={persona.email} alt="Avatar" />
            </div>
            <div className="Badge_prueba">
              <h5>
                {persona.firstName} {persona.lastName}
              </h5>{" "}
              <p className="twitter_blue_font">
                <AiOutlineTwitter size="30px" color="#007bff" />@
                {persona.twitter}
              </p>
              <p> {persona.jobTitle}</p>
            </div>
            <div className="container-icon-edit">
              <Link to={`badges/${persona.id}/edit`}> ...</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default BadgeList;
