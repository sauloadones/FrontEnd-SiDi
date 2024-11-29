import {Helmet} from "react-helmet";

const Head = ({ title }) => {
    return (
        <div>        
            <Helmet>            
                <title>SiDi - { title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
            </Helmet>
        </div>
    );
};

export default Head;