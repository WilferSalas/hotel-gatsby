import { graphql, useStaticQuery } from 'gatsby';

const GET_SEO = graphql`
    query {
        datoCmsSite {
            globalSeo {
                siteName
                titleSuffix
                fallbackSeo {
                    title
                    description
                }
            }
        }
    }
`;

const useSeo = () => {
    const data = useStaticQuery(GET_SEO);

    const { datoCmsSite: { globalSeo: { fallbackSeo } } } = data;

    return fallbackSeo;
};

export default useSeo;