import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
}

const SEO = ({ title }: SEOProps) => {
    return (
        <Helmet>
            <title>{`Mulajim Ali | ${title}`}</title>
        </Helmet>
    );
};

export default SEO;
