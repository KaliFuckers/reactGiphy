import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  console.log(data);
  return (
    <div>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      <ol className="card-grid">
        {loading
          ? "Cargando..."
          : data.map(({ id, title, url }) => (
              <GifGridItem key={id} title={title} url={url} />
            ))}
      </ol>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
