exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);

    const { data: { allDatoCmsHabitacion: { nodes }}} = result;

    if (result.errors) {
        reporter.panic('No hubo resultados ', result.errors);
    }

    nodes.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/RoomDetails.js'),
            context: {
                slug: room.slug
            }
        })
    });
};