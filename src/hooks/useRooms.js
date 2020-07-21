// @packages
import { graphql, useStaticQuery } from 'gatsby';

// @graphiQL
const GET_ROOMS = graphql`
  query {
    allDatoCmsHabitacion {
      nodes {
        contenido
        slug
        titulo
        imagen {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;

const useRooms = () => {
    const data = useStaticQuery(GET_ROOMS);

    const { allDatoCmsHabitacion: { nodes } } = data;

    return nodes;
};

export default useRooms;