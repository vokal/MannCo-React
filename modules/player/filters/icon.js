"use strict";

var classMap = require( "../values/classMap" );

module.exports = ( player, size ) => {
  if( player.profile_image_url )
  {
    return { uri: player.profile_image_url + "?c=true&s=" + ( size || "100" ) };
  }

  return classMap
    .map( cls => ( { img: cls.img, kills: player[ cls.killsAttr ] } ) )
    .sort( ( a, b ) => b.kills - a.kills )[ 0 ].img;
};
