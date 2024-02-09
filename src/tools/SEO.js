import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({title, description, name, type, imagem}) {
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title}</title>
      <meta charSet='utf-8'/>
      <meta name='keywords' content=''/>
      <meta name='description' content={description ? description : 'A simple cv based on windows xp, developed using react, css, tailwind. The project is an MVP'} />
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:type" content={type ? type : 'website'} />
      <meta property="og:title" content={title ? title : 'Edson CV Based on Windows XP'} />
      <meta property="og:description" content={description ? description : 'A simple cv based on windows xp, developed using react, css, tailwind. The project is an MVP'} />
      <meta property="og:image" content={imagem ? imagem : require('../static/seo/facebook.png')}/>
      {/*<meta property="og:url" content="pets.abc" />*/}
      <meta property="og:locale" content="en_US" />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={name ? name : '@eddskt'} />
      <meta name="twitter:card" content={type ? type : "website"} />
      <meta name="twitter:title" content={title ? title : 'Edson CV Based on Windows XP'} />
      <meta name="twitter:description" content={description ? description : 'A simple cv based on windows xp, developed using react, css, tailwind. The project is an MVP'} />
      <meta name="twitter:image" content={imagem ? imagem : require('../static/seo/twitter.png')}/>
      { /* End Twitter tags */ }
    </Helmet>
  )
}

{/* <meta name="description" content="Find all the best quality products your pet may need" />                
<meta name="twitter:site" content="@user" />
<meta property="og:image" content="url_to_image”/>
<meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}

